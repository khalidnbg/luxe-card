/* eslint-disable react/prop-types */
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import formatCurrency from "./formatCurrency";

import storeItems from "../data/storeItems.json";

const ShoppinCart = ({ isOpen }) => {
  const { cartItems, closeCart } = useShoppingCart();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}

          <div className="me-auto fw-bold fs-5">
            {cartItems.length > 0 ? (
              formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )
            ) : (
              <h1>Add items to cart</h1>
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppinCart;
