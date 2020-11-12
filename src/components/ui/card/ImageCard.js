import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import placeholderImg from "../../../assets/placeholder.png";

export const ImageCard = ( {  id, img, customClass, handleView } ) => {
    const [localImg, setLocalImg] = useState(placeholderImg)
    if (img) import(`../../../assets/${ img }.png`).then( image => setLocalImg(image.default));
    
    return (
        <>
            <div className={`col mt-3 text-center ${ ( !img ) && 'text-card' }`}>
            { ( img ) 
                ? <img className={ customClass } src={ localImg } alt={ img } onClick={ () => ( customClass ) && handleView(id) } /> 
                : <div>
                    <h3>Participa aquí!!</h3>
                    <a href="https://bit.ly/34P1Tby" target="blank"><FontAwesomeIcon icon={faPaperPlane} size="3x" /></a>
                </div>
            }
            </div>
        </>
    )
}
