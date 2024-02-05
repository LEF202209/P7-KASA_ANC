/**************************************************************************/
/**********            components/banner index.js                   *******/
/**************************************************************************/
import '../../styles/Banner.css'
import { useEffect, useState } from 'react';// 

export default function Banner() {
	const [routeHome, setRouteHome] = useState(true);
	useEffect(() => {
		const handleLocationChange = () =>{
		(window.location.pathname === '/')?setRouteHome(true):setRouteHome(false);}
		// Appel initial pour gérer la valeur initiale
		handleLocationChange(); 
		// Écouteur pour gérer les changements d'URL
    	window.addEventListener('popstate', handleLocationChange); 
    	return () => {
			// Nettoyage de l'écouteur lors du démontage du composant
      		window.removeEventListener('popstate', handleLocationChange); 
    		};
		}, []);
	  /****/
	console.log("currentRoute = "+routeHome)
	
	return (
		<section className={`banner ${routeHome?'banner_home':'banner_about'}`}>
			{/* <section className={`banner${routeHome ? '' : ' banner_about'} Container`}></section> */}
			{routeHome? <h1>Chez vous, partout et ailleurs</h1> : null}
		</section>
	)
}