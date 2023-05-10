import "@/styles/components/modalBureau.css"
import { bureauStore } from "@/stores/bureauStore"
import {BsSnow, BsPlug} from "react-icons/bs"
import {TiWiFi} from "react-icons/ti"
import {MdOutlineChair} from "react-icons/md"
import Loader from "./pieces/_Loader"
import { useState } from "react"
import {BiLoaderAlt} from "react-icons/bi"
import {TbUser, TbUsers} from "react-icons/tb"
import BookingForm from "./BookingForm"
import { bookingStore } from "@/stores/bookingStore"

function ModalBureau()
{
    async function handleBookOffice(code)
    {
        setBookingShowForm(true)
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

    const {bookingShowForm, setBookingShowForm} = bookingStore(state => state)

    const [loader, setLoader] = useState(false)

    const component = 
    <div className={`Modal ${officeStatus ? "ActiveModal" : null}`}>
        {
            office ?
                <div className="bloc">
                    {
                        !officeLoader
                        ?
                            <>
                                <div className="img">
                                    <img src={office.img} alt={office.name}/>
                                </div>

                                <div className="text_btn">
                                    <div className="texts">
                                        <h4>{`${office.categorie.name} | ${office.name}`}</h4>

                                        <p>{office.description}</p>

                                        <div className={`icons ${!office.booking.length ? "center" : null}`}>
                                            <div className="office_icon">
                                                <BsPlug className="icon" title={"inclus : Électricité"}/>
                                                <TiWiFi className="icon" title={"inclus : Connexion internet"}/>
                                                <BsSnow className="icon" title={"inclus : Climatisation"}/>
                                                <MdOutlineChair className="icon" title={"inclus : Mobilier"}/>
                                            </div>

                                            {
                                                office.booking.length
                                                ?
                                                    <div className={`booking`}>
                                                        <span>{`${office.booking.length} réservation${office.booking.length > 1 ? "s" : ""}`}</span>
                                                        {
                                                            office.booking.length > 1 
                                                            ?
                                                                <TbUsers className="icon" title={`${office.booking.length} personnes ont réservées ${office.categorie.name+" - "+office.name}`}/>
                                                            :
                                                                <TbUser className="icon" title={`${office.booking.length} personne a réservée ${office.categorie.name+" - "+office.name}`}/>
                                                        }

                                                    </div>
                                                :null
                                            }
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
                                            : `Est déjà occupé`
                                        }
                                    </div>  
                                </div>
                            </>
                        :
                            <Loader/>
                    }

                    {
                        bookingShowForm 
                        ?
                            <BookingForm/>
                        :
                        null
                    }
                </div>
            : null
        }

        <button className="filter" onClick={handleCloseModal}></button>
    </div>

    return component
}

export default ModalBureau