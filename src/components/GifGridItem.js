import React from 'react';

const Gifgriditem = ({ title, url }) => {
    return (
        <div className='col-12 col-md-4 col-lg-3'>
            <div className='card'>
                <img src={url} className='card-img-top' alt={title} />
                <div className='card-body'>
                    <h5 className='card-title'>{title}</h5>
                </div>
            </div>
        </div>
    );
}

export default Gifgriditem;
