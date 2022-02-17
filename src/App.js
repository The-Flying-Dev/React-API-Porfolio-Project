import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/page_components/Header';
import Character from './components/details/Character';
import './App.css';

const App = () => {
  const [ items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');


  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://thronesapi.com/api/v2/Characters/`
      )

      console.log(result.data);

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems();
  }, [query])

  return (
    <div className="container">
      <Header />      
      <Character isLoading={isLoading} items={items} />
      
    </div>
  );
}

export default App;
