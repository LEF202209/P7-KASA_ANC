/**************************************************************************/
/**********            components/card index.js                   *******/
/**************************************************************************/

import { Link } from 'react-router-dom'
import '../../styles/Item.css';

export default function Item({id, title, cover}) {
	return (
			<Link to={`/accomodation/${id}`} className="item_container">
				<img src={cover} alt={title} />
				<h2>{title}</h2>	
			</Link>
	)
}
