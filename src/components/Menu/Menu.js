import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/buttons.scss';
import MenuElement from './MenuElement/MenuElement';
import './Menu.scss';
import './MenuElement/MenuElement.scss';

export default class Menu extends React.Component {

  constructor(props) {
    super();
    this.state = {
      pizzas: [],
      ingredients: [],
      filters: [],
      message: null,
    }
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.handleAddingPizzaToCart = this.handleAddingPizzaToCart.bind(this);
  }

  fetchPizzas() {
    let url = 'https://pizzeria-backend-zpi.herokuapp.com/v1/pizza';

    fetch(url)
      .then(response => response.json())
      .then(pizzas => this.setState({ pizzas }))
      .catch(err => console.log(err));
  }

  fetchIngredients() {
    let url = 'https://pizzeria-backend-zpi.herokuapp.com/v1/ingredient';

    fetch(url)
      .then(response => response.json())
      .then(ingredients => this.setState({ ingredients }))
      .catch(err => console.log(err));
  }

  handleFilterClick(event) {
    const ingredientId = Number(event.target.id);
    let filters = this.state.filters;
    if (filters.includes(ingredientId)) {
      this.setState({
        filters: filters.filter(index => index !== ingredientId)
      })
    } else {
      filters.push(ingredientId);
      this.setState({ filters })
    }
  }

  handleAddingPizzaToCart(name) {
    this.setState({ message: "Dodano pizzę " + name + " do koszyka." })
  }

  componentDidMount() {
    this.fetchIngredients();
    this.fetchPizzas();
  }

  render() {
    return (
      <div className="menu-wrapper">
        <div className="menu-content-wrapper">
          <div className="add-message">{this.state.message ? this.state.message : null} </div>
          <div className="menu-filters">
            <div className="menu-title">Filtry</div>
            <div className="menu-filters-buttons">
              {this.state.ingredients ?
                this.state.ingredients.map(ingredient =>
                  <label className={this.state.filters.includes(ingredient.id) ? "btn-filter btn-filter--disabled" : "btn-filter"}
                    id={ingredient.id} key={ingredient.id} onClick={this.handleFilterClick}>{ingredient.name}</label>) :
                null}
            </div>
          </div>
          <div className="menu-content">
            <div className="menu-title">Menu</div>
            <div className="menu-title-wrapper">
              <div className="id-element">Lp.</div>
              <div className="name-element">Nazwa</div>
              <div className="ingredients-title">Składniki</div>
              <div className="crust-element">Ciasto</div>
              <div className="button-element"><div className="button-title">20 cm</div><div className="button-title">30 cm</div>
              </div>
            </div>
            {this.state.pizzas ?
              this.state.pizzas.map((pizza, index) => {
                return pizza.pizzaIngredients.some(pizzaIngredient => this.state.filters.includes(pizzaIngredient.id))
                  ? <MenuElement details={pizza} key={pizza.id} index={index} filtered={true}
                    handleAddingPizzaToCart={this.handleAddingPizzaToCart} />
                  : <MenuElement details={pizza} key={pizza.id} index={index} filtered={false}
                    handleAddingPizzaToCart={this.handleAddingPizzaToCart} />
              }) :
              null}
          </div>
          <div className="menu-buttons-wrapper">
            <Link to="/creator"><button className="btn-primary btn-order" >Utwórz własną pizzę</button></Link>
            <Link to="/cart"><button className="btn-primary btn-order" >Przejdź do koszyka</button></Link>
            </div>
        </div>
      </div>
    );
  }
}