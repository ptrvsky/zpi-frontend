import React from 'react';
import '../../assets/styles/buttons.scss';
import DeliveryOrder from './DeliveryOrder/DeliveryOrder';
import './DeliveryView.scss';
import './DeliveryOrder/DeliveryOrder.scss';

export default class DeliveryView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            pizzas: [],
            message: null,

        }
    }

    fetchOrders() {
        let url = 'https://pizzeria-backend-zpi.herokuapp.com/v1/view/delivery';

        fetch(url)
            .then(response => response.json())
            .then(orders => {
                this.setState({ orders });
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.fetchOrders();
    }


    render() {
        return (
            <div className="delivery-view-wrapper">
                <div className="delivery-view-content-wrapper">
                    <div className="delivery-view-content">
                        <div className="delivery-view-title">Widok dostawcy</div>
                        <div className="delivery-view-title-wrapper">
                            <div className="delivery-view-id-element">Lp.</div>
                            <div className="delivery-view-name-element">Nr zamówienia</div>
                            {/*<div className="cook-view-ingredients-title">Skład</div>*/}
                            <div className="delivery-view-address-element">Adres</div>
                            <div className="delivery-view-phoneNumber-element">Nr telefonu</div>
                            <div className="delivery-view-time-element">Data zamówienia</div>
                            <div className="delivery-view-button-element">Status</div>
                        </div>
                    </div>
                    {this.state.orders.map((order, index) => {
                        console.log(this.state.index);
                        return <DeliveryOrder details={order} key={order.id} index={index} />

                    })
                    }

                </div>
            </div>
        );
    }
}

