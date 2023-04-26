import ModalBureau from "@/Components/ModalBureau"
import PlanModele1 from "@/Components/planModele1"
import Page from "@/Layouts/PageLayout"
import { bureauStore } from "@/stores/bureauStore"
import "@/styles/pages/home.css"
import { useEffect } from "react"

function Home({offices})
{
    const {setOffices} = bureauStore(state => state)

    useEffect(() => {
        setOffices(offices)
    }, [])

    const component = 
    <Page title={"Home"}>
        <h1>Plan</h1>

        <main>
            <PlanModele1/>

            <ModalBureau/>
        </main>
    </Page>

    return component
}

export default Home