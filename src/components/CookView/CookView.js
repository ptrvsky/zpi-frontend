import React from 'react';
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
                this.setState({ orders });
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.fetchOrders();
    }


    render() {
        return (
            <div className="cook-view-wrapper">
                <div className="cook-view-content-wrapper">
                    <div className="cook-view-content">
                        <div className="cook-view-title">Widok kucharza</div>
                        <div className="cook-view-title-wrapper">
                            <div className="cook-view-id-element">Lp.</div>
                            <div className="cook-view-name-element">Nr zamówienia</div>
                            <div className="cook-view-ingredients-title">Skład</div>
                            <div className="cook-view-time-element">Data zamówienia</div>
                            <div className="cook-view-button-element">Status</div>
                        </div>
                    </div>
                    {this.state.orders.map((order, index) => {
                        
                        return <OrderElement details={order} key={order.id} index={index}/>
                    

                    })
                    }

                </div>
            </div>
        );
    }
}

