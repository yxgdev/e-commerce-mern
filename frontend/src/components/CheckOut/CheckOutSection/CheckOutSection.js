import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkOutStripe } from "../../../redux/authSlice";
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

  const dispatch = useDispatch();
  const onClick = () => {
    checkOutStripe(dispatch, user);
  };
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
            <OrderSummaryChildPrice>RM 20</OrderSummaryChildPrice>
          </OrderSummaryChildContainer>

          <OrderSummaryChildContainer>
            <OrderSummaryChildText>
              Shipping Fee Discounted
            </OrderSummaryChildText>
            <OrderSummaryChildPrice>-RM 20</OrderSummaryChildPrice>
          </OrderSummaryChildContainer>

          <OrderSummaryChildContainer>
            <OrderSummaryTotal>Total</OrderSummaryTotal>
            <OrderSummaryTotalPrice>RM {total}</OrderSummaryTotalPrice>
          </OrderSummaryChildContainer>

          <CheckOutButton onClick={onClick}>CHECKOUT</CheckOutButton>
        </OrderSummarySection>
      </CheckoutContainer>
    </MainWrapper>
  );
};

export default CheckOutSection;
