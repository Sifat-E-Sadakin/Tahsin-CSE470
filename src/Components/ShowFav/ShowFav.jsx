import {} from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { removeFromDb } from '../utilities/LocalStorage';


const ShowFav = (props) => {

    console.log(props.podcast);

    let {title, link, photo, description, id}= props.podcast

    let addToPlay = props //addToPlay

  let unFavorite= props.unFavorite;


    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end flex items-center">
                        <button className='btn btn-warning btn-xs' onClick={()=>unFavorite(id)} id='heart'>Remove From Favorite</button>
                        <button className="btn btn-primary" onClick={()=> addToPlay(id)} ><Link to={`/play/${id}`}>Play Now</Link></button>
                    </div>
                </div>
            </div>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/VYDdvW-nN9k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
            
            {/* {link &&   <iframe width="560" height="315" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>} */}

        </div>
    );
};

export default ShowFav;