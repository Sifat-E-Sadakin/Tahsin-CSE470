import { useEffect, useState } from 'react';
import { getShoppingCart, removeFromDb } from '../utilities/LocalStorage';
import ShowFav from '../ShowFav/ShowFav';
import toast, { Toaster } from 'react-hot-toast';

const Fab = () => {

    let [podcast, setPodCast] = useState();

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => configPodcast(data))


        let configPodcast = (data) => {

            let favPodcast = getShoppingCart();
            console.log(favPodcast);
            let arr = [];

            for (const iterator in favPodcast) {
                let showFavorite = data.find(pc => pc.id == iterator)
                console.log(showFavorite);
                arr.push(showFavorite)

            }
            console.log(arr);
            setPodCast(arr)
        }
    }, [])

    let unFavorite= (id)=>{
        // let heart = document.getElementById('heart');
        // heart.style.color='red';
        // console.log(id);
         removeFromDb(id);
         let favPodcast = getShoppingCart();
            console.log(favPodcast);
            let arr = [];

            for (const iterator in favPodcast) {
                let showFavorite = podcast.find(pc => pc.id == iterator)
                console.log(showFavorite);
                arr.push(showFavorite)

            }
            console.log(arr);
            setPodCast(arr);
            toast('Removed From favorite List')
    
        
      }


    return (
        <div>
            <h1>Favorite podcast {podcast && podcast.length}</h1>

            <div className='grid grid-cols-3  justify-center gap-8'>
                {podcast &&

                    podcast.map(pc => <ShowFav podcast={pc} unFavorite={unFavorite} key={pc.id} ></ShowFav>)
                }

            </div>


<Toaster></Toaster>

        </div>
    );
};

export default Fab;