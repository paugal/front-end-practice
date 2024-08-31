import './Accordion.css'

import AccordionItem from './AccordionItem';
import webData from './AccordionData.json';

export default function Accordion() {
    return (
        <div className='accordion-card'>
            <h1>PROGRAMMING LANGUAGES</h1>
            {webData.map((item, index) => (
                <AccordionItem item={item} key={index} />
            ))}
        </div>
    );
}

