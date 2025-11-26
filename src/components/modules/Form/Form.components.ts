import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const FormContainer = styled.form`
  width: 100%;
  height: 100%;
  input {
    width: 100%;
    height: 58px;
    font-size: ${theme.fonts.size.lg};
    font-weight: ${theme.fonts.weight.medium};
    overflow: hidden;
    margin-top: 1rem;
    padding-left: ${theme.sizes.spacing.medium};
    border-radius: ${theme.sizes.radius.sm};
  }

  input.sale {
    background-color: transparent;
    border: 1px solid ${theme.colors.white};

    color: ${theme.colors.white};

    &::placeholder {
      color: ${theme.colors.white};
      /* padding-left: ${theme.sizes.spacing.medium}; */
    }

    &:focus {
      outline: none;
      padding-left: calc(${theme.sizes.spacing.medium} - 1px);
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
    }
  }

  input.order {
    border: 1px solid ${theme.colors.greyDivider};

    color: ${theme.colors.grey};

    &::placeholder {
      color: ${theme.colors.grey};
      /* padding-left: ${theme.sizes.spacing.medium}; */
    }

    &:focus {
      outline: none;
      padding-left: calc(${theme.sizes.spacing.medium} - 1px);
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
    }
  }

  .error-ms {
    font-size: 1em;
    color: red;
  }

  button {
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  dialog {
    border: none;
    border-radius: ${theme.sizes.radius.medium};
    box-shadow: 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    padding: 2rem;
    margin: 16rem auto;
    width: 548px;
    background-color: ${theme.colors.green};
    display: flex;
    flex-direction: column;
    position: relative;

    button {
      background: none;
      width: 44px;
      height: 44px;
      position: absolute;
      top: 2rem;
      right: 2rem;
    }

    span {
      margin-bottom: 1.5rem;
    }

    &::backdrop {
      background-color: rgb(40, 40, 40);
      opacity: 0.4;
    }
  }
`;
