import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, NavDropdown } from 'react-bootstrap';
import { User, LogIn, } from 'react-feather';
import { useMediaQuery } from 'react-responsive'
import './Navbar.scss';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 })
  return isMobile ? children : null
}

class NavigationBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        status: 'NOT_LOGGED',
      },
    }
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('user')) this.setState({
      user: JSON.parse(localStorage.getItem('user'))
    });
  }

  handleLogout() {
    localStorage.removeItem('user');
    this.setState({
      user: {
        status: 'NOT_LOGGED'
      }
    })
  }

  render() {
    return (
      <div className="Navbar">
        <div className="navbar-container">
          <Navbar variant="light" expand="lg">
            <Link to="/">
              <Navbar.Brand>
                <div className="logo-text d-inline-block align-top"><span className="dark-gray"><span role="img" aria-label="logo">🍕</span> Pizzeria</span><span className="red"> Online</span></div>
              </Navbar.Brand>
            </Link>

            <Mobile>
              {this.state.user.status === 'LOGGED' ?
                <NavDropdown alignRight title={<User />} className="user-button-mobile ml-auto">
                  <Link to="/orders" className="dropdown-item">Zamowienia</Link>
                  <Link to="/cart" className="dropdown-item">Koszyk</Link>
                  <Link to="/account" className="dropdown-item">Dane konta</Link>
                  <NavDropdown.Divider />
                  <div className="dropdown-item" onClick={this.handleLogout}>Wyloguj</div>
                </NavDropdown>
                : <Link to="/login" className="login-button-mobile ml-auto" >{<LogIn />}</Link>}
              <Navbar.Toggle />
              <Navbar.Collapse className="links">
                <Link to="/menu" className="nav-link">Menu</Link>
                <Link to="/about" className="nav-link">O nas</Link>
                <Link to="/contact" className="nav-link">Kontakt</Link>
              </Navbar.Collapse>
            </Mobile>

            <Desktop>
              <div className="desktop-links">
                <Link to="/menu" className="nav-link">Menu</Link>
                <Link to="/about" className="nav-link">O nas</Link>
                <Link to="/contact" className="nav-link">Kontakt</Link>
              </div>
              {this.state.user.status === 'LOGGED' ?
                <NavDropdown alignRight title={<User />} className="ml-auto">
                  <Link to="/oreders" className="dropdown-item">Zamowienia</Link>
                  <Link to="/cart" className="dropdown-item">Koszyk</Link>
                  <Link to="/account" className="dropdown-item">Dane konta</Link>
                  <NavDropdown.Divider />
                  <div className="dropdown-item" onClick={this.handleLogout}>Wyloguj</div>
                </NavDropdown>
                : <Link to="/login">{<LogIn />}</Link>}
            </Desktop>

          </Navbar>
          <div className="navbar-underline" />
        </div>
      </div>
    );
  }
}

export default withRouter(NavigationBar);