import '../../styles/Accomodation.css';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Carousel from '../../components/Slideshow';
import datas from '../../datas/datas';
import Error from '../ErrorPage';
import starEmpty from '../../assets/star_empty.png';
import starFull from '../../assets/star_full.png';
import Collapse from '../../components/Collapse';


export default function Accomodation () {
    const [imageViews, setImageViews] = useState([]);
    /* extraction la valeur du paramètre id de l'URL actuelle */
    const {id} = useParams();
    /* filtre les élts du tableau datas et ne récupérer que la data */
    /* qui a identifiant= contenu variable id. */
    /* stocke le résultat dans la variable dataCurrent */
    const dataCurrent = datas.filter(data => data.id ===id) 
    
    
    /*utilisation "useEffect"  pour mise à jour */
    /* de la variable d'état imageViews */
    /* à chq chgt de la valeur id ou dataCurrent. */
    /* Si id existe &  correspondance trouvé dans dataCurrent */
    /*nvelle valeur imagesView = ppté pictures de dataCurrent */
    useEffect(() => {if (dataCurrent.length>0)
         {setImageViews(dataCurrent[0].pictures);}},
     [id,dataCurrent]);
 /* si id n'existe pas renvoyer page d'erreur 404 ***/
 /***************************************************/
    //  if (! dataCurrent) { 
        if (dataCurrent.length === 0) {  
            return <Error />
        } 
    /* rating_user */
    const rating = dataCurrent[0].rating
    /*données collapse */
    const equipment_list = dataCurrent[0].equipments.map(
         (equipment, index) => ( <p key={"equip-"+index} >{equipment}</p>)
        // (equipment, index) => ( <p key={index} >{equipment}</p>)
        )
    return (
        <div>
            <Header/>
            <main className="container accomodation_container">
                <Carousel views={imageViews}/>
                <section className="accomodation">
                    <div className="accomodation_infos">
                        <div className ="accomodation_infos_title_location">
                            <div className ="accomodation_infos_title">{dataCurrent[0].title}</div>
                            <h1 className ="accomodation_infos_location">{dataCurrent[0].location}</h1>
                            <div className ="accomodation_infos_tag">
                            {dataCurrent[0].tags.map((tag, index) => (
                                <div key={"tag-"+index} className="accomodation_infos_tag_button_container">
                                    <span className = "accomodation_infos_tag_button">{tag}</span>
                                </div>
                                ))
                            }
                            </div>
                        </div>
                        <div className="accomodation_hosts">
                            <div className="accomodation_hosts_details">
                                <img src={dataCurrent[0].host.picture} alt={dataCurrent[0].host.name}
                                className="accomodation_hosts_profile_picture" />
                                <div>
                                    <p className="accomodation_hosts_profile_name">{dataCurrent[0].host.name} </p>    
                                </div>
                            </div>
							<div className="accomodation_hosts_container_stars">
                                {(() => {
                                    const starElements = [];
                                    for (let index = 0; index < 5; index++) {
                                        const ratingValue = index + 1;
                                        starElements.push(
                                    <img key={"star-"+index} src={ratingValue <= rating ? starFull : starEmpty} alt="star" className="accomodation_host_stars" />
                                    );
                                    }
                                return starElements;
                                })()}
                            </div>
						</div>
                    </div>
                    <div className="accomodation_collapse">
                        <div className="accomodation_collapse_item"> 
                            <Collapse title ={'Description'} 
                            content={dataCurrent[0].description } 
                            collapseDirection={"row"}/>
                        </div>
                        <div className="accomodation_collapse_item"> 
                            <Collapse title="Equipements" 
                            content={equipment_list}
                            collapseDirection={"row"} 
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
            </div>
    )
}