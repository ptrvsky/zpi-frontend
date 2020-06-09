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

    // {this.state.orders.map((order, index) => {
    //     console.log(this.state.index);
    //     return <DeliveryOrder details={order} key={order.id} index={index} />

    // })
    // }

    render() {
        let date = new Date(this.props.details.date).toISOString();
        return (
            <div className="menu-element-wrapper">
                <div className="id-element">{this.props.index + 1}</div>
                <div className="name-element">{this.props.details.orderId}</div>
                {/* <div className="ingridients-element"><ul>{this.props.details.pizzas[0] ? this.props.details.pizzas.map((pizza) =>
                    <li>{pizza.pizzaIngredientDto.map((pizzaIngredient, index) => pizzaIngredient.name + (index < pizza.pizzaIngredientDto.length - 1 ? ', ' : ''))}</li>
                ) : null}</ul></div> */}
                <div className="ingridients-element">{this.props.details.address.toString()}</div>
   
                <div className="data-element">{date.slice(0, 10) + ", " + date.slice(11, 16)}</div>
                <label class="input-check"><input onchange="change_state(this)" type="checkbox" value="something" name="test" /> Dostarczone </label>
            </div>


        );
    }
}



