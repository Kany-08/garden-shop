import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { theme } from "../../../styles/theme";
import type { SelectProps } from "./Select.types";

export const SelectContainer = styled.div`
  position: relative;
  max-width: 200px;
`;

export const SelectTrigger = styled.button<Pick<SelectProps, "isOpen">>`
  width: 100%;
  padding: ${theme.sizes.spacing.xsm} ${theme.sizes.spacing.default};
  background-color: ${theme.colors.white};
  border: 2px solid ${theme.colors.greyDivider};
  border-radius: ${theme.sizes.radius.medium};
  font-family: "${theme.fonts.family}", sans-serif;
  font-size: ${theme.fonts.size.default};
  font-weight: ${theme.fonts.weight.medium};
  color: ${theme.colors.black};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${theme.colors.grey};
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      border-color: ${theme.colors.green};
    `}
`;

export const SelectText = styled.span`
  flex: 1;
  text-align: left;
`;

export const IconWrapper = styled.span<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  transition: transform 0.2s ease;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;

export const OptionList = styled.ul<Pick<SelectProps, "isOpen">>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${theme.colors.white};

  border-radius: ${theme.sizes.radius.medium};
  list-style: none;
  padding: 0;
  margin: 0;

  overflow-y: auto;
  z-index: 100;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-10px)"};
  transition: all 0.2s ease;
`;

export const OptionItem = styled.option<Pick<SelectProps, "isSelected">>`
  padding: ${theme.sizes.spacing.xsm} ${theme.sizes.spacing.default};
  font-family: "${theme.fonts.family}", sans-serif;
  font-size: ${theme.fonts.size.default};
  color: ${theme.colors.black};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background-color: ${theme.colors.lightGrey};
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: ${theme.colors.lightGrey};
      font-weight: ${theme.fonts.weight.semiBold};
    `}

  &:first-of-type {
    border-radius: ${theme.sizes.radius.medium} ${theme.sizes.radius.medium} 0 0;
  }

  &:last-of-type {
    border-radius: 0 0 ${theme.sizes.radius.medium} ${theme.sizes.radius.medium};
  }
`;
