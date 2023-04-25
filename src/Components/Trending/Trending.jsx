import { } from 'react';
import { Link } from 'react-router-dom';

const Trending = (props) => {

    console.log(props.data);

    let {title, link, photo, description, id}= props.data

    console.log(link);

  let addToPlay = props.addToPlay

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={()=> addToPlay(id)} ><Link to={`/play/${id}`}>Play Now</Link></button>
                    </div>
                </div>
            </div>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/VYDdvW-nN9k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
            
            {/* {link &&   <iframe width="560" height="315" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>} */}

        </div>
    );
};

export default Trending;