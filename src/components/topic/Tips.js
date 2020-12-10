import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGifts, faPeopleCarry } from "@fortawesome/free-solid-svg-icons";
import arbol from '../../assets/topic/arbol.jpg';
import './tips.scss';

export const Tips = ({ close }) => {

    const handleClose = (e) => {
        e.stopPropagation();
        close();
    }

    return (
        <div className="tips-content d-none container">
            <span className="text-right close-btn col-12"
                onClick={ (e) => handleClose(e) }>
                Cerrar
            </span>
            <h1>Tips Navideños</h1>
            <section className="col-12 col-md-8 text-left mt-4 d-flex flex-wrap mb-3 animate__animated animate__slideInDown animate__delay-1s">
                <h4 className="col-12">Diviértete!</h4>
                <div className="col-4">
                    <img className="w-100" src={ arbol } alt="arbol" />
                </div>
                <div className="col">
                    Realiza actividades con tu familia y ponle una pizca de humor, verás que es genial y tendrás recuerdos bonitos y divertidos. Algunas actividades que pueden realizar son: Calendario de Adviento, adornar la casa poniendo el arbolito, el nacimiento y otros adornos; realizar algunas tarjetas en papel o digitales, para familia y amigos; ver películas e historias de Navidad, cantar canciones propias de esta época como los villancicos.
                </div>
            </section>
            <section className="col-12 col-md-8 offset-md-4 text-left d-flex flex-wrap mb-3  animate__animated animate__slideInUp animate__delay-2s">
                <h4 className="col-12">Comparte!</h4>
                <div className="col-4">
                    <FontAwesomeIcon icon={ faPeopleCarry } size="4x" />
                </div>
                <div className="col-8">
                    Puedes compartir y aportar a la comunidad donando lo que ya no utilices y tengas en buen estado; puede ser ropa, juguetes y libros. También pueden comprar algunas cosas nuevas, como insumos para higiene personal, ropa abrigadora y alimentos, para ayudar a los más necesitados.
                </div>
            </section>
            <section className="col-12 col-md-8 text-left d-flex flex-wrap mb-3 animate__animated animate__slideInLeft animate__delay-2s">
                <h4 className="col-12">Acércate!</h4>
                <div className="col-12">
                    Llama o escribe a personas que han sido importantes para ti. Si no puedes visitarlas hay otras formas de contactarlas y convivir con ellas. No dudes en hacerles saber cuánto les estimas.
                </div>
            </section>
            <section className="col-12 col-md-10 offset-md-2 text-left d-flex flex-wrap mb-3">
                <h4 className="col-12">Sé práctico!</h4>
                <div className="col-8">
                    Al hacer tus peticiones de regalos, ya sea en la cartita que pones en el árbol, o en las listas de regalos para los intercambios, piensa muy bien qué cosas necesitas y que te serán útiles.
                </div>
                <div className="col-4">
                    <FontAwesomeIcon icon={ faGifts } size="4x" />
                </div>
            </section>
            <section className="text-left d-flex flex-wrap mb-3">
                <h4 className="col-12">Planea!</h4>
                <div className="col-12">
                    Antes de llegar al día de los propósitos de año nuevo, checa algunos videos o libros con recomendaciones sobre cómo adquirir hábitos y lograr metas. Te será de gran ayuda escribir qué quieres lograr y llevar registros en algunos formatos en los que puedas ir viendo tus avances.
                </div>
            </section>
        </div>
    )
}
