import React from 'react';
import '../../../assets/styles/buttons.scss';
import './MenuElement.scss';

export default class MenuElement extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleOrderClick = this.handleOrderClick.bind(this);
  }

  handleOrderClick(e) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let pizza = this.props.details;
    e.target.id === '20' ? pizza.diameter = 20 : pizza.diameter = 30;
    cart.standard = cart.standard.concat(pizza);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  render() {
    return (
      <div className={this.props.filtered ? "menu-element-wrapper menu-element-wrapper--filtered" : "menu-element-wrapper"}>
        <div className="id-element">{this.props.index + 1}</div>
        <div className="name-element">{this.props.details.typeName}</div>
        <div className="ingridients-element">{this.props.details.pizzaIngredients[0] ? this.props.details.pizzaIngredients.map((pizzaIngredient, index) =>
          pizzaIngredient.ingredient.name + (index < this.props.details.pizzaIngredients.length - 1 ? ', ' : '')
        ) : null}</div>
        <div className="crust-element">{this.props.details.crust}</div>
        <div className="button-element"><button className="btn-primary btn-order" id={'20'} onClick={this.handleOrderClick}>
          {this.props.details.price ? this.props.details.price + " zł" : "0.00 zł"}</button>
          <button className="btn-primary btn-order" id={'30'} onClick={this.handleOrderClick}>
          {this.props.details.price ? this.props.details.price + " zł" : "0.00 zł"}</button>
        </div>
      </div>
    );
  }
}