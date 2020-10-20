
import React, { useEffect } from 'react';

import { Circle } from '../ui/circle/Circle';
import { bannerCircles } from '../../data/bannerCircles';
import { cards } from "../../data/cards";
import { parallaxEffect } from "../../helpers/home";


import "animate.css";
import './home.scss';
import { Card } from '../ui/card/Card';



export const HomeScreen = () => {

    useEffect(() => {
        parallaxEffect();
    }, [])
    
    return (
    <>
       <section>
        <div className="row justify-content-md-center m-0">
            <div className="col-12 col-offset-md-2 col-md-8 p-0 img-container" style={{ backgroundImage: `url("assets/home/01.jpg")` }}></div>
        </div>

        <div className="row m-0 justify-content-around circles-container">
            { bannerCircles.map( act => 
                (
                    <Circle key={ act.texto } { ...act } />
                )
            )}
        </div> 
       </section>

        <section  id="cards" className="panel orange align-top my-5">
            <div className="container cards-container">
                <div className="card-deck container">
                    { cards.map( card => (
                        <Card key={ card.titulo } { ...card } />
                    ) )}
                </div>
            </div>
        </section>

        <section style={{ height: 300 }} id="sponsors" className="panel red align-top">
            <p id="sponsors-content"><code>start: "top center"</code> pins this element when the <strong>top</strong> of the red element hits the <strong>center</strong> of the viewport, and remains pinned for 200px because its <code>end</code> is defined as <code>"+=200"</code></p>
        </section>

        <section style={{ height: 300 }} className="panel purple">
            Easy Peasy!
        </section>
    </>

    )
}
