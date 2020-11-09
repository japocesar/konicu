import React, { useState } from 'react';
import placeholderImg from "../../../assets/placeholder.png";

export const ImageCard = ( {  id, img, customClass, handleView } ) => {
    const [localImg, setLocalImg] = useState(placeholderImg)
    import(`../../../assets/${ img }.png`).then( image => setLocalImg(image.default));
    
    return (
        <>
            <div className="col mt-3 text-center">
                <img className={ customClass } src={ localImg } alt="Test" onClick={ () => ( customClass ) && handleView(id) } />
            </div>
        </>
    )
}
