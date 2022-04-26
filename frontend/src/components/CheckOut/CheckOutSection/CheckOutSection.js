import React, { useEffect } from "react";
import CartItem from "../CartItem/CartItem";
import {
  CartItemsList,
  CheckOutButton,
  CheckoutContainer,
  CheckOutTitle,
  MainWrapper,
  OrderSummaryChildContainer,
  OrderSummaryChildText,
  OrderSummaryChildPrice,
  OrderSummarySection,
  OrderSummaryTitle,
  OrderSummaryTotal,
  OrderSummaryTotalPrice,
} from "./CheckOutSectionStyles";

const CheckOutSection = ({ cart, user }) => {
  const total = cart
    ? cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0)
    : 0;
  return (
    <MainWrapper>
      <CheckOutTitle>YOUR CART</CheckOutTitle>
      <CheckoutContainer>
        <CartItemsList>
          {cart && cart.length > 0
            ? cart.map((item) => (
                <CartItem key={item.productId} item={item} user={user} />
              ))
            : " You have no items"}
          {/* <CartItem />
          <CartItem />
          <CartItem />
          <CartItem /> */}
        </CartItemsList>

        <OrderSummarySection>
          <OrderSummaryTitle>Order Summary</OrderSummaryTitle>

          <OrderSummaryChildContainer>
            <OrderSummaryChildText>SubTotal </OrderSummaryChildText>
            <OrderSummaryChildPrice>${total}</OrderSummaryChildPrice>
          </OrderSummaryChildContainer>

          <OrderSummaryChildContainer>
            <OrderSummaryChildText>Shipping Fee Total</OrderSummaryChildText>
            <OrderSummaryChildPrice>$20</OrderSummaryChildPrice>
          </OrderSummaryChildContainer>

          <OrderSummaryChildContainer>
            <OrderSummaryChildText>
              Shipping Fee Discounted
            </OrderSummaryChildText>
            <OrderSummaryChildPrice>-$20</OrderSummaryChildPrice>
          </OrderSummaryChildContainer>

          <OrderSummaryChildContainer>
            <OrderSummaryTotal>Total</OrderSummaryTotal>
            <OrderSummaryTotalPrice>${total}</OrderSummaryTotalPrice>
          </OrderSummaryChildContainer>

          <CheckOutButton>CHECKOUT</CheckOutButton>
        </OrderSummarySection>
      </CheckoutContainer>
    </MainWrapper>
  );
};

export default CheckOutSection;
