import datas from '../../datas/datas.js'
import Item from '../Item'

function Cards() {
    <div>
        {datas.map(data => {
            console.log (data.title)
            return ( 
              
            <Item 
            key={data.id}
            id={data.id}
            title={data.title}
            cover={data.cover}
         />
        )}
        )}
    </div>
}
export default Cards



