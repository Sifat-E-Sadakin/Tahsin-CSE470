import { useEffect, useState } from 'react';
import './Home.css'
import {  } from 'react-router-dom';
import Trending from '../Trending/Trending';
import { addToDb } from '../utilities/LocalStorage';

const Home = () => {

    let [podcast, setPodCast] = useState();

    useEffect(()=>{
        fetch('/data.json')
        .then(res=> res.json())
        .then(data=> setPodCast(data))
    },[])

    let addToPlay = (id)=>{
        // console.log('playing', id);
        // let playing =  podcast.find(pId => pId.id == id)
        // console.log(playing);
        // addToDb(id)
      }
    

    

    return (
        <div>
            <div className='bg-cover bg-no-repeat cover  ' >
            <div className=" lg:pl-24  py-56">
                <h1 className=" text-white font-bold text-5xl pb-3 " >Podcast presented <br></br> by Hello Bangladesh</h1>
                <p className="text-white pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>  Soluta ipsa earum repudiandae facere? <br></br> Placeat quibusdam est voluptas voluptates fugiat dolor?</p>
                <button className=" bg-blue-700  rounded text-white p-3">Listen Now <i className="fa-regular fa-circle-play"></i></button>

            </div>

            </div>

            <h1 className='text-center text-4xl m-5'>Trending Now {}</h1>

            <div className='grid grid-cols-3  justify-center gap-8'>

            {podcast &&
                    podcast.map(p=> <Trending data={p} key={p} addToPlay={addToPlay}></Trending>)
                }

           

            </div>

           
            
        </div>
    );
};

export default Home;