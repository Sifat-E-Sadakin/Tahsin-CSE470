import { } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { addToDb } from '../utilities/LocalStorage';
import toast, { Toaster } from 'react-hot-toast';

const Trending = (props) => {

    console.log(props.data);

    let {title, link, photo, description, id}= props.data

    console.log(link);

  let addToPlay = props.addToPlay

  let favorite= (id)=>{
    let heart = document.getElementById('heart');
    heart.style.color='red';
    console.log(id);
    addToDb(id);
    toast('Added in Favorite List')

    
  }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end flex items-center">
                    <button className='btn btn-warning btn-xs' onClick={()=>favorite(id)} id='heart'>add to favorite</button>
                        <button className="btn btn-primary" onClick={()=> addToPlay(id)} ><Link to={`/play/${id}`}>Play Now</Link></button>
                    </div>
                </div>
            </div>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/VYDdvW-nN9k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
            
            {/* {link &&   <iframe width="560" height="315" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>} */}
<Toaster></Toaster>
        </div>
    );
};

export default Trending;