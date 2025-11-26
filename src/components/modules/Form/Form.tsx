import { FormContainer } from "./Form.components";
import Button from "../../elements/Button/Button";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import Text from "../../elements/Text/Text";
import { Icon } from "../../elements/Icon/Icon";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().optional(),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
});

type FormFields = z.infer<typeof schema>;

export type FormProps = {
  variant: "sale" | "order" | null;
  url: string;
  btn: string;
  btnVariant: "primary" | "secondary";
};

const Form = ({ variant, url, btn, btnVariant }: FormProps) => {
  const [message, setMessage] = useState<string | null>(null);
  const [showPopUp, setShowPopUp] = useState(false);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (showPopUp) dialog.showModal();
    else if (dialog.open) dialog.close();
  }, [showPopUp]);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log("✅ Form submitted with variant:", variant);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email,
        }),
      });
      const discountApplied = localStorage.getItem(data.email);

      if (response.ok && !discountApplied && variant === "sale") {
        setMessage("The discount has been successfully sent by email");
        localStorage.setItem(data.email, "discount");
      } else if (discountApplied && variant === "sale") {
        setMessage("You have already applied the discount.");
      } else if (response.ok && variant === "order") {
        setShowPopUp(true);

        console.log("🎉 Popup should show now");
        localStorage.setItem("order", data.email);
      } else {
        throw new Error("Failed to apply discount");
      }

      console.log("Form data submitted:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("email", {
        type: "manual",
        message: "Submission failed. Please try again.",
      });
    }
  };

  const inputClassName = variant === "sale" ? "sale" : "order";
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <input
        className={inputClassName}
        {...register("name", { required: true })}
        type="text"
        placeholder="Name"
      />
      {errors.name && (
        <div
          style={{
            color: `${variant === "sale" && "white"} `,
            display: "flex",
            alignItems: "center",
            paddingTop: "8px",
            gap: "5px",
          }}
        >
          <div style={{ width: "20px", height: "20px" }}>
            <Icon name="xTagon" size="small" />
          </div>
          {errors.name.message}
        </div>
      )}
      <input
        className={inputClassName}
        {...register("phone")}
        type="tel"
        placeholder="Phone number"
      />
      <input
        className={inputClassName}
        {...register("email", { required: true })}
        type="email"
        placeholder="Email"
      />
      {errors.email && (
        <div
          style={{
            color: `${variant === "sale" && "white"} `,
            display: "flex",
            alignItems: "center",
            paddingTop: "8px",
            gap: "5px",
          }}
        >
          <div style={{ width: "20px", height: "20px" }}>
            <Icon name="xTagon" size="small" />
          </div>

          {errors.email.message}
        </div>
      )}
      {message && (
        <p style={{ color: `${variant === "sale" && "white"} ` }}>{message}</p>
      )}

      <Button
        disabled={isSubmitting}
        type="submit"
        size="large"
        variant={btnVariant}
      >
        {isSubmitting ? "Submitting..." : btn}
      </Button>
      {showPopUp && (
        <dialog ref={dialogRef}>
          <Text variant="price40" weight="semiBold" color="white">
            Congratulations!
          </Text>
          <Text variant="dicount20" weight="semiBold" color="white">
            Your order has been successfully placed <br /> on the website.
          </Text>
          <Text variant="dicount20" weight="semiBold" color="white">
            A manager will contact you shortly <br /> to confirm your order.
          </Text>
          <button onClick={() => setShowPopUp(false)}>
            <Icon name="xwhite" size="small" />
          </button>
        </dialog>
      )}
    </FormContainer>
  );
};

export default Form;
