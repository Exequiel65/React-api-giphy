
import { useState } from 'react';
import './App.css';
import Addcategory from './components/AddCategory';
import Gifgrid from './components/GifGrid';

function App() {

  const [categories, setCategories] = useState([]);
  
  return (
    <div className="container">
      <h1 className='my-4'>Giphy Comision 12</h1>
      <hr/>
      <Addcategory setCategories={setCategories}/>

      <ul>
        {
          categories.map((category, index) => (
            <Gifgrid key={index} category={category} />
          ))
        }
      </ul>
    </div>
  );
}

export default App;
