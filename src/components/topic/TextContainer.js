import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPodcast } from "@fortawesome/free-solid-svg-icons";

import { texts } from '../../data/topicTexts';

export const TextContainer = ({ id, name }) => {

    const [paragraphs, setParagraphs] = useState([]);

    useEffect(() => {
        setParagraphs(texts[id])
    }, [id])

    return (
        <div className={`container text-container ${name}`}>
        {
            paragraphs.map( p => (
                ( ! p.includes("http") )
                ? (<p key={ p }> { p } </p>)
                : (<a key={ p } href={ p } target="blank">
                    { (name.includes('podcast'))
                        ? ( <FontAwesomeIcon style={{ color: "white" }} icon={ faPodcast } size="3x">Hola</FontAwesomeIcon> ) 
                        : <i className="fa fa-spotify" aria-hidden="true"></i> 
                    }
                </a>)
            ))
        } 
        </div>
    )
}
