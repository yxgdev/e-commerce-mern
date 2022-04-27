import styled from "styled-components";
import breakpoint from "../../breakpoints";

export const MainWrapper = styled.div`
  min-height: 75vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const CheckOutTitle = styled.h1`
  margin-top: 5vh;
`;
export const CheckoutContainer = styled.div`
  display: flex;
  min-height: 75vh;
  width: 90%;
  margin-bottom: 30px;
  @media ${breakpoint.device.sm} {
    flex-direction: column;
  }
`;
export const CartItemsList = styled.div`
  width: 70%;
  @media ${breakpoint.device.sm} {
    width: 100%;
  }
`;
export const OrderSummarySection = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  @media ${breakpoint.device.sm} {
    width: 85%;
  }
`;
export const OrderSummaryTitle = styled.h2`
  margin-bottom: 20px;
`;

export const OrderSummaryChildContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const OrderSummaryChildText = styled.h3`
  @media ${breakpoint.device.sm} {
    font-size: 15px;
  }
`;
export const OrderSummaryChildPrice = styled.h3`
  font-weight: normal;
`;

export const OrderSummaryTotal = styled.h2``;
export const OrderSummaryTotalPrice = styled.h2``;
export const CheckOutButton = styled.button`
  font-weight: bold;
  width: 100%;
  padding: 20px;
  background-color: black;
  color: white;
  border: none;
  margin-top: 50px;
  :hover {
    background-color: gold;
    cursor: pointer;
  }
`;
