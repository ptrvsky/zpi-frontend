import React from 'react';
import '../../../assets/styles/buttons.scss';
import './OrderElement.scss';

export default class OrderElement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    setStatus(status) {
        const headers = { 'Content-Type': 'application/json' }
        if (JSON.parse(localStorage.getItem('user'))) headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;

        fetch('https://pizzeria-backend-zpi.herokuapp.com/v1/order/advance', {
            method: 'POST',
            headers,
            body: JSON.stringify({
                id: this.props.details.orderId,
                newOrderStatus: status
            })
        })
    }

    render() {
        let date = new Date(this.props.details.date).toISOString();
        return (
            <div className="order-element-wrapper">
                <div className="order-element-id-element">{this.props.index + 1}</div>
                <div className="order-element-name-element">{'0000' + this.props.details.orderId}</div>
                <div className="order-element-ingridients-element"><ul>{this.props.details.pizzas[0] ? this.props.details.pizzas.map((pizza) =>
                    <li>{pizza.pizzaIngredientDto.map((pizzaIngredient, index) => pizzaIngredient.name + (index < pizza.pizzaIngredientDto.length - 1 ? ', ' : ''))}
                        {" (" + pizza.diameter + "cm, " + pizza.crust.toLowerCase() + ")"}</li>
                ) : null}</ul></div>

                <div className="order-element-data-element">{date.slice(0, 10) + ", " + date.slice(11, 16)}</div>
                <div class="order-element-input-check">
                    <select class="form-control form-control-sm">
                        <option onClick={() => this.setStatus('OCZEKUJĄCE NA PRZYGOTOWANIE')} selected={this.props.details.status === 'OCZEKUJĄCE NA PRZYGOTOWANIE'}>
                            OCZEKUJĄCE NA PRZYGOTOWANIE
                            </option>
                        <option onClick={() => this.setStatus('W TRAKCIE REALIZACJI')} selected={this.props.details.status === 'W TRAKCIE REALIZACJI'}>W TRAKCIE REALIZACJI</option>
                        <option onClick={() => this.setStatus('OCZEKUJĄCE NA DOSTAWĘ')} selected={this.props.details.status === 'OCZEKUJĄCE NA DOSTAWĘ'}>OCZEKUJĄCE NA DOSTAWĘ</option>
                    </select> </div>
            </div>


        );
    }
}



