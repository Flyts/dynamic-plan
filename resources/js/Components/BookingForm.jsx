import { bookingStore } from "@/stores/bookingStore"
import { bureauStore } from "@/stores/bureauStore"
import "@/styles/components/bookingForm.css"
import { useRef, useState } from "react"
import { BiLoaderAlt } from "react-icons/bi"
import {CgClose} from "react-icons/cg"

function BookingForm()
{
    async function  handleBooking(e)
    {
        e.stopPropagation()
        e.preventDefault()

        let form

        if(e.target.parentNode.form) form = e.target.parentNode.form
        else form = e.target.form

        setLoader(true)
        setMessageError(null)

        try 
        {
            const booking = await axios.post(
                route("office.reserver"), 
                {
                    nom:    form["Nom"].value,
                    prenom: form["Prenom"].value,
                    sexe:   form["Sexe"].value,
                    email:  form["Email"].value,
                    tel:    form["Tel"].value,
                    code:   office.code
                }
            )
            
            let myOffice = office
                myOffice.booking = [...myOffice.booking, booking.data.result]

            updateOffice(myOffice)
            setBookOfficeMessage(booking.data.message)
            setLoader(false)
            setBookingShowForm(false)
        } catch(error) {
            if(error.request.status === 407) 
            {
                setMessageError(error.response.data.message) 
                content_inputs.current.scrollTop = 0 
            }

            if(error.request.status === 403)
            {
                const response = error.response.data.result
    
                if(response) setErrors([JSON.parse(response)])
            }

            setLoader(false)
        }
    }

    function handleCloseForm()
    {
        setBookingShowForm(false)
    }

    const {
        bookingShowForm, setBookingShowForm,
        setBookOfficeMessage
    } = bookingStore(state => state),
    {
        office, updateOffice,
        setOfficeLoader
    } = bureauStore(state => state)

    const [loader, setLoader] = useState(false),
          [errors, setErrors] = useState([]),
          [messageError, setMessageError] = useState(null)

    const content_inputs = useRef()

    const component = 
    <div className={`Form ${bookingShowForm? "ShowForm" : null}`}>
        <div className="top">
            <h4>
                Réservation
                <span>{`${office["categorie"]["name"]} - ${office["name"]}`}</span>
            </h4>

            <CgClose onClick={handleCloseForm} className="icon"/>
        </div>

        <form>
            <div className="inputs" ref={content_inputs}>
                {
                    messageError ?
                        <div className="message_error">
                            {messageError}
                        </div>
                    : null
                }

                <div className="input">
                    <label htmlFor="Nom">Nom</label>
                    <input type="text" id="Nom" placeholder="ex: Doe"/>

                    {
                        errors.length && errors[0]["nom"]
                        ?
                            <span className="error">{errors[0]["nom"][0]}</span>
                        : null
                    }
                </div>

                <div className="input">
                    <label htmlFor="Prenom">Prenom</label>
                    <input type="text" id="Prenom" placeholder="ex: John"/>

                    {
                        errors.length && errors[0]["prenom"]
                        ?
                            <span className="error">{errors[0]["prenom"][0]}</span>
                        : null
                    }
                </div>

                <div className="input">
                    <label htmlFor="Sexe">Sexe</label>
                    <select id="Sexe">
                        <option selected disabled>Veillez indiquer votre sexe</option>
                        <option value={"homme"}>Homme</option>
                        <option value={"femme"}>Femme</option>
                    </select>

                    {
                        errors.length && errors[0]["sexe"]
                        ?
                            <span className="error">{errors[0]["sexe"][0]}</span>
                        : null
                    }
                </div>

                <div className="input">
                    <label htmlFor="Email">Adresse mail</label>
                    <input type="email" id="Email" placeholder="ex: johndoe@gmail.com"/>

                    {
                        errors.length && errors[0]["email"]
                        ?
                            <span className="error">{errors[0]["email"][0]}</span>
                        : null
                    }
                </div>

                <div className="input">
                    <label htmlFor="Tel">Numéro de téléphone</label>
                    <input type="tel" id="Tel" placeholder="ex: 821 234 567"/>

                    {
                        errors.length && errors[0]["tel"]
                        ?
                            <span className="error">{errors[0]["tel"][0]}</span>
                        : null
                    }
                </div>
            </div>

            <div className="btns">
                <button  
                    type="button"
                    onClick={!loader ? (e) => handleBooking(e) : null} 
                >
                    <span>Reserver</span>

                    {
                        loader
                        ?
                            <BiLoaderAlt className={"icon"}/>
                        : null
                    }
                </button>
            </div>
        </form>
    </div>

    return component
}

export default BookingForm