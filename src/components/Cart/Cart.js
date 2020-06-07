import React from 'react';
import '../../assets/styles/buttons.scss';
import './Cart.scss';
import CartElement from './CartElement/CartElement';

export default class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: JSON.parse(localStorage.getItem('cart'))
    }
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.handleOrderClick = this.handleOrderClick.bind(this);
  }

  handleRemoveClick(index, type) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (type === 'standards') cart.standards.splice(index, 1);
    if (type === 'customs') cart.customs.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    this.setState({
      cart: JSON.parse(localStorage.getItem('cart'))
    })
  }

  handleOrderClick() {
    localStorage.setItem('order', JSON.stringify(this.state.cart));
    this.props.history.push('/order');
  }

  render() {
    let offset = 0;
    let sum = 0;
    return (
      <div className="cart-wrapper">
        <div className="cart-content-wrapper">
          <div className="cart-content">
            <div className="cart-title">
            {this.state.cart.standards.length + this.state.cart.customs.length > 0 ? "Twój koszyk" : "Twój koszyk jest pusty"} </div>
            {this.state.cart.standards ?
              this.state.cart.standards.map((pizza, index) => {
                sum += Number(pizza.price);
                offset = index + 1;
                return <CartElement details={pizza} key={index} index={index} offset={0} type='standards'
                  handleRemoveClick={this.handleRemoveClick} />;
              })
              : null}
            {this.state.cart.customs ?
              this.state.cart.customs.map((pizza, index) => {
                sum += Number(pizza.price);
                return <CartElement details={pizza} key={index + offset} index={index} offset={offset} type='customs'
                  handleRemoveClick={this.handleRemoveClick} />;
              })
              : null}
            {this.state.cart.standards.length + this.state.cart.customs.length > 0 ?
              <div>
                <div className="align-right-wrapper"><div className="total-price">{sum.toFixed(2) + " zł"}</div></div>
                <div className="align-right-wrapper"><button className="btn-primary btn-order" onClick={this.handleOrderClick}>Utwórz zamówienie</button></div></div>
              : null}
          </div>
        </div>
      </div>
    );
  }
}