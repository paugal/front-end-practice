import React from 'react'
import { useState } from 'react';
import './Accordion.css'

export default function AccordionItem({ item, key }) {
    const [showContent, setShowContent] = useState(false);

    const changeAccordionState = () => {
        setShowContent(!showContent);
    }

    const mountedStyle = {
        animation: "inAnimation 250ms ease-in"
    };
    const unmountedStyle = {
        animation: "outAnimation 270ms ease-out",
        animationFillMode: "forwards"
    };

    const openIcon = {
        transform: " translateY(5px) rotate(224deg)",
        animation: "rotate 250ms ease-in"
    };

    const closeIcon = {
        transform: " translateY(0px) rotate(45deg)",
        animation: "rotate 250ms ease-in"
    };

    return (
        <div key={item.title}>
            <div onClick={changeAccordionState} className='header-item'>
                {item.title}{' '}
                <span
                    aria-hidden={true}
                    className={`accordion-icon ${showContent ? 'rotateClose' : 'rotateOpen'}`}
                    /* style={showContent ? closeIcon : openIcon} */
                    onClick={changeAccordionState}
                />
            </div>
            <div className='acccordion-item' style={{
                overflow: 'hidden',
                maxHeight: showContent ? '1000px' : '0', /* Adjust to fit your content */
                padding: showContent ? '1rem' : '0rem',
                opacity: showContent ? '1' : '0',
                transition: 'max-height 250ms ease-in-out, opacity 250ms ease-in-out, padding 250ms ease-in-out'
            }}/* style={showContent ? mountedStyle : unmountedStyle} */>

                <div className='item-description'>
                    {item.description}
                </div>
            </div>
        </div>
    )
}
