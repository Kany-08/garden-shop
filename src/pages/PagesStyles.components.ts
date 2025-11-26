import styled from "styled-components";
import banner from "../assets/banner.jpg";
import { theme } from "../styles/theme";

// Home Page Container

export const HomePageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Banner = styled.div`
  width: 100%;
  height: 600px;
  background: url(${banner});
  background-size: cover;
  background-position: center;
  margin-bottom: 2rem;
  padding: 5em 2.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    align-self: flex-start;
    font-weight: 600;
    margin-top: 2.5em;
  }
`;

export const MainSection = styled.main`
  width: 100%;
`;

export const PreviewListContainer = styled.div`
  padding: 0 2.5em;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .link-button {
    border: 1px solid ${theme.colors.greyDivider};
    border-radius: ${theme.sizes.radius.sm};
    padding: 0.5em 1em;
    color: ${theme.colors.grey};
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: ${theme.fonts.size.default};
    font-weight: ${theme.fonts.weight.medium};

    &::before {
      content: "";
      width: 51.5rem;
      height: 1px;
      background-color: ${theme.colors.greyDivider};
    }
  }
`;

export const LineWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 20px 0;

  a {
    border: 1px solid ${theme.colors.greyDivider};
    border-radius: ${theme.sizes.radius.sm};
    padding: 0.5em 1em;
    color: ${theme.colors.grey};
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: ${theme.fonts.size.default};
    font-weight: ${theme.fonts.weight.medium};
    transition: all 0.2s;

    &:hover {
      color: ${theme.colors.black};
      border-color: ${theme.colors.black};
    }
  }
`;

export const Line = styled.div`
  flex: 1;
  height: 1px;
  margin-left: 2em;
  background-color: ${theme.colors.greyDivider};
`;

// PaddingContainer
export const PaddingContainer = styled.div`
  width: 100%;
  padding: 0 2.5em;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  padding-top: 2.5em;
`;

//Shopping Cart Page Container
export const ShoppingCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5em 2.5em;
`;

export const CartHeaderContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const CartBodyContainer = styled.div`
  margin-top: 2.5em;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
export const CartOrderSummaryContainer = styled.div`
  width: 548px;
  height: 620px;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.lightGrey};
  border-radius: ${theme.sizes.radius.medium};
  padding: 2rem;
  line-height: 1;

  .items-quantity {
    padding-top: 1.5rem;
    padding-bottom: 0.5rem;
  }

  .total-price {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .price {
      padding-bottom: 0.3em;
    }
  }
`;
export const CartEmptyContainer = styled.div`
  margin-top: 2.5em;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2em;

  button {
    align-self: flex-start;
  }
`;

// Sort Container
export const SortContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2.5em;
  gap: 2.5em;
`;

//Product Details Page Container

export const ProductDetailContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
`;
export const ProductDetailImage = styled.div`
  width: 780px;
  height: 572px;
  overflow: hidden;
  border: 1px solid ${theme.colors.greyDivider};
  border-radius: ${theme.sizes.radius.medium};
`;

export const ProductDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 548px;
  gap: 2rem;
`;

export const StyledPriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  span {
    margin-left: -1rem;
    align-self: flex-start;
  }
`;

export const StyledQuantity = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  gap: 1rem;

  button {
    width: 316px;
    height: 58px;
    padding: 0;
  }
`;

// Not Found Page Container
export const NotFoundContainer = styled.div`
  margin: 5rem auto;
  width: 43.175em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-align: center;
  font-size: 16px;
  p {
    font-size: ${theme.fonts.size.lg};
    color: ${theme.colors.grey};
    line-height: 1.5;
  }
`;
