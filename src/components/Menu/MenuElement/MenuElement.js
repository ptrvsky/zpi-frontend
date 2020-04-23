import React from 'react';
import '../../../assets/styles/buttons.scss';
import './MenuElement.scss';

export default class MenuElement extends React.Component {

  handleOrderClick() {
    // TO-DO: Add selected pizza to cart
  }

  render() {
    return (
      <div className="menu-element-wrapper">
        <div className="id-element">{this.props.index + 1}</div>
        <div className="name-element">{this.props.details.typeName}</div>
        <div className="ingridients-element">{this.props.details.pizzaIngredients[0] ? this.props.details.pizzaIngredients.map(pizzaIngredient => pizzaIngredient.ingredient.name) : null}</div>
        <div className="crust-element">{this.props.details.crust}</div>
        <div className="diameter-element">{this.props.details.diameter + " cm"}</div>
        <div className="button-element"><button className=" menu-element-order-button" id={this.props.details.id} onClick={this.handleOrderClick}><span>Add to cart</span></button></div>
      </div>
    );
  }
}