import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ImageCard } from '../ui/card/ImageCard';
import  { cards } from '../../data/fan';

import './fan.scss';
import { Modal } from '../ui/modal/Modal';

export const FanScreen = () => {
    const [cardData, setCardData] = useState({});
    const btn = useRef(null);
    const alert = useRef(null);

    const handleView = useCallback(
        (id) => {
           btn.current.click();
           setCardData(cards[id]);
        },
        [],
    )

    useEffect(() => {
        setTimeout(() => {
            if( alert.current ) {
                alert.current.classList.add('animate__flipOutY');
            }
        }, 3000);
    }, [cardData])

    return (
        <>
        <div ref={ alert } className="alert alert-info alert-dismissible fade show animate__animated animate__flipInY" role="alert">
            Da click en los recuadros para conocer a nuestros participantes!!
        </div>
        <div className="container">
            <div className="card-group row row-cols-2 row-cols-md-4">
                { cards.map( card => 
                    <ImageCard 
                        { ...card }
                        key={ card.id }
                        handleView = { handleView }
                    /> 
                )}
            </div>
            <button hidden ref={btn} type="button" data-toggle="modal" data-target="#exampleModalLabel">Launch modal</button>
            <Modal { ...cardData } />
        </div>
        </>
    )
}
