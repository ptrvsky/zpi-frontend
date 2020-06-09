import React from 'react';
import '../../../assets/styles/buttons.scss';
import './OrderElement.scss';

export default class OrderElement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.changeStatus = this.changeStatus.bind(this);
    }

    changeStatus() {
        fetch('/v1/order/advance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.props.details.orderId,
                newOrderStatus: "W DRODZE"
            })
        })
    }

    render() {
        let date = new Date(this.props.details.date).toISOString();
        return (
            <div className="menu-element-wrapper">
                <div className="id-element">{this.props.index + 1}</div>
                <div className="name-element">{this.props.details.orderId}</div>
                <div className="ingridients-element"><ul>{this.props.details.pizzas[0] ? this.props.details.pizzas.map((pizza) =>
                    <li>{pizza.pizzaIngredientDto.map((pizzaIngredient, index) => pizzaIngredient.name + (index < pizza.pizzaIngredientDto.length - 1 ? ', ' : ''))}</li>
                ) : null}</ul></div>

                <div className="data-element">{date.slice(0, 10) + ", " + date.slice(11, 16)}</div>
                <label class="input-check"><input onChange={this.changeStatus} type="checkbox" value="something" name="test" /> Wykonanie </label>
            </div>


        );
    }
}



