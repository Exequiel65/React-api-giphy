import { useEffect, useState } from "react";
import Getgif from "../helpers/getGif";

const Usefetchgif = (category) => {
    
    const [state, setState] = useState({
        data : [],
        loading : true
    });

    useEffect(() => {
        Getgif(category)
        .then(gifs =>{
            setState({
                data : gifs,
                loading : false
            })
        })
        .catch(error => console.error(error))

    }, [category]);


    return state
}

export default Usefetchgif;
