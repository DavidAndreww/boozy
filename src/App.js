import { useState } from 'react'
import SearchComponent from './components/SearchComponent'
import DrinkCard from './components/DrinkCard'

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [drinkList, setDrinkList] = useState([])

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
    getDrinks(searchQuery)
  }

  const getDrinks = (drinkName) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
    .then(res => res.json())
    .then(json => setDrinkList(json.drinks))
    .then(() => console.log(drinkList))
  }

  return (
    <div>
      <h1>Let's get Boozy🍸</h1>
      <SearchComponent handleChange={handleChange} searchQuery={searchQuery} />
      <div>
        {drinkList.length > 1 && drinkList.map((drink) => (
          <DrinkCard 
          key={drink.idDrink}
          name={drink.strDrink}
          />
        ))}
      </div>
    </div>
  )
}
