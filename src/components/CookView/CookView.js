import React from 'react';
import '../../assets/styles/buttons.scss';
import OrderElement from './OrderElement/OrderElement';
import './CookView.scss';

export default class CookView extends React.Component {

  constructor(props) {
    super();
    this.state = {
      pizzas: [
        {
          "id":1,
          "typeName": "202020",
          "ingredients": [
            {
              "id": 2,
              "name": "Cheese",
              "price": 4.5,
              "ifAllergen": true,
              "quantity": 1
            }
          ],
          "diameter": "19.03   21:57",
          "crust": "Skadnik 1, skaldnik 2, ciasto 20 cm"
        },
        {
          "id":3,
          "typeName": "303030",
          "ingredients": [
            {
              "id": 4,
              "name": "HamHa",
              "price": 4.5,
              "ifAllergen": false,
              "quantity": 1
            }
          ],
          "diameter": "20.03   00:09",
          "crust": "Skadnik 3, skaldnik 2, ciasto 30 cm"
        }
      ],
      
    }
  }
  

  render() {
    return (
      <div className="menu-wrapper">
        <div className="menu-content-wrapper">
            <div className="menu-content">
            <div className="menu-title">CookView</div>
            <div className="menu-title-wrapper">
              <div className="id-element">Lp.</div>
              <div className="name-element">Nr Zamowienia</div>
              <div className="ingredients-title">Skład</div>
              <div className="crust-element">Czas zamowienia</div>
              <div className="button-element">Status</div>
              </div>
            </div>
            {this.state.pizzas ?
              this.state.pizzas.map(pizza => <OrderElement details={pizza} key={pizza.id} />) :
              null}
          </div>
        </div>
      );
  }
}

  