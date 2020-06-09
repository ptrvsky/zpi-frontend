import React from 'react';
import '../../assets/styles/buttons.scss';
import './Login.scss';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      registerError: null,
      loginError: null,
    };

    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  componentDidMount() {

    let user = {
      status: 'NOT_LOGGED'
    }
    if (localStorage.getItem('user')) user = JSON.parse(localStorage.getItem('user'));
    if (user.status === 'LOGGED') {
      this.props.history.push('/');
    }

  }

  handleRegisterSubmit(event) {
    event.preventDefault(); // Prevent browser reload/refresh

    fetch('https://pizzeria-backend-zpi.herokuapp.com/v1/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        mail: event.target[0].value,
        password: event.target[1].value,
      })
    })
      .then(res => {
        if (res.status === 201) {
          document.getElementById("registration-form").reset();
          this.props.history.push('/login?registrationRedirect=true');  // Redirect to login page after succesful user registration
          this.setState({
            loginError: null,
            registerError: null
          })
        } else {
          this.props.history.push('/login');
          res.json().then(error => this.setState({
            loginError: null,
            registerError: error.message
          }));
        }
      });
  }

  handleLoginSubmit(event) {
    event.preventDefault(); // Prevent browser reload/refresh
    const mail = event.target[0].value;
    const password = event.target[1].value;

    fetch('https://pizzeria-backend-zpi.herokuapp.com/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        mail,
        password,
      })
    })
      .then(res => {
        if (res.status === 200) {
          let user = {
            status: 'LOGGED',
            mail,
          }
          res.json()
            .then(res => {
              user.token = res.token;
              user.role = res.roles[0];
            })
            .then(() => localStorage.setItem('user', JSON.stringify(user)))
            .then(() => window.location.reload(true));
        } else {
          this.props.history.push('/login');
          res.json().then(error => this.setState({
            loginError: error.message,
            registerError: null
          }));
        }
      });
  }

  render() {
    return (
      <div className="login-subpage-wrapper">
        <div className="forms-position-wrapper">

          <div className="register-wrapper">
            <h1>Rejestracja</h1>
            {this.props.location.search === "?registrationRedirect=true" ? <div className="success">Twoje konto zostało utworzone. Sprawdź swój e-mail, aby potwierdzić rejestrację.</div> : null}
            {this.state.registerError ? <div className="error"> {this.state.registerError} </div> : null}
            <form onSubmit={this.handleRegisterSubmit} id="registration-form">
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
              <button type="submit" className="btn-primary">Zarejestruj</button>
            </form>
          </div>

          <div className="login-wrapper">
            <h1>Logowanie</h1>
            {this.props.location.search === "?logout=true" ? <div className="success">Zostałeś wylogowany.</div> : null}
            {this.props.location.search === "?emailConfirmation=true" ? <div className="success">Twoje konto zostało zweryfikowane. Teraz możesz się zalogować.</div> : null}
            {this.props.location.search === "?unauthenticatedOrderTry=true" ? <div className="error">Musisz być zalogowany, aby złożyć zamówienie.</div> : null}
            {this.props.location.search === "?unauthenticatedAccessTry=true" ? <div className="error">Musisz być zalogowany, aby uzyskać dostęp do tej strony.</div> : null}

            {this.state.loginError ? <div className="error"> {this.state.loginError} </div> : null}
            <form onSubmit={this.handleLoginSubmit} id="login-form">
              <div className="form-element">
                <label>E-mail</label>
                <input type="email" name="email" placeholder="Podaj swój adres e-mail" />
              </div>
              <div className="form-element">
                <label>Hasło</label>
                <input type="password" name="password" placeholder="Podaj hasło" />
              </div>
              <button type="submit" className="btn-primary">Zaloguj</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
