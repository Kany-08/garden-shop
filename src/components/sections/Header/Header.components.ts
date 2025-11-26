import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StyledHeader = styled.header`
  padding: 0 2.5em;
  width: 100%;
  height: 128px;
  position: relative;
  border-bottom: 1px solid ${theme.colors.greyDivider};
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    width: 70px;
    height: 70px;
  }

  button.lightmode {
    width: 3.75rem;
    height: 2rem;
    position: relative;
    background: none;
    padding: 0;
    margin: 0;
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

    button.xwhite {
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

  @media (max-width: 1000px) {
    .logo {
      width: 68px;
    }

    @media (max-width: 480px) {
      height: 68px;

      .logo {
        width: 44px;
        height: 44px;
      }
    }
  }
`;

export const StyledLeftContainer = styled.div`
  display: flex;

  align-items: center;
  gap: 20px;
`;

export const StyledCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 518px;
  height: 70px;

  @media (max-width: 1000px) {
    width: 494px;
  }

  @media (max-width: 768px) {
    width: 399px;
    height: 63px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const StyledRightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  button {
    width: 3rem;
    height: 3rem;
    position: relative;
    background: none;
    padding: 0;
    margin: 0;
  }

  .badge {
    width: clamp(1.083125rem, 0.9025rem + 0.8028vw, 1.625rem);
    height: clamp(1.083125rem, 0.9025rem + 0.8028vw, 1.625rem);
    position: absolute;
    top: 0.3em;
    left: 0;
    border-radius: 50%;
    font-family: ${theme.fonts.family};
    font-weight: ${theme.fonts.weight.semiBold};
    font-size: ${theme.fonts.size.xs};
    background-color: ${theme.colors.green};
    color: ${theme.colors.white};
    text-align: center;
    align-content: center;
  }

  @media (max-width: 1000px) {
    gap: 11px;
  }
`;

export const StyledNavbar = styled.nav``;

export const StyledDrawer = styled.div`
  display: none;
  width: 282px;
  height: 100vh;
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${theme.colors.white};
  padding-left: 32px;
  border-left: 1px solid ${theme.colors.greyDivider};

  .btn-discount-mobile {
    width: 211px;
    height: 42px;
    margin-top: 36px;
    font-size: ${theme.fonts.size.xl};
    padding: 0;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    padding-top: 100px;
  }

  @media (max-width: 360px) {
    width: 222px;

    .btn-discount-mobile {
      width: 166px;
      height: 35px;
      font-size: ${theme.fonts.size.normal};
    }
  }
`;

export const StyledHamburger = styled.div`
  display: none;
  z-index: 2;
  @media (max-width: 480px) {
    display: inline;
  }
`;
