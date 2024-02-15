/**************************************************************************/
/**********            components/collapse index.js                 *******/
/**************************************************************************/
import  { useState } from 'react';
import '../../styles/Collapse.css';
import arrow from '../../assets/down_arrow.png';
import Content from '../../components/Collapse/Component/Content';

export default function Collapse({title, content,collapseDirection}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapsible = () => {setIsOpen(!isOpen);};
    return (
            <div className={`collapse_container ${collapseDirection}`}>
                <div className='collapse_title_container'onClick={toggleCollapsible}>
                    <h3>{title}</h3>
                    <img onClick={toggleCollapsible}
                        className={isOpen ? 'arrow down_arrow' : 'arrow up_arrow'} 
                        src={arrow} 
                        alt="content" 
                    /> 
                </div>
                {isOpen && content && (
                    <Content className = {`collapse_content_container`}
                    isOpen = {isOpen}
                    content = {content}
                    collapseDirection = {collapseDirection}
                     />
                )}  
            </div>
    )
}



