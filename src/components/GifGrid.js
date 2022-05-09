import React from 'react';
import Usefetchgif from '../hooks/useFetchGif';

const Gifgrid = ({category}) => {
    
    Usefetchgif(category)
    return (
        <>
            <h3>{category}</h3>
            {/* Aplicar loading... */}
            <div className='row'>
                {/* Aqui van las tarjetas mapeadas */}


            </div>
        </>
    );
}

export default Gifgrid;
