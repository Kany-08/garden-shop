import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;

  .container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 24px;
    margin-bottom: 12px;
    gap: 12px;
  }

  .container div {
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.lightGrey};
    width: 100%;
    padding: 24px 20px;

    border-radius: ${theme.sizes.radius.medium};
  }

  .container > div:nth-child(2) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;

    .icon-wrapper {
      gap: 12px;
      padding-left: 20px;
    }
  }

  @media (min-width: 480px) {
    .container {
      margin-top: 32px;
      margin-bottom: 20px;
      gap: 20px;
    }
    .container div {
      width: 100%;
      gap: 16px;
      padding: 32px;
    }

    .container > div:nth-child(2) {
      flex-direction: column;

      .icon-wrapper {
        gap: 16px;
        padding: 0;
      }
    }
  }

  @media (min-width: 768px) {
    .container div {
      width: 229px;
    }

    .container > div:nth-child(1),
    .container > div:nth-child(3) {
      flex: 1 1 50%;
    }
  }

  @media (min-width: 1000px) {
    .container {
      margin-top: 40px;
      margin-bottom: 32px;
      gap: 32px;
    }
    .container div {
      width: 470px;
    }

    .container > div:nth-child(1),
    .container > div:nth-child(3) {
      flex: 1 1 25%;
    }
  }

  @media (min-width: 1194px) {
    .container div {
      width: 548px;
    }

    .container > div:nth-child(1),
    .container > div:nth-child(3) {
      flex: 1 1 548px;
    }
  }

  @media (min-width: 1778px) {
    .container div {
      width: 45%;
    }

    .container > div:nth-child(1),
    .container > div:nth-child(3) {
      flex: 1 1 548px;
    }
  }
`;

export const StyledMap = styled.div`
  width: 100%;
  height: 350px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
