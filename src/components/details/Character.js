import React, { useState } from 'react';
import CharacterDetails from './CharacterDetails';
import Spinner from '../page_components/Spinner';




const Character = ({ items, isLoading }) => {

    const [visible, setVisible] = useState(4);

    const showMoreItems = () => {
        setVisible((preValue) => preValue + 4);
    }

    return isLoading ? (
        <Spinner />
    ) : (
        <section className='cards'>
            {items.slice(0, visible).map((item) => (
                <CharacterDetails key={item.id} item={item}></CharacterDetails>
            ))}
          <button onClick={showMoreItems} className='btn'>Show More</button>
        </section> 
    );
};


export default Character;