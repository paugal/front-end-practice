import './Accordion.css'



const webData = [
    {
        title: 'HTML',
        description: `The HyperText Markup Language or HTML is the standard
         markup language for documents designed to be displayed in a 
         web browser.`
    },
    {
        title: 'CSS',
        description: `Cascading Style Sheets is a style sheet language 
        used for describing the presentation of a document written 
        in a markup language such as HTML or XML.`
    },
    {
        title: 'JavaScript',
        description: `JavaScript, often abbreviated as JS, is a
        programming language that is one of the core
        technologies of the World Wide Web, alongside HTML
        and CSS.`
    }
];

export default function Accordion() {

   

    const changeAccordionState = () => {
        console.log("hola")
    }

    return (
        <div className='accordion-card'>
            {webData.map((item, index) => {
                return(
                <div key={item.title}>
                    <div onClick={changeAccordionState}>
                        {item.title}{' '}
                        <span
                            aria-hidden={true}
                            className="accordion-icon"
                            onClick={changeAccordionState}
                        />
                    </div>
                    <div className='divider'/>
                    <div>
                        {item.description}
                    </div>
                </div>

            )})}
        </div>
    );
}
