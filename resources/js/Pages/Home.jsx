import ModalBureau from "@/Components/ModalBureau"
import PlanModele1 from "@/Components/planModele1"
import Page from "@/Layouts/PageLayout"
import "@/styles/pages/home.css"

function Home()
{
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