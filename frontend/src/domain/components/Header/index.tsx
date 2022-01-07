import {MdSearch} from "react-icons/md";
import {Categories} from "./Categories";


export function Header()  {
    return (
        <div>
            <h2>AMALTEIA</h2>
            <div>
                <MdSearch />
                <input />
            </div>
           <Categories />
        </div>
    )
}