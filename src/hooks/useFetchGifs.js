import { useEffect, useState } from 'react';
import getGifs from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    //el useState esta vez sera un literal object
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect( () => {
        
        getGifs( category )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false,
                });
            });

    }, [ category ]);
    
    return state; //Solamente devuelve un arreglo vacio

}
