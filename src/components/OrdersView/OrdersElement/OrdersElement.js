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
            <div className="menu-element-wrapper">
                <div className="id-element">{this.props.index + 1}</div>
                <div className="ingridients-element"><ul>{this.props.details.orderedPizzas[0] ? this.props.details.orderedPizzas.map((pizza) =>
                    <li>{pizza.pizzaIngredients.map((pizzaIngredient, index) => pizzaIngredient.name + (index < pizza.pizzaIngredients.length - 1 ? ', ' : ''))}</li>
                ) : null}</ul></div>

                <div className="data-element">{date.slice(0, 10) + ", " + date.slice(11, 16)}</div>
                <label class="input-check"> {this.props.details.status}</label>
            </div>


        );
    }
}



