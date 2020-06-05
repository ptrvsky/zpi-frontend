import React from 'react';
import { XCircle } from 'react-feather';
import '../../../assets/styles/buttons.scss';
import './CartElement.scss';

export default class CartElement extends React.Component {



  render() {
    return (
      <div className="cart-element-wrapper">
        <div className="id-element">{this.props.index + 1 + this.props.offset}</div>
        <div className="name-element">{this.props.details.typeName}</div>
        <div className="ingredients-element">{this.props.details.pizzaIngredients[0] ? this.props.details.pizzaIngredients.map((pizzaIngredient, index) =>
          pizzaIngredient.name + (index < this.props.details.pizzaIngredients.length - 1 ? ', ' : '')
        ) : null}</div>
        <div className="type-element">{this.props.details.crust + " (" + this.props.details.diameter + " cm)"}</div>
        <div className="button-element" onClick={(e) => this.props.handleRemoveClick(this.props.index, this.props.type, e)} id={this.props.details.id}><XCircle /></div>
        <div className="price-element">{this.props.details.price ? this.props.details.price.toFixed(2) + " zł" : "0.00 zł"}</div>
      </div>
    );
  }
}