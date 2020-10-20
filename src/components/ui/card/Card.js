import React from 'react'
import { Circle } from '../circle/Circle'

export const Card = ( { titulo, descripcion, clase, icono } ) => {
    return (
        <div key={ titulo } className="card  text-white bg-dark">
            <Circle clase={clase} icono={icono} />
            <div className="card-body">
                <h5 className="card-title"> { titulo } </h5>
                <p className="card-text"> { descripcion } </p>
            </div>
        </div>
)
}
