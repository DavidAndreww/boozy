export default function DrinkCard (props) {

  const handleClick = (e) => {
    console.log(e)
  }

  return (
    <div className="drink-card">
      <h2>{props.drink.strDrink}</h2>
      <img src={props.drink.strDrinkThumb + '/preview'} alt={props.drink.strDrink}></img>
      
      {props.isSearchView 
      ? <button onClick={() => props.saveFav(props.drink.idDrink)}>Save</button> 
      : <button onClick={() => props.removeFav(props.drink.idDrink)}>Remove</button>}

    </div>
  )
}