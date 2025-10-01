import { Icon } from "../Icon/Icon";
import {
  IconWrapper,
  OptionItem,
  OptionList,
  SelectContainer,
  SelectText,
  SelectTrigger,
} from "./Select.components";
import type { SelectProps } from "./Select.types";
import { useEffect, useRef, useState, type JSX } from "react";

const Select = ({
  options,
  value,
  onChange,
  placeholder = "by default",
}: SelectProps): JSX.Element => {
  const [isOpenState, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpenState) {
      document.addEventListener("mousedown", handleClickOutside);
      console.log("Поставили прослушку");
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      console.log("Убрали прослушку");
    };
  }, [isOpenState]);

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpenState);
  };

  return (
    <SelectContainer ref={selectRef}>
      <SelectTrigger
        type="button"
        isOpen={isOpenState}
        onClick={toggleDropdown}
        role="combobox"
        aria-expanded={isOpenState}
        aria-haspopup="listbox"
      >
        <SelectText>
          {selectedOption ? selectedOption.label : placeholder}
        </SelectText>
        <IconWrapper isOpen={isOpenState}>
          <Icon name="arrowDown" size="xsm" />
        </IconWrapper>
      </SelectTrigger>

      <OptionList isOpen={isOpenState} role="listbox">
        {options.map((option) => (
          <OptionItem
            key={option.value}
            isSelected={option.value === value}
            onClick={() => handleOptionClick(option.value)}
            role="option"
            aria-selected={option.value === value}
          >
            {option.label}
          </OptionItem>
        ))}
      </OptionList>
    </SelectContainer>
  );
};

export default Select;
