/* eslint-disable react/prop-types */
import { Button, Card } from "react-bootstrap";
import formatCurrency from "./formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

const StoreItem = ({ id, price, name, imgUrl }) => {
  const {
    getItemsQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItemFromCart,
  } = useShoppingCart();
  const quatity = getItemsQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        src={imgUrl}
        variant="top"
        style={{
          height: "200px",
          objectFit: "cover",
        }}
      />

      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center">
          <span className="fs-2">{name}</span>
          <span className="text-muted me-2">{formatCurrency(price)}</span>
        </Card.Title>

        <div className="mt-auto">
          {quatity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{
                gap: ".5rem",
              }}>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  gap: ".5rem",
                }}>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                <span className="fs-3">{quatity} in cart</span>
                <Button
                  onClick={() => decreaseCartQuantity(id)}
                  disabled={quatity === 1}>
                  -
                </Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeItemFromCart(id)}>
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
