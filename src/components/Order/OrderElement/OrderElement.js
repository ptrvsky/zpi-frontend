import React from 'react';
import '../../../assets/styles/buttons.scss';
import './OrderElement.scss';

export default class OrderElement extends React.Component {

  render() {
    return (
      <div className="order-element-wrapper">
        <div className="id-element">{this.props.index + 1 + this.props.offset}</div>
        <div className="name-element">{this.props.details.typeName}</div>
        <div className="ingredients-element">{this.props.details.pizzaIngredients[0] ? this.props.details.pizzaIngredients.map((pizzaIngredient, index) =>
          pizzaIngredient.name + (index < this.props.details.pizzaIngredients.length - 1 ? ', ' : '')
        ) : null}</div>
        <div className="type-element">{this.props.details.crust + " (" + this.props.details.diameter + " cm)"}</div>
        <div className="price-element">{this.props.details.price ? this.props.details.price.toFixed(2) + " zł" : "0.00 zł"}</div>
      </div>
    );
  }
}