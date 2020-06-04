import React from 'react';
import '../../assets/styles/buttons.scss';
import './Account.scss';

export default class Account extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

    let user = null
    if (localStorage.getItem('user')) user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      this.props.history.push('/');
    }

  }

  handleSubmit(event) {
    event.preventDefault(); // Prevent browser reload/refresh

    fetch('https://pizzeria-backend-zpi.herokuapp.com/v1/account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
      },
      body: JSON.stringify({
        street: event.target[0].value,
        number: event.target[1].value,
        phone: event.target[2].value,
        mail: event.target[3].value,
        password: event.target[4].value,
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
                  <input type="text" name="street" />
                </div>
                <div className="form-element form-element--number">
                  <label>Numer lokalu</label>
                  <input type="text" name="number" />
                </div>
                <div className="form-element">
                  <label>Numer telefonu</label>
                  <input type="text" name="phone" />
                </div>
                <h1><br />Dane konta</h1>
                <div className="form-element">
                  <label>E-mail</label>
                  <input type="email" name="email" placeholder="Podaj swój adres e-mail" autoComplete="new-password" />
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
