import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const DiscountFormContainer = styled.div`
  width: 100%;
  height: 514px;
  background: linear-gradient(115deg, #87933d 0%, #6a7620 58%);
  border-radius: ${theme.sizes.radius.medium};
  overflow: hidden;
  margin: 5em 0;
  padding: 0 32px 0 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    display: flex;
    padding-top: 5px;
    justify-content: center;
    padding-top: 32px;
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    width: 748px;
    align-self: flex-end;
  }
`;
