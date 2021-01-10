export default function SearchComponent (props) {
  
  return (
    <div>
      🔍 <input type="search" placeholder="Find your new favorite!" value={props.searchQuery} onChange={(e) => props.handleChange(e)}></input>
    </div>
  )
}