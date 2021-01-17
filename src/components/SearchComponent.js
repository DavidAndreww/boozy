export default function SearchComponent (props) {
  let buttonText = props.isSearchView ? 'Favorites' : 'Search'

  return (
    <div>
      <span>🔍</span> <input type="search" placeholder="Find your new favorite!" value={props.queryString} onChange={(e) => props.handleInputChange(e)}></input>
      <button onClick={props.toggleView}>{buttonText}</button>
    </div>
  )
}