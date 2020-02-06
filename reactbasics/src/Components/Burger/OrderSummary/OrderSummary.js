import React from "react";
import Aux from "../../../HOC/aux";
import Button from "../../../Containers/UI/Button/Button";

const orderSummary = props => {
  const ingredients = Object.keys(props.ingredients).map(ingredient => {
    return (
      <li key={ingredient}>
        <span style={{ textTransform: "capitalize" }}>{ingredient}</span>:
        {props.ingredients[ingredient]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <ul>{ingredients}</ul>
      <p>
        <span>Total: </span> {props.totalPrice}
      </p>
      <p>Proceed to Checkout</p>
      <Button type="Success" clicked={props.purchaseContinued}>
        Yes
      </Button>
      <Button type="Danger" clicked={props.purchasedCanceled}>
        No
      </Button>
    </Aux>
  );
};

export default orderSummary;
