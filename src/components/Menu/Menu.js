import React from 'react';
import '../../assets/styles/buttons.scss';
import MenuElement from './MenuElement/MenuElement';
import './Menu.scss';

export default class Menu extends React.Component {

  constructor(props) {
    super();
    this.state = {
      pizzas: [],
      ingredients: [],
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
    let url = 'https://pizzeria-backend-zpi.herokuapp.com/v1/ingredient';

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
            <div className="menu-title">Filters</div>
            <div className="menu-filters-buttons">
              {this.state.ingredients ?
                this.state.ingredients.map(ingredient =>
                  <label className="btn-filter" id={ingredient.id} key={ingredient.id}>{ingredient.name}</label>) :
                null}
            </div>
          </div>
          <div className="menu-content">
            <div className="menu-title">Menu</div>
            {this.state.pizzas ?
              this.state.pizzas.map((pizza, index) => <MenuElement details={pizza} key={pizza.id} index={index} />) :
              null}
          </div>
        </div>
      </div>
    );
  }
}