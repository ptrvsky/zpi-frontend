import React from 'react';
import '../../../assets/styles/buttons.scss';
import './OrderElement.scss';

export default class OrderElement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
      }

    render() {
        return (
            <div className="menu-element-wrapper">
                <div className="id-element">{this.props.index+1}</div>
                <div className="name-element">{this.props.details.orderId}</div>   
                {/* <div className="ingridients-element">{this.props.details.pizzaIngredientsDto}</div> */}
                <div className="ingridients-element">{this.props.details.pizzas.pizzaIngredientDto  }</div>
            
                <div className="data-element">{this.props.details.date}</div>
                <label class="input-check"><input onchange="change_state(this)" type="checkbox" value="something" name="test" /> Wykonanie </label>
            </div>


        );
    }
}



