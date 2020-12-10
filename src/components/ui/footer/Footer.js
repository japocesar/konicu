import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faSpotify } from "@fortawesome/free-brands-svg-icons";

import './footer.scss';

export const Footer = () => {
    return (
        <footer className="">
            <div className="col-12 footer-container d-flex flex-wrap">
                {/* <div className="col-12 col-lg-2 d-flex align-items-center konicu">
                    Club Konicú
                </div> */}
                <div className="col-12 col-lg-4 offset-lg-8 d-flex flex-wrap p-3">
                    <div className="col-12 mb-2  text-center">Síguenos en nuestras redes sociales</div>
                    <div className="col-xs-12 col-4 text-center">
                        <a className="text-white" href="https://www.facebook.com/ClubKonicu" title="Facebook" target="_blank">
                            <FontAwesomeIcon icon={ faFacebookF } size="2x" />
                        </a>
                    </div>
                    <div className="col-xs-12 col-4 text-center">
                        <a className="text-white" href="https://www.instagram.com/clubkonicu/" title="Instagram" target="_blank">
                            <FontAwesomeIcon icon={ faInstagram } size="2x" />
                        </a>
                    </div>
                    <div className="col-xs-12 col-4 text-center">
                        <a className="text-white" href="https://open.spotify.com/show/2RErT6Z1u2xeT7B0AtZnqe" title="Spotify" target="_blank">
                            <FontAwesomeIcon icon={ faSpotify } size="2x" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
