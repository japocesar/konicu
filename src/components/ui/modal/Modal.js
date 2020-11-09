import React, { useState } from 'react';
import './modal.scss';

export const Modal = ( { titulo, texto, img } ) => {

    const [localImg, setLocalImg] = useState(null);
    import(`../../../assets/${ img }.png`).then( image => setLocalImg(image.default)).catch(() => setLocalImg(null));

    return (
        <>        
            <div className="modal fade" id="exampleModalLabel" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* { (img) && (<img src={ localImg } alt={ titulo } />) } */}
                            <h3 className="modal-title" id="exampleModalLabel"> { titulo } </h3>
                            <div className="fb-video" data-href="https://www.facebook.com/facebook/videos/283025506358647/" data-width="500" data-show-text="false">
                                <div className="fb-xfbml-parse-ignore">
                                    <blockquote cite="https://www.facebook.com/facebook/videos/283025506358647/">
                                        <a href="https://www.facebook.com/facebook/videos/283025506358647/">How to Share With Just Friends</a>
                                        <p>How to share with just friends.</p>
                                        Posted by <a href="https://www.facebook.com/facebook/">Facebook</a> on Friday, December 5, 2014
                                    </blockquote>
                                </div>
                             </div>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" dangerouslySetInnerHTML={{ __html: texto }} />
                    </div>
                </div>
            </div> 
        </>
    )
}
