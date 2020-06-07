import React from 'react';
import '../../assets/styles/buttons.scss';
import './PizzaCreator.scss';

export default class PizzaCreator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      pickedIngredients: [],
      diameter: null,
      crust: null,
      message: null,
    }
    this.handleIngredientClick = this.handleIngredientClick.bind(this);
    this.handleAddingPizzaToCart = this.handleAddingPizzaToCart.bind(this);
    this.setRandomIngredients = this.setRandomIngredients.bind(this);
    this.resetIngredients = this.resetIngredients.bind(this);
    this.handleDiameterChange = this.handleDiameterChange.bind(this);
    this.handleCrustChange = this.handleCrustChange.bind(this);
  }

  fetchIngredients() {
    let url = 'https://pizzeria-backend-zpi.herokuapp.com/v1/ingredient';

    fetch(url)
      .then(response => response.json())
      .then(ingredients => this.setState({ ingredients }))
      .catch(err => console.log(err));
  }

  handleIngredientClick(event) {
    const ingredientId = Number(event.target.id);
    let pickedIngredients = this.state.pickedIngredients;
    if (pickedIngredients.includes(ingredientId)) {
      this.setState({
        pickedIngredients: pickedIngredients.filter(index => index !== ingredientId)
      })
    } else {
      pickedIngredients.push(ingredientId);
      this.setState({ pickedIngredients });
    }
  }

  handleAddingPizzaToCart(event) {
    event.preventDefault();

    const pizzaIngredients = this.state.ingredients ?
      this.state.ingredients.map(ingredient =>
        this.state.pickedIngredients.includes(ingredient.id) ? ingredient : null).filter(element => element) :
      null;
    let cart = JSON.parse(localStorage.getItem('cart'));
    let pizza = {
      typeName: 'Własna',
      pizzaIngredients,
      diameter: event.target[0].checked ? 20 : 30,
      crust: event.target[2].checked ? 'cienkie' : 'grube',
      price: pizzaIngredients.map(element => Number(element.price)).reduce((sum, price) => sum + price)
    };

    cart.customs = cart.customs.concat(pizza);
    localStorage.setItem('cart', JSON.stringify(cart));
    this.setState({ message: "Dodano pizzę do koszyka." });

    return false;
  }

  componentDidMount() {
    this.fetchIngredients();
  }

  setRandomIngredients() {
    const shuffledIngredientsIds = this.state.ingredients.map(ingredient => ingredient.id).sort(() => 0.75 - Math.random());
    this.setState({ pickedIngredients: shuffledIngredientsIds.slice(0, 4) });
  }

  resetIngredients() {
    this.setState({ pickedIngredients: [] });
  }

  handleDiameterChange(event) {
    this.setState({ diameter: event.currentTarget.value })
  }

  handleCrustChange(event) {
    this.setState({ crust: event.currentTarget.value })
  }

  render() {

    let pickedIngredients = this.state.ingredients
      ? this.state.ingredients.map(ingredient =>
        this.state.pickedIngredients.includes(ingredient.id) ? ingredient : null).filter(element => element)
      : [];

    return (
      <div className="pizza-creator-wrapper">
        <div className="pizza-creator-title">Tworzenie własnej pizzy</div>
        <div className="add-message">{this.state.message ? this.state.message : null} </div>
        <div className="pizza-creator-content-wrapper">
          <div className="left-wrapper">
            <form id="diameter_and_crust" className="diameter-and-crust-wrapper" onSubmit={this.handleAddingPizzaToCart} >
              <div className="diameter-picker">
                <div className="form-title">Rozmiar</div>
                <div className="radio-wrapper">
                  <input type="radio" id="20cm" name="diameter" value="20 cm" required onChange={this.handleDiameterChange} />
                  <label htmlFor="delivery">20 cm</label>
                  <input type="radio" id="30cm" name="diameter" value="30 cm" required onChange={this.handleDiameterChange} />
                  <label htmlFor="online">30 cm</label>
                </div>

              </div>
              <div className="crust-picker">
                <div className="form-title">Ciasto</div>
                <div className="radio-wrapper">
                  <input type="radio" id="thin" name="crust" value="cienkie" required onChange={this.handleCrustChange} />
                  <label htmlFor="delivery">cienkie</label>
                  <input type="radio" id="thick" name="crust" value="grube" required onChange={this.handleCrustChange} />
                  <label htmlFor="online">grube</label>
                </div>
              </div>
            </form>
            <div className="form-title">Składniki</div>
            <div className="ingredients-buttons">
              {this.state.ingredients ?
                this.state.ingredients.map(ingredient =>
                  <label className={this.state.pickedIngredients.includes(ingredient.id) ? "btn-filter btn-filter--picked" : "btn-filter"}
                    id={ingredient.id} key={ingredient.id} onClick={this.handleIngredientClick}>{ingredient.name}</label>) :
                null}
            </div>
            <button className="btn-primary" onClick={this.setRandomIngredients}>Losuj składniki</button>
            <button className="btn-primary" onClick={this.resetIngredients}>Resetuj składniki</button>
          </div>
          <div className="right-wrapper">
            <div className="form-title">Podsumowanie</div>
            {this.state.diameter ? <div className="summary-element">Ciasto
            <div className="pizza-detail">{this.state.diameter}</div>
            </div> : null}
            {this.state.crust ? <div className="summary-element">Ciasto
            <div className="pizza-detail">{this.state.crust}</div>
            </div> : null}
            {this.state.pickedIngredients.length > 0 ? <div className="summary-element">Składniki
            <div className="pizza-detail">
                {pickedIngredients.map(element => element.name).join(", ")}
              </div>
            </div> : null}
            {this.state.crust && this.state.diameter && this.state.pickedIngredients.length > 0
              ? <div className="summary-element">Cena
                  <div className="pizza-detail">
                  {this.state.pickedIngredients.length > 0
                    ? pickedIngredients.map(element => Number(element.price)).reduce((sum, price) => sum + price).toFixed(2) + " zł"
                    : "0.00 zł"}
                </div>
              </div> : null}
          </div>
          <div className="order-button-wrapper"><button type="submit" form="diameter_and_crust" className="btn-primary btn-order" >Dodaj do koszyka</button></div>
        </div>
      </div>
    );
  }
}