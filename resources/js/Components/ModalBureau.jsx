import "@/styles/components/modalBureau.css"
import { bureauStore } from "@/stores/bureauStore"
import {GrFormClose} from "react-icons/gr"

function ModalBureau()
{
    function handleCloseModal()
    {
        setBureauStatus(false)
    }

    const {selectedBureau, bureauStatus, setBureauStatus} = bureauStore(state => state)

    const component = 
    <div className={`Modal ${bureauStatus ? "ActiveModal" : null}`}>
        <div className="bloc">
            <div className="top">
                <h4>{selectedBureau}</h4>

                <GrFormClose className="close" onClick={handleCloseModal}/>
            </div>

            <div className=""></div>

            <div className="bottom">
                <button>Louer</button>
            </div>
        </div>

        <button className="filter" onClick={handleCloseModal}></button>
    </div>

    return component
}

export default ModalBureau