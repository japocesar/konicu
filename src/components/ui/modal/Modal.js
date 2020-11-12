import React from 'react';
import ReactPlayer from "react-player";
import './modal.scss';

export const Modal = ( { titulo, texto, img, video } ) => {

    // const [localImg, setLocalImg] = useState(null);
    // import(`../../../assets/${ img }.png`).then( image => setLocalImg(image.default)).catch(() => setLocalImg(null));

    return (
        <>        
            <div className="modal fade" id="exampleModalLabel" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel"> { titulo } </h3>
                            <ReactPlayer
                                url={`https://www.facebook.com/ClubKonicu/videos/${ video }/`}
                                controls
                                width="300px"
                                height="300px"
                            />
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
