import React from 'react';
import { cards } from "../../data/collaborateCards";
import { Card } from '../ui/card/Card';
import { CollaborateModal } from './CollaborateModal';

export const Collaborate = () => {
    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Hay muchas formas en que puedes participar</h1>
                    <button className="btn btn-primary" data-toggle="modal" data-target="#collaboraModal">Descubre con qué puedes participar {'>'}</button>
                    <CollaborateModal />
                </div>
            </div>

            <div className="container cards-container mb-5">
                <div className="card-group container">
                    { cards.map(card => <Card { ...card } key={ card.titulo } /> )}
                </div>
            </div>
        </>
    )
}
