import React from 'react';
import '../../../assets/styles/buttons.scss';
import './OrdersElement.scss';

export default class OrderElement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let date = new Date(this.props.details.date).toISOString();
        return (
            <div className="orders-element-wrapper">
                <div className="orders-element-id-element">{this.props.index + 1}</div>
                <div className="orders-element-name-element">{'0000' + this.props.details.id}</div>
                <div className="orders-element-ingredients-element"><ul>{this.props.details.orderedPizzas[0] ? this.props.details.orderedPizzas.map((pizza) =>
                    <li>{pizza.pizzaIngredients.map((pizzaIngredient, index) => pizzaIngredient.name + (index < pizza.pizzaIngredients.length - 1 ? ', ' : ''))}
                        {" (" + pizza.diameter + "cm, " + pizza.crust.toLowerCase() + ")" }</li>
                ) : null}</ul></div>

                <div className="orders-element-data-element">{date.slice(0, 10) + ", " + date.slice(11, 16)}</div>
                <label class="orders-element-input-check"> {this.props.details.status}</label>
            </div>


        );
    }
}



