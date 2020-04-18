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
        <div>{this.props.details.id}</div>
        <div>{this.props.details.typeName}</div>
        <div>{this.props.details.crust}</div>
        <div>{this.props.details.diameter}</div>
        <div>{this.props.details.ingredients[0].name}</div>
        <button className="menu-element-order-button" id={this.props.details.id} onClick={this.handleOrderClick}>Button zamawiający pizzę</button> 
      </div>
    );
  }
}