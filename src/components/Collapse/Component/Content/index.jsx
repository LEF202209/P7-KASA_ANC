import React from 'react';
import '../../../../styles/Collapse.css'

function Description({isOpen, content,collapseDirection}) {
  return (
     <div className={`${isOpen ? `collapsible_open ${(collapseDirection==='row')?'container_row':''}` : 'collapsible_close'}`}>
          <p className={`${(collapseDirection==='row')?'collapse_row':''}`}>
             {content} 
        </p>
     </div> 
  )
}


export default Description;