import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StyledHeader = styled.header`
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
