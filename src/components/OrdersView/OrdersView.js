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
            <div className="menu-wrapper">
                <div className="menu-content-wrapper">
                    <div className="menu-content">
                        <div className="menu-title">Zamówienia pizz</div>
                        <div className="menu-title-wrapper">
                            <div className="id-element">Lp.</div>
                            <div className="ingredients-title">Skład</div>
                            <div className="time-element">Czas zamówienia</div>
                            <div className="button-element">Status</div>
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

