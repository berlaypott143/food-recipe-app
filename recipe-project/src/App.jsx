import { useEffect, useState } from 'react'
import Recipe from './Components/Recipe';
import './App.css'

function App() {

  const AppId = 'b9a12d47';
  const Appkey = 'b9a5ec8c6a3751d5d515fcef821187af';

  const [recipes, setRecipes] = useState([]);

  useEffect( () => {
    getRecipes();
  }, []);
  
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=inasal&app_id=${AppId}&app_key=${Appkey}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  return(
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' type="text" placeholder='what food you want' />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe />
      ))};
    </div>
  );
}

export default App
