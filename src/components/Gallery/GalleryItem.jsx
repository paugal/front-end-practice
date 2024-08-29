import React, { useState, useEffect, useRef } from 'react';
import './Gallery.css'
import Accordion from '../Accordion/Accordion';

export default function GalleryItem() {
    const [showContent, setShowContent] = useState(false);
    const [isVisible, setIsVisible] = useState(false);  // Track visibility state for animations
    const elementRef = useRef(null);

    const changeShowContent = () => {
        console.log('CLICK!')
        if (showContent) {
            // Hide content with delay for animation
            setIsVisible(false);
            setTimeout(() => setShowContent(false), 300);  // Match this time with CSS transition duration
        } else {
            setShowContent(true);
            setTimeout(() => setIsVisible(true), 10);  // Slight delay to ensure rendering before animation starts
        }
    };

    const handleClickOutside = (event) => {
        if (elementRef.current && !elementRef.current.contains(event.target)) {
            changeShowContent(); 
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showContent]);

    return (
        <>
            <div onClick={changeShowContent} className='gallery-item'> Accordion </div>
            {showContent && (
                <div ref={elementRef} className={`popUpItem ${isVisible ? 'visible' : 'hidden'}`}>
                    <div className='iconCloseContainer'>
                        <span onClick={changeShowContent} className="closeIcon material-symbols-outlined">
                            close
                        </span>
                    </div>
                    <Accordion />
                </div>
            )}
        </>
    );
}

