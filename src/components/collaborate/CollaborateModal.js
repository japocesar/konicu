import React from 'react';
import portada from "../../assets/collaborate/comunidad.png";

export const CollaborateModal = () => {
    return (
        <div className="modal fade" id="collaboraModal" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <img src={ portada } alt="Comunidad" style={{ minWidth: '90%' }} />
                        <h5 className="modal-title text-center" id="collaboraModal"> Participar en nuestras distintas secciones </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Para participar sólo asegúrate de enviar correo o whatsapp de mamá o papá para confirmar que autorizan tu participación, o que lo envíen ellos desde su cuenta. Firma tus materiales con algún nombre corto, que es el que publicaremos, tus demás datos personales nunca los haremos públicos.</p>
                        <p>Puedes participar enviando:</p>
                        <ul className="custom-list">
                            <li>Mensajes firmados o anónimos, para otra niña o niño, felicitaciones…</li>
                            <li>Fotos de proyectos o actividades que has realizado, de tus hobbies, mascotas…</li>
                            <li>Audios o videos con algún mensaje, chiste, historieta, canción</li>
                            <li>Dibujos o pinturas</li>
                            <li>Fotos o animaciones</li>
                            <li>Cómics</li>
                            <li>Opiniones</li>
                            <li>Sugerencias</li>
                        </ul>
                        <p>
                            Si tienes un especial interés en colaborar con los contenidos de manera recurrente, así nos lo puedes hacer saber en tu correo.
                        </p>
                    </div>
                </div>
            </div>
        </div> 
    )
}
