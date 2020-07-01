import React from "react";
// import Messages from "./Messages";
// import TheDate from "./state/TheDate";
// import Counter from "./state/Counter";
// import Tabs from "./state/Tabs";
// import Accordion from "./state-drills/Accordion";
// import "./App.css";
import AddItemForm from "./state/shopping-list/AddItemForm";
import ShoppingList from "./state/shopping-list/ShoppingList";

class App extends React.Component {
  state = {
    shoppingItems: [
      /* put stub items in here for testing */
      { name: "apples", checked: false },
      { name: "oranges", checked: true },
      { name: "bread", checked: false },
    ],
  };

  handleDeleteItem() {
    console.log("handle delete item called", { item });
  }
  handleCheckItem() {
    console.log("handle check item called", { item });
  }

  render() {
    return (
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm />
          </section>
          <section>
            <ShoppingList
              items={this.state.shoppingItems}
              onDeleteItem={this.handleDeleteItem}
              onCheckItem={this.handleCheckItem}
            />
          </section>
        </main>
      </>
    );
  }
}

export default App;

// const tabsProp = [
//   {
//     name: "First tab",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.",
//   },
//   {
//     name: "Second tab",
//     content:
//       "Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   },
//   {
//     name: "Third tab",
//     content:
//       "Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.",
//   },
// ];

// const sections = [
//   {
//     title: "Section 1",
//     content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   },
//   {
//     title: "Section 2",
//     content:
//       "Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!",
//   },
//   {
//     title: "Section 3",
//     content:
//       "Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?",
//   },
// ];
