import React from 'react';
import '../../../assets/styles/buttons.scss';
import './DeliveryOrder.scss';

export default class DeliveryOrder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addresses: [],
        };
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
            <div className="delivery-view-element-wrapper">
                <div className="delivery-view-element-id-element">{this.props.index + 1}</div>
                <div className="delivery-view-element-name-element">{'0000' + this.props.details.orderId}</div>
                <div className="delivery-view-element-ingridients-element"><ul>{this.props.details.pizzas[0] ? this.props.details.pizzas.map((pizza) =>
                    <li>{pizza.pizzaIngredientDto.map((pizzaIngredient, index) => pizzaIngredient.name + (index < pizza.pizzaIngredientDto.length - 1 ? ', ' : ''))}
                        {" (" + pizza.diameter + "cm, " + pizza.crust.toLowerCase() + ")"}</li>
                ) : null}</ul></div>
                <div className="delivery-view-element-address-element">{this.props.details.address.street + " " + this.props.details.address.number}</div>
                <div className="delivery-view-element-phoneNumber-element"><a href={"tel:" + this.props.details.address.phoneNumber}>{this.props.details.address.phoneNumber}</a></div>
                <div className="delivery-view-element-data-element">{date.slice(0, 10) + ", " + date.slice(11, 16)}</div>
                <div class="delivery-view-element-input-check">
                    <select class="form-control form-control-sm">
                        <option onClick={() => this.setStatus('OCZEKUJĄCE NA DOSTAWĘ')} selected={this.props.details.status === 'OCZEKUJĄCE NA DOSTAWĘ'}>OCZEKUJĄCE NA DOSTAWĘ</option>
                        <option onClick={() => this.setStatus('W DRODZE')} selected={this.props.details.status === 'W DRODZE'}>W DRODZE</option>
                        <option onClick={() => this.setStatus('DOSTARCZONE')} selected={this.props.details.status === 'DOSTARCZONE'}>DOSTARCZONE</option>
                    </select> </div>
            </div>


        );
    }
}



