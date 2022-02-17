import React from 'react';
import VehicleDetails from './CharacterDetails';
import Spinner from '../page_components/Spinner';


const Character = ({ items, isLoading }) => {
    return isLoading ? (
        <Spinner />
    ) : (
        <section className='cards'>
            {items.map((item) => (
                <VehicleDetails key={item.id} item={item}></VehicleDetails>
            ))}
        </section> 
    );
};


export default Character;