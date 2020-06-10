import React from 'react';
import '../../assets/styles/buttons.scss';
import OrderElement from './OrdersElement/OrdersElement';
import './OrdersView.scss';
import './OrdersElement/OrdersElement.scss';

export default class OrdersView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            message: null,
            user: JSON.parse(localStorage.getItem('user')),
        }
    }

    componentDidMount() {
        let url = 'https://pizzeria-backend-zpi.herokuapp.com/v1/user/orders';

        fetch(url, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
            }
        })
            .then(response => response.json())
            .then(orders => {
                this.setState({ orders });
            })
            .catch(err => console.log(err));
    }


    render() {
        return (
            <div className="orders-view-wrapper">
                <div className="orders-view-content-wrapper">
                    <div className="orders-view-content">
                        <div className="orders-view-title">Zamówienia</div>
                        <div className="orders-view-title-wrapper">
                            <div className="orders-view-id-element">Lp.</div>
                            <div className="orders-view-name-element">Nr zamówienia</div>
                            <div className="orders-view-ingredients-title">Skład</div>
                            <div className="orders-view-time-element">Data zamówienia</div>
                            <div className="orders-view-button-element">Status</div>
                        </div>
                    </div>
                    {this.state.orders.map((order, index) => {

                        return <OrderElement details={order} key={order.id} index={index} />


                    })
                    }

                </div>
            </div>
        );
    }
}

