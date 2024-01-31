/**************************************************************************/
/**********            components/collapse index.js                 *******/
/**************************************************************************/
import  { useState } from 'react';
import '../../styles/Collapse.css';
import arrow from '../../assets/down_arrow.png';

export default function Collapse({title, content}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapsible = () => {setIsOpen(!isOpen);};
    return (
            <div className='collapse_container'>
                <div className='collapse_title_container'>
                    <h3>{title}</h3>
                    <img onClick={toggleCollapsible}
                        className={isOpen ? 'arrow down_arrow' : 'arrow up_arrow'} 
                        src={arrow} 
                        alt="content" 
                    /> 
                </div>
                {isOpen && content && (
                    <div className='collapse_content_container'>
                        <div className={`${isOpen ? 'collapsible_open' : 'collapsible_close'}`}>
                            <span> {content} </span>
                        </div>
                    </div> 
                )}  
            </div>
    )
}



