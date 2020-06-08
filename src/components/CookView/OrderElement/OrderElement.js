import React from 'react';
import '../../../assets/styles/buttons.scss';
import './OrderElement.scss';

export default class OrderElement extends React.Component {

  handleOrderClick() {
    // TO-DO: Add selected pizza to cart
  }

  render() {
    return (
<div className="menu-element-wrapper">
        <div className="id-element">{this.props.details.id}</div>
        <div className="name-element">{this.props.details.typeName}</div>
        <div className="ingridients-element">{this.props.details.crust}</div>
        <div className="crust-element">{this.props.details.diameter}</div>
        <label class="input-check"><input onchange="change_state(this)" type="checkbox" value="something" name="test"/> Wykonanie </label>
        </div>

        
    );
  }
}



