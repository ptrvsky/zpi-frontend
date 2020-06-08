import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/buttons.scss';
import OrderElement from './OrderElement/OrderElement';
import './CookView.scss';
import './OrderElement/OrderElement.scss';

export default class CookView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            pizzas: [],
            message: null,

        }
    }

    fetchOrders() {
        let url = 'https://pizzeria-backend-zpi.herokuapp.com/v1/view/cook';

        fetch(url)
            .then(response => response.json())
            .then(orders => {
                if (orders.status === 200) this.setState({ orders });
            })
            .catch(err => console.log(err));
    }

    fetchPizzas() {
        let url = 'https://pizzeria-backend-zpi.herokuapp.com/v1/pizza';

        fetch(url)
            .then(response => response.json())
            .then(pizzas => {
                if (pizzas.status === 200) this.setState({ pizzas });
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.fetchOrders();
        this.fetchPizzas();
    }


    render() {
        return (
            <div className="menu-wrapper">
                <div className="menu-content-wrapper">
                    <div className="menu-content">
                        <div className="menu-title">Zamówienia pizz</div>
                        <div className="menu-title-wrapper">
                            <div className="id-element">Lp.</div>
                            <div className="name-element">Nr Zamówienia</div>
                            <div className="ingredients-title">Skład</div>
                            <div className="time-element">Czas zamówienia</div>
                            <div className="button-element">Status</div>
                        </div>
                    </div>
                    {this.state.orders.map((order, index) => {
                        console.log(this.state.index);
                        return <OrderElement details={order} key={order.id} index={index} />

                    })
                    }

                </div>
            </div>
        );
    }
}

