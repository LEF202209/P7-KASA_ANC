import React from 'react';
import datas from '../../datas/datas.js';
import Item from '../Item';
import Banner from '../../components/Banner';
import '../../styles/Cards.css';


function Cards() {
  return (
    <main className='container cards_container'>
      <Banner/>
      <section className="cards" >
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



