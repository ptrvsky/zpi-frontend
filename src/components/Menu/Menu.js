import React from 'react';
import '../../assets/styles/buttons.scss';
import MenuElement from './MenuElement/MenuElement';
import './Menu.scss';

export default class Menu extends React.Component {

  constructor(props) {
    super();
    this.state = {
      pizzas: [
        {
          "id": 1,
          "typeName": "Test",
          "ingredients": [
            {
              "id": 2,
              "name": "Cheese",
              "price": 4.5,
              "ifAllergen": true,
              "quantity": 1
            }
          ],
          "diameter": 30,
          "crust": "THICK"
        },
        {
          "id": 3,
          "typeName": "Test1",
          "ingredients": [
            {
              "id": 4,
              "name": "Ham",
              "price": 4.5,
              "ifAllergen": false,
              "quantity": 1
            }
          ],
          "diameter": 45,
          "crust": "THICK"
        }
      ],
      ingredients: [
        {
          "id": 2,
          "name": "Cheese",
          "price": 4.5,
          "ifAllergen": true,
          "quantity": 1
        },
        {
          "id": 4,
          "name": "Ham",
          "price": 4.5,
          "ifAllergen": false,
          "quantity": 1
        }
      ],
    }
  }

  fetchPizzas() {
    let url = 'https://pizzeria-backend-zpi.herokuapp.com/v1/pizza';

    fetch(url)
      .then(response => response.json())
      .then(pizzas => {
        this.setState({
          pizzas: pizzas,
        })
      })
      .catch(err => console.log(err));

  }

  fetchIngredients() {
    let url = 'https://pizzeria-backend-zpi.herokuapp.com/v1/ingridient';

    fetch(url)
      .then(response => response.json())
      .then(ingredients => {
        this.setState({
          ingredients: ingredients,
        })
      })
      .catch(err => console.log(err));

  }

  componentDidMount() {
    this.fetchIngredients();
    this.fetchPizzas();
  }

  render() {
    return (
      <div className="menu-wrapper">
        <div className="menu-content-wrapper">
          <div className="menu-filters">
            <div className="menu-title">FILTERS</div>
            <div className="menu-filters-buttons">
              {this.state.ingredients ?
                this.state.ingredients.map(ingredient =>
                  <label className="btn-filter" id={ingredient.id}>{ingredient.name}</label>) :
                null}
            </div>
          </div>
          <div className="menu-content">
            <div className="menu-title">MENU</div>
            {this.state.pizzas ?
              this.state.pizzas.map(pizza => <MenuElement details={pizza} key={pizza.id} />) :
              null}
          </div>
        </div>
      </div>
    );
  }
}