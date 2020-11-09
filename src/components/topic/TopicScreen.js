import React, { useEffect } from 'react';
import { topic } from '../../helpers/parallax';
import { TextContainer } from './TextContainer';
import './topic.scss';

export const TopicScreen = () => {
    useEffect(() => {
        topic();
    }, [])

    return (
        <>
        <TextContainer id={ 0 } name="catrina" />
        <TextContainer id={ 1 } name="datos" />
        <div className="topic-container">
            <div id="parallax-bg-3" className="parallax-bg" data-speed=".75">
                <div id="bg-3-1"></div>
                <div id="bg-3-2"></div>
                <div id="bg-3-3"></div>
            </div>

            <TextContainer id={ 2 } name="pan podcast" />
            <div id="parallax-bg-2" className="parallax-bg" data-speed=".1">
                <div id="bg-2-1"></div>
                <div id="bg-2-2"></div>
                <div id="bg-2-3"></div> 
                <div id="bg-2-4"></div>
                <div id="bg-2-5"></div>
                <div id="bg-2-6"></div>
            </div>
            
            <div id="parallax-bg-1" className="parallax-bg" data-speed=".35">
                <div id="bg-1-1"></div>
                <div id="bg-1-2"></div>
                <div id="bg-1-3"></div>
                <div id="bg-1-4"></div>
                <div id="bg-1-5"></div>
            </div>
        </div>
        </>
    )
}
