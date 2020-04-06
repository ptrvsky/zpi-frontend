import React from 'react';
import '../../assets/styles/buttons.scss';
import './About.scss';

export default class About extends React.Component {

    render() {
        return (
            <div className="about-wrapper">
                <div className="grid-container">
                    <div className="photo">
                    <img className="three" src="images/aboutThree.jpg" alt="" />
                    </div>
                    <div className="title">O nas</div>
                    <div className="text">
                    Farfalla to prawdziwa włoska kuchnia. Lokal powstał zarówno z pasji, jak i potrzeby, ponieważ do tej pory brakowało takiego miejsca na mapie Bydgoszczy. Nie chcieliśmy stworzyć kolejnej, zwykłej pizzerii, których pełno jest w naszym mieście i każda oferuje niemal identyczne smaki. Zależało nam na tym, aby do Bydgoszczy przenieść prawdziwy, włoski klimat i smaki rodem z Italii. Tak zrodził się pomysł na Farfallę.
                        
                        To, co wyróżnia nas na tle konkurencji, to najwyższej jakości składniki, które pochodzą z Italii. Dzięki temu mamy prawo nazywać się prawdziwą, włoską pizzerią. Niczego nie udajemy.
                        
                        Zapomnijcie także o tradycyjnych sosach do pizzy – czosnkowym lub pomidorowym. Dla Włocha byłaby to prawdziwa profanacja :)
                        
                        Zamiast tego stawiamy na własnej roboty oliwy smakowe, przygotowywane na bazie włoskiej oliwy Venturi. Dają one niezwykły aromat i smak, którego nie uświadczysz w żadnej innej pizzerii w Bydgoszczy.
                        
                        W przytulnym wnętrzu Farfalli możesz przygotować kameralną imprezę rodzinną czy firmową. Stawiamy nie tylko na smak, ale także niepowtarzalny klimat i gościnność.
                        
                        Na miejscu, na wynos, z dowozem (już od 3 złotych). Ciesz się smakami słonecznej Italii gdzie chcesz.                        
                        
                    </div>
                </div>
            </div>
        );
    }
}