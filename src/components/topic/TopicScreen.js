import React, { useCallback, useEffect, useState } from 'react';
import { Lights } from './Lights';
import { Numeralia } from './Numeralia';
import { Snow } from './Snow';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import './topic.scss';
import { Tips } from './Tips';

export const TopicScreen = () => {

    const [isActive, setIsActive] = useState();

    useEffect(() => {
        const cl = document.querySelector('.tips-btn').classList;
        if (isActive === true) {
            cl.remove('inactive');
            cl.add('active');
         } else if ( isActive === false ) {
             cl.remove('active');
             cl.add('inactive');
         }
    }, [isActive])

    const close = useCallback(
        () => {
           setIsActive(false);
        },
        [],
    )

    return (
        <div className="topic">
            <Lights />
            <Numeralia />
            <Snow />
            <div
                onClick={ () => setIsActive(true) }
                className="btn btn-danger tips-btn d-flex align-items-center justify-content-center animate__animated animate__bounce animate__delay-3s">
                <FontAwesomeIcon className="tips-icon" color="white" icon={ faLightbulb } size="3x" />

                <Tips close={ close } />

            </div>
        </div>
    )
}
