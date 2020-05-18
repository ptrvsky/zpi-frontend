import React from 'react';
import '../../../assets/styles/buttons.scss';
import './MenuElement.scss';

export default class MenuElement extends React.Component {

  handleOrderClick() {
    // TO-DO: Add selected pizza to cart
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
        <div className="button-element"><button className="btn-primary btn-order" id={this.props.details.id} onClick={this.handleOrderClick}>
          {this.props.details.price ? this.props.details.price + " zł" : "0,00 zł"}</button>
          <button className="btn-primary btn-order" id={this.props.details.id} onClick={this.handleOrderClick}>
          {this.props.details.price ? this.props.details.price + " zł" : "0,00 zł"}</button>
        </div>
      </div>
    );
  }
}