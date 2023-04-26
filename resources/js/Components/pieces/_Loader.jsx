import "@/styles/pieces/_loader.css"
import {BiLoaderAlt} from "react-icons/bi"

function Loader({screen}) 
{
    const component = 
    <div className={`Loader ${screen === "mobil" ? "screen" : null}`} >
        <BiLoaderAlt className={"icon"}/>
    </div>

    return component
}

export default Loader