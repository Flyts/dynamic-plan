import "@/styles/components/modalBureau.css"
import { bureauStore } from "@/stores/bureauStore"
import {GrFormClose} from "react-icons/gr"
import {BsSnow, BsPlug} from "react-icons/bs"
import {TiWiFi} from "react-icons/ti"
import {MdOutlineChair} from "react-icons/md"
import Loader from "./pieces/_Loader"
import axios from "axios"
import { useState } from "react"
import {BiLoaderAlt} from "react-icons/bi"

function ModalBureau()
{
    async function handleBookOffice(code)
    {
        setLoader(true)
        try {
            const reserver = await axios.post(route("office.reserver"), {code})

            setOffices(reserver.data.result)
            setBookOfficeMessage(reserver.data.message)
            setLoader(false)
            setOfficeStatus(false)
            resetOffice()
        } catch (error) {
            console.error(error)
            setLoader(false)
        }
    }

    function handleCloseModal()
    {
        setOfficeStatus(false)
        resetOffice()
    }

    const { 
        officeStatus, setOfficeStatus,
        office, resetOffice,
        officeLoader,
        setOffices,
        setBookOfficeMessage
    } = bureauStore(state => state)

    const [loader, setLoader] = useState(false)

    const component = 
    <div className={`Modal ${officeStatus ? "ActiveModal" : null}`}>
        {
            office ?
                <div className="bloc">
                    {/* <div className="top">
                        <h4>{selectedOffice}</h4>

                        <GrFormClose className="close" onClick={handleCloseModal}/>
                    </div> */}
                    {
                        !officeLoader
                        ?
                            <>
                                <div className="img">
                                    <img src={office.img} alt={office.name}/>
                                </div>

                                <div className="text_btn">
                                    <div className="texts">
                                        <h4>{office.name}</h4>
                                        <p>{office.description}</p>
                                        <div className="icons">
                                            <BsPlug className="icon" title={"inclus : Électricité"}/>
                                            <TiWiFi className="icon" title={"inclus : Connexion internet"}/>
                                            <BsSnow className="icon" title={"inclus : Climatisation"}/>
                                            <MdOutlineChair className="icon" title={"inclus : Mobilier"}/>
                                        </div>
                                    </div>
                                    <div className="buttons">
                                        <button onClick={handleCloseModal}>Annuler</button>
                                        {
                                            office.status == 0
                                            ?
                                                <button onClick={!loader ? () => handleBookOffice(office.code) : null}>
                                                    <span>Réserver</span>
                                                    {
                                                        
                                                        loader
                                                        ?
                                                            <BiLoaderAlt className={"icon"}/>
                                                        :
                                                            null
                                                    }
                                                </button>
                                            : `Le ${office.name} est occupé`
                                        }
                                    </div>  
                                </div>
                            </>
                        :
                            <Loader/>
                    }
                </div>
            : null
        }

        <button className="filter" onClick={handleCloseModal}></button>
    </div>

    return component
}

export default ModalBureau