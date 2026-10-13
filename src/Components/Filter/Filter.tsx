import './Filter.css'
import { FilterProps } from '../../interface';

const Filter = ({ setFilteredValue }:FilterProps) => {
    return (
    <div className="filter">
        <label htmlFor="favourites"> Favourites </label>
        <select id="favourites"  onChange={(e) => setFilteredValue(e.target.value)}> 
            <option value="any"> Any </option>
            <option value="favourite"> Favourite </option>
            <option value="not favourite"> Not Favourite </option>
        </select>
    </div>
    )
}

export default Filter;