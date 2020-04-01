import React from 'react';
import { Link } from "react-router-dom";
import '../../assets/styles/buttons.scss';
import './Index.scss';

export default class Index extends React.Component {

  render() {
    return (
      <div className="index-wrapper">
        <div className="content">
          <div className="p1">Najlepsza pizza w mieście.</div>
          <div className="p2">Na serio, nie kłamiemy.</div>
          <div className="button-wrapper">
            <Link to="/movies">
              <button className="btn-primary btn-order">Zamów teraz</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}