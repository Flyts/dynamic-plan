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
        const data = offices.reduce((a, v) => ({...a, [v.code]: v}), {}) 
        setOffices(data)
    }, [])

    const component = 
    <Page title={"Home"}>
        {/* <h1>SILIKIN VILLAGE PHASE 3 | EXE - 36A MEUBLES RDC</h1> */}

        <main>
            <PlanModele1/>

            <ModalBureau/>
        </main>
    </Page>

    return component
}

export default Home