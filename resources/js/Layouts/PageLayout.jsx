import { Head } from "@inertiajs/react"
import "@/styles/global.css"

function Page({title, children})
{
    const component = 
    <div className="body">
        <Head>
            <title>{title}</title>
        </Head>

        <main>{children}</main>

    </div>

    return component
}

export default Page