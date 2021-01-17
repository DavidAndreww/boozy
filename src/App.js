import { useState, useEffect } from 'react'
import SearchComponent from './components/SearchComponent'
import DrinkCard from './components/DrinkCard'

export const App = () => {
  const [drinkList, setDrinkList] = useState([])
  const [isSearchView, setIsSearchView] = useState(true)
  const [favorites, setFavorite] = useState([])
  const [queryString, setQueryString] = useState('')

  useEffect(() => {
    queryString.length !== 0 ? getDrinks(queryString) : setDrinkList([])
  }, [queryString])

  const handleInputChange = (e) => {
    setQueryString(e.target.value)
  }

  const toggleView = () => {
    setIsSearchView(!isSearchView)
  }

  const saveFav = (id) => {
    let savedDrink = drinkList.find(drink => drink.idDrink === id)
    let doesExist = favorites.find(drink => drink.idDrink === id)
    if (!doesExist) {
      console.log('add the drink')
      setFavorite([...favorites, savedDrink])
    } else {
      console.log('alrady exists!')
    }
  }

  const removeFav = (id) => {
    let remainingDrinks = favorites.filter(drink => drink.idDrink !== id)
    setFavorite(remainingDrinks)
  }
  

  function getDrinks (drinkName) {
    console.log('fetchCall',drinkName)
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
    .then(res => res.json())
    .then(json => json.drinks ? setDrinkList(json.drinks) : setDrinkList([]))
    .then(() => console.log('drink list::', drinkList))
  }

  
  
  return (
    <div>
      <h1 id="title">Get Boozy🍸</h1>
      <SearchComponent handleInputChange={handleInputChange} toggleView={toggleView} isSearchView={isSearchView} />
      <div id="card-display">

        {isSearchView ? 
        
          drinkList.length > 0 ? drinkList.map((drink) => (
            <DrinkCard 
            key={drink.idDrink}
            drink={drink}
            saveFav={saveFav}
            isSearchView={isSearchView}
            />
          )) : <p style={{color: 'white'}}>No Matches</p> :
          favorites.length > 0 ? favorites.map((drink) => (
            <DrinkCard 
            key={drink.idDrink}
            drink={drink}
            removeFav={removeFav}
            isSearchView={isSearchView}
            /> 
          )) : 
          <div>No favorites selected</div>
        }
        
      </div>
    </div>
  )
}
