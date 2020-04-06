import React from 'react';
import '../../assets/styles/buttons.scss';
import './Contact.scss';

export default class Contact extends React.Component {

    render() {
        return (
            <div className="contact-wrapper">

                <div className="contact-title">Kontakt</div>
                <div className="contact-pizza-name">Pizzeria Farfalla  </div>
                <div className="contact-address">ul. Kolejowa 14 <br></br> 53-508 Wrocław  </div>
                <div className="contact-contact">Numer telefonu: 887 336 885<br></br> Adres e-mail:pizzeria@email.com </div>


            </div>

        );
    }
}