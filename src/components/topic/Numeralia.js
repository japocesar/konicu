import React, { useEffect } from 'react';
import { texts } from "../../data/topicTexts";
import { topic } from "../../helpers/parallax";
import duendeImg from "../../assets/topic/duende.png";

export const Numeralia = () => {

    useEffect(() => {
        topic()
    }, [])

    return (
        <div className="numeralia p-5">
            <h1>Num3r4lia</h1>
            <img id="duende" src={ duendeImg } alt="duende" />
            <hr className="mb-4" />
            {/* <p>Selecciona un número para conocer sus datos curiosos relacionados a la Navidad</p> */}
            <div className="row row-cols-1">
                { texts.map((text, i) => (
                    <div className="col mb-4" key={ text.title }>
                    <div className={`card h-100 animate__animated ${i === 0 && 'animate__bourubberBand first-card'} animate__slow`}>
                        <div className="card-body d-flex pointer flex flex-wrap text-white">
                            <h5 className="card-title m-0 col-4 animate__animated d-flex align-items-center justify-content-center"> { text.title } </h5>
                            <p className="m-0 col-8 d-flex align-items-center text-left"> { text.content } </p>
                        </div>
                    </div>
                    </div>
                )) }
            </div>
        </div>
    )
}
