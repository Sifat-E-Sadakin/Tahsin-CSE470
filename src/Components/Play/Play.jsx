import { useEffect, useState } from 'react';
import { getShoppingCart, removeFromDb } from '../utilities/LocalStorage';

const Play = () => {


   


    let [podcast, setPodCast] = useState();

    useEffect(()=>{
        fetch('/data.json')
        .then(res=> res.json())
        .then(data=> configData(data))

        let configData =(data)=>{
            let selectedID;
            let selectedPodcast = getShoppingCart();

            // console.log(data);

            for (const iterator in selectedPodcast) {
                selectedID= iterator;
                
           let p=  data.find(i => i.id == selectedID);
           console.log(p);
           setPodCast(p)

                removeFromDb(iterator)
            }
            


    

        }
    },[])
 
    console.log(podcast);


    return (
        <div className='my-5'>
            <h1 className='text-2xl'>Now Playing <span className='text-3xl'> {podcast && podcast.title}</span> by <small>{podcast && podcast.host}</small> </h1>
            <div className='flex justify-center my'>
            <iframe width="840" height="472" src={podcast && podcast.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>
            
        </div>
    );
};

export default Play;