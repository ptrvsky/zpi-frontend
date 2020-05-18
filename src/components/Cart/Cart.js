import React from 'react';
import '../../assets/styles/buttons.scss';
import './Cart.scss';
import CartElement from './CartElement/CartElement';

export default class Cart extends React.Component {

  constructor(props) {
    super();
    // this.state = {
    //   cart: {
    //     standard: [
    //       {
    //         id: 11,
    //         typeName: "Ekstra pizza",
    //         diameter: 30,
    //         crust: "THICK",
    //         price: "19.99",
    //         pizzaIngredients: [
    //           {
    //             id: 5,
    //             quantity: 1
    //           },
    //           {
    //             id: 7,
    //             quantity: 1
    //           }
    //         ]
    //       },
    //       {
    //         id: 13,
    //         typeName: "Ekstra pizza",
    //         diameter: 20,
    //         crust: "THICK",
    //         price: "19.99",
    //         pizzaIngredients: [
    //           {
    //             id: 5,
    //             quantity: 1,
    //           },
    //           {
    //             id: 7,
    //             quantity: 1
    //           }
    //         ]
    //       }
    //     ],
    //     customs: [
    //       {
    //         typeName: "Custom",
    //         diameter: 30,
    //         crust: "THICK",
    //         pizzaIngredients: [
    //           {
    //             id: 5,
    //             quantity: 1,
    //             price: 3.99,
    //           },
    //           {
    //             id: 7,
    //             quantity: 1,
    //             price: 3.99,
    //           }
    //         ]
    //       },
    //       {
    //         typeName: "Custom",
    //         diameter: 20,
    //         crust: "THICK",
    //         pizzaIngredients: [
    //           {
    //             id: 5,
    //             quantity: 1,
    //             price: 3.99,
    //           },
    //           {
    //             id: 8,
    //             quantity: 1,
    //             price: 3.99,
    //           }
    //         ]
    //       }
    //     ],
    //   }
    // }
    this.state = {
      cart: JSON.parse(localStorage.getItem('cart'))
    }
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleRemoveClick(index, type) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (type === 'standard') cart.standard.splice(index, 1);
    if (type === 'custom') cart.custom.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    this.setState({
      cart: JSON.parse(localStorage.getItem('cart'))
    })
  }

  render() {
    let offset = 0;
    let sum = 0;
    return (
      <div className="cart-wrapper">
        <div className="cart-content-wrapper">
          <div className="cart-content">
            <div className="cart-title">
            {this.state.cart.standard.length + this.state.cart.custom.length > 0 ? "Twój koszyk" : "Twój koszyk jest pusty"} </div>
            {this.state.cart.standard ?
              this.state.cart.standard.map((pizza, index) => {
                sum += Number(pizza.price);
                offset = index + 1;
                return <CartElement details={pizza} key={index} index={index} offset={0} type='standard'
                  handleRemoveClick={this.handleRemoveClick} />;
              })
              : null}
            {this.state.cart.customs ?
              this.state.cart.customs.map((pizza, index) => {
                pizza.price = 0;
                pizza.pizzaIngredients.map(ingredient => pizza.price += ingredient.price);
                sum += Number(pizza.price);
                return <CartElement details={pizza} key={index + offset} index={index} offset={offset} type='custom'
                  handleRemoveClick={this.handleRemoveClick} />;
              })
              : null}
            {this.state.cart.standard.length + this.state.cart.custom.length > 0 ?
              <div>
                <div className="align-right-wrapper"><div className="total-price">{sum.toFixed(2) + " zł"}</div></div>
                <div className="align-right-wrapper"><button className="btn-primary btn-order">Utwórz zamówienie</button></div></div>
              : null}


          </div>
        </div>
      </div>
    );
  }
}