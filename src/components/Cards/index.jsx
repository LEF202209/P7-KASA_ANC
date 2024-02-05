// import datas from '../../datas/datas.js'
// import Item from '../Item'

// function Cards() {
//     <div>
//         {datas.map(data => {
//             return ( 
              
//             <Item 
//             key={data.id}
//             id={data.id}
//             title={data.title}
//             cover={data.cover}
//          />
//         )}
//         )}
//     </div>
// }
// export default Cards

import React from 'react';
import datas from '../../datas/datas.js';
import Item from '../Item';
import '../../styles/Cards.css';
import Banner from '../../components/Banner';


function Cards() {
  return (
    <main className='Container'>
      <Banner/>
      <section className="Cards" >
        {datas.map(data => (
          <Item 
            key={data.id}
            id={data.id}
            title={data.title}
            cover={data.cover}
          />
        ))}
      </section>
    </main>
  );
}

export default Cards;



