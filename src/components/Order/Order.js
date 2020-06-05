import React from 'react';
import '../../assets/styles/buttons.scss';
import './Order.scss';
import OrderElement from './OrderElement/OrderElement';

export default class Order extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      order: JSON.parse(localStorage.getItem('order')),
      isOrderDone: false,
      user: JSON.parse(localStorage.getItem('user')),
    }
    this.handleOrderClick = this.handleOrderClick.bind(this);
  }

  handleOrderClick(event) {
    event.preventDefault(); // Prevent browser reload/refresh

    const order = JSON.parse(localStorage.getItem('order'));
    order.address = {
      street: event.target[0].value,
      number: event.target[1].value,
      phone: event.target[2].value,
      email: event.target[3].value
    }
    // Payment data
    // if (event.target[4].checked) order.payment = 'onDelivery';
    // if (event.target[5].checked) order.payment = 'online';

    localStorage.setItem('order', JSON.stringify(order));

    // Prepare order to send to backend
    order.standards = order.standards.map(pizza => pizza = {
      id: pizza.id,
      diameter: pizza.diameter
    });

    // Prepare headers based on user status
    const headers = { 'Content-Type': 'application/json' }
    if (JSON.parse(localStorage.getItem('user'))) headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;

    fetch('https://pizzeria-backend-zpi.herokuapp.com/v1/order', {
      method: 'POST',
      headers,
      body: JSON.stringify(order)
    })
      .then(res => {
        if (res.status === 200) {
          this.setState({ order: JSON.parse(localStorage.getItem('order')), isOrderDone: true });
          window.scrollTo(0, 0);
          localStorage.setItem('cart', JSON.stringify({
            standards: [],
            customs: []
          }));

          localStorage.setItem('order', JSON.stringify({
            standards: [],
            customs: [],
            address: {},
            payment: null
          }));
        }
      });
  }

  render() {

    let offset = 0;
    let sum = 0;
    return (
      <div className="order-wrapper">
        <div className="order-content-wrapper">
          <div className="order-content">
            <div className="order-title">
              {this.state.order.standards.length + this.state.order.customs.length > 0
                ? this.state.isOrderDone ? "Twoje zamówienie zostało przekazane do realizacji." : "Twoje zamówienie"
                : "Aby utworzyć zamówienie, przejdź do koszyka."} </div>
            {this.state.order.standards ?
              this.state.order.standards.map((pizza, index) => {
                sum += Number(pizza.price);
                offset = index + 1;
                return <OrderElement details={pizza} key={index} index={index} offset={0} type='standards' />;
              })
              : null}
            {this.state.order.customs ?
              this.state.order.customs.map((pizza, index) => {
                pizza.price = 0;
                pizza.pizzaIngredients.map(ingredient => pizza.price += ingredient.price);
                sum += Number(pizza.price);
                return <OrderElement details={pizza} key={index + offset} index={index} offset={offset} type='customs' />;
              })
              : null}
            {this.state.order.standards.length + this.state.order.customs.length > 0 ?
              <div>
                <div className="align-right-wrapper">
                  <div className="total-price">{sum.toFixed(2) + " zł"}</div>
                </div>
                <div className="form-title">Dane adresowe</div>
                <form onSubmit={this.handleOrderClick} id="registration-form">
                  <div className="form-fields-wrapper">
                    <div className="form-element form-element--street">
                      <label>Ulica</label>
                      {this.state.isOrderDone
                        ? <div className="order-detail">
                          {this.state.order.address.street + " " + this.state.order.address.number}
                        </div>
                        : <input type="text" name="street" />}
                    </div>
                    {this.state.isOrderDone
                      ? null
                      : <div className="form-element form-element--number">
                        <label>Numer lokalu</label>
                        <input type="text" name="number" />
                      </div>}
                    <div className="form-element">
                      <label>Numer telefonu</label>
                      {this.state.isOrderDone
                        ? <div className="order-detail">{this.state.order.address.phone}</div>
                        : <input type="text" name="phone" />}
                    </div>
                    <div className="form-element">
                      <label>E-mail</label>
                      {this.state.isOrderDone
                        ? <div className="order-detail">{this.state.order.address.email}</div>
                        : <input type="text" name="email"
                          defaultValue={this.state.user ? this.state.user.mail : null} />}
                    </div>
                    <div className="form-element">
                      <label>Płatność</label>
                      {this.state.isOrderDone
                        ? <div className="order-detail">{this.state.order.payment === 'onDelivery' ? 'Przy odbiorze' : 'Opłacono'}</div>
                        : <div className="payment-radio-wrapper">
                          <input type="radio" id="delivery" name="gender" value="delivery" required />
                          <label htmlFor="delivery">Przy odbiorze</label>
                          <input type="radio" id="online" name="gender" value="online" required />
                          <label htmlFor="online">Online</label>
                        </div>}
                    </div>
                  </div>
                  <div className="align-right-wrapper">
                    {this.state.isOrderDone ? null : <button type="submit" className="btn-primary btn-order" >Zamów</button>}
                  </div>
                </form>
              </div>
              : null}
          </div>
        </div>
      </div>
    );
  }
}