import React from 'react';
import '../../assets/styles/buttons.scss';
import './Account.scss';

export default class Account extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      userData: {
        email: null,
        number: null,
        phone: null,
        street: null,
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

    if (!localStorage.getItem('user')) {
      this.props.history.push('/login?unauthenticatedAccessTry=true');
      return;
    }

    fetch('https://pizzeria-backend-zpi.herokuapp.com/v1/user/userAddress', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
      }
    })
      .then(userData => userData.json())
      .then(userData => this.setState({ userData }));

  }

  handleSubmit(event) {
    event.preventDefault(); // Prevent browser reload/refresh

    fetch('https://pizzeria-backend-zpi.herokuapp.com/v1/user/address', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
      },
      body: JSON.stringify({
        street: event.target[0].value,
        number: event.target[1].value,
        phone: event.target[2].value,
        email: event.target[3].value,
      })
    })
      .then(res => {
        if (res.status === 201) {
          this.setState({
            error: null,
          })
        } else {
          this.props.history.push('/account');
          res.json().then(error => this.setState({
            error: error.message
          }));
        }
      });
  }

  render() {
    return (
      <div className="account-subpage-wrapper">
        <div className="forms-position-wrapper">

          <div className="form-wrapper">
            <h1>Dane adresowe</h1>

            {this.state.error ? <div className="error"> {this.state.error} </div> : null}
            <form onSubmit={this.handleSubmit} id="account-form">
              <div className="form-fields-wrapper">
                <div className="form-element form-element--street">
                  <label>Ulica</label>
                  <input type="text" name="street" defaultValue={this.state.userData.street ? this.state.userData.street : null} />
                </div>
                <div className="form-element form-element--number">
                  <label>Numer lokalu</label>
                  <input type="text" name="number" defaultValue={this.state.userData.number ? this.state.userData.number : null} />
                </div>
                <div className="form-element">
                  <label>Numer telefonu</label>
                  <input type="text" name="phone" defaultValue={this.state.userData.phone ? this.state.userData.phone : null} />
                </div>
                <h1><br />Dane konta</h1>
                <div className="form-element">
                  <label>E-mail</label>
                  <input type="email" name="email" placeholder="Podaj swój adres e-mail" autoComplete="new-password"
                    defaultValue={JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).mail : null} />
                </div>
                <div className="form-element">
                  <label>Hasło</label>
                  <input type="password" name="password" placeholder="Podaj hasło" autoComplete="new-password" />
                </div>
                <div className="form-element">
                  <label>Powtórz hasło</label>
                  <input type="password" name="password2" placeholder="Podaj hasło ponownie" />
                </div>
                <button type="submit" className="btn-primary">Zatwierdź</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
