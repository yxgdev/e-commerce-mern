import React from "react";
import CartItem from "../CartItem/CartItem";
import {
  CartItemsList,
  CheckOutButton,
  CheckoutContainer,
  CheckOutTitle,
  MainWrapper,
  OrderSummaryChildContainer,
  OrderSummaryChildPrice,
  OrderSummaryChildText,
  OrderSummarySection,
  OrderSummaryTitle,
  OrderSummaryTotal,
  OrderSummaryTotalPrice,
} from "./CheckOutSectionStyles";

const CheckOutSection = () => {
  return (
    <MainWrapper>
      <CheckOutTitle>YOUR CART</CheckOutTitle>
      <CheckoutContainer>
        <CartItemsList>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </CartItemsList>

        <OrderSummarySection>
          <OrderSummaryTitle>Order Summary</OrderSummaryTitle>

          <OrderSummaryChildContainer>
            <OrderSummaryChildText>SubTotal </OrderSummaryChildText>
            <OrderSummaryChildPrice>$80.00</OrderSummaryChildPrice>
          </OrderSummaryChildContainer>

          <OrderSummaryChildContainer>
            <OrderSummaryChildText>Shipping Fee Total</OrderSummaryChildText>
            <OrderSummaryChildPrice>$20.00</OrderSummaryChildPrice>
          </OrderSummaryChildContainer>

          <OrderSummaryChildContainer>
            <OrderSummaryChildText>
              Shipping Fee Discounted
            </OrderSummaryChildText>
            <OrderSummaryChildPrice>-$20.00</OrderSummaryChildPrice>
          </OrderSummaryChildContainer>

          <OrderSummaryChildContainer>
            <OrderSummaryTotal>Total</OrderSummaryTotal>
            <OrderSummaryTotalPrice>$80.00</OrderSummaryTotalPrice>
          </OrderSummaryChildContainer>

          <CheckOutButton>CHECKOUT</CheckOutButton>
        </OrderSummarySection>
      </CheckoutContainer>
    </MainWrapper>
  );
};

export default CheckOutSection;
