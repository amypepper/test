import React from "react";
import ShoppingItem from "./ShoppingItem";

export default function ShoppingList(props) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <ShoppingItem
          key={index}
          item={item}
          onDeleteItem={props.onDeleteItem}
          onCheckItem={props.onCheckItem}
        />
      ))}
    </ul>
  );
}

ShoppingList.defaultProps = {
  items: [],
};
