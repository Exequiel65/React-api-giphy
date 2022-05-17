import React from 'react';
import Usefetchgif from '../hooks/useFetchGif';
import Gifgriditem from './GifGridItem';

const Gifgrid = ({category}) => {
    
    const {data: images, loading} = Usefetchgif(category)
    return (
        <>
            <h3>{category}</h3>
            {
                loading && <p>Cargando.....</p>
            }
            <div className='row'>
                {
                    images.map(image => (
                        <Gifgriditem key={image.id} {...image} />
                    ))
                }


            </div>
        </>
    );
}

export default Gifgrid;
