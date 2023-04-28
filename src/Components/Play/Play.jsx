import { useEffect, useState } from 'react';
import { getShoppingCart, removeFromDb } from '../utilities/LocalStorage';
import { useParams } from 'react-router-dom';

const Play = () => {

    let Pid = useParams()
  

   


    let [podcast, setPodCast] = useState();

    useEffect(()=>{
        fetch('http://localhost:3000/')
        .then(res=> res.json())
        .then(data=> configData(data))

        let configData =(data)=>{
            
           

        console.log(data);
        console.log(Pid.id,"param");

        let p = data.find(i => i.id == Pid.id)
        console.log(p);
        setPodCast(p);


           
                
          
               
            
            


    

        }
    },[])
 
    console.log(podcast);


    return (
        <div className='my-5'>
            <h1 className='text-2xl text-center my-5'>Now Playing <span className='text-3xl'> {podcast && podcast.title}</span> by <small>{podcast && podcast.host}</small> </h1>
            <div className='flex justify-center my'>
            <iframe width="840" height="472" src={podcast && podcast.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>
            
        </div>
    );
};

export default Play;