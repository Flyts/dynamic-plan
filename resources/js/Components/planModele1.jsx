
import { bureauStore } from "@/stores/bureauStore"
import "@/styles/components/planModele1.css"

function PlanModele1()
{
    function handleSelectBureau(e, name)
    {
        // e.target.parentNode.classList.add("active")
        setSelectedBureau(name)
        setBureauStatus(true)
    }

    const {setSelectedBureau, setBureauStatus} = bureauStore(state => state)

    const component = 
    <div className="Plan">
        <svg id="Plan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 514.06 231.15">
            <g id="G_salle_1">
            <g id="B_30" className="bureau" onClick={(e) => handleSelectBureau(e, "B_30")}>
                <title>Bureau 30 - salle 1</title>
                <rect className="cls-1" x="437.73" y="178.82" width="19.96" height="37.89"/>
                <rect className="cls-2" x="458.36" y="188.56" width="4.61" height="2"/>
                <rect className="cls-2" x="458.36" y="191.56" width="7.59" height="1.01"/>
                <polygon className="cls-2" points="458.4 203.54 458.4 202.57 465.95 202.58 465.95 203.54 458.4 203.54"/>
                <rect className="cls-2" x="458.4" y="204.56" width="4.58" height="2.01"/>
                <polygon className="cls-2" points="465.95 192.42 465.95 202.58 464.97 202.57 464.97 192.57 465.95 192.42"/>
                <rect className="cls-2" x="462.98" y="192.42" width="0.99" height="10.28"/>
                <rect className="cls-2" x="460.95" y="192.42" width="1.03" height="10.28"/>
            </g>
            <g id="B_29" className="bureau" onClick={(e) => handleSelectBureau(e, "B_29")}>
                <title>Bureau 29 - salle 1</title>
                <rect className="cls-1" x="437.73" y="139.69" width="19.96" height="37.89"/>
                <rect className="cls-2" x="458.36" y="149.68" width="4.61" height="2"/>
                <rect className="cls-2" x="458.36" y="152.68" width="7.59" height="1.01"/>
                <polygon className="cls-2" points="458.4 164.66 458.4 163.69 465.95 163.7 465.95 164.66 458.4 164.66"/>
                <rect className="cls-2" x="458.4" y="165.68" width="4.58" height="2.01"/>
                <polygon className="cls-2" points="465.95 153.54 465.95 163.7 464.97 163.69 464.97 153.69 465.95 153.54"/>
                <rect className="cls-2" x="462.98" y="153.54" width="0.99" height="10.28"/>
                <rect className="cls-2" x="460.95" y="153.54" width="1.03" height="10.28"/>
            </g>
            <g id="B_28" className="bureau" onClick={(e) => handleSelectBureau(e, "B_28")}>
                <title>Bureau 28 - salle 1</title>
                <rect className="cls-1" x="437.73" y="100.67" width="19.96" height="37.89"/>
                <rect className="cls-2" x="458.36" y="110.66" width="4.61" height="2"/>
                <rect className="cls-2" x="458.36" y="113.66" width="7.59" height="1.01"/>
                <polygon className="cls-2" points="458.4 125.64 458.4 124.67 465.95 124.68 465.95 125.64 458.4 125.64"/>
                <rect className="cls-2" x="458.4" y="126.66" width="4.58" height="2.01"/>
                <polygon className="cls-2" points="465.95 114.52 465.95 124.68 464.97 124.67 464.97 114.66 465.95 114.52"/>
                <rect className="cls-2" x="462.98" y="114.52" width="0.99" height="10.28"/>
                <rect className="cls-2" x="460.95" y="114.52" width="1.03" height="10.28"/>
            </g>
            <g id="B_27" className="bureau" onClick={(e) => handleSelectBureau(e, "B_27")}>
                <title>Bureau 27 - salle 1</title>
                <rect className="cls-1" x="416.43" y="178.82" width="19.96" height="37.89"/>
                <rect className="cls-2" x="411.34" y="204.72" width="4.61" height="2"/>
                <rect className="cls-2" x="408.35" y="202.72" width="7.59" height="1.01"/>
                <polygon className="cls-2" points="415.91 191.74 415.91 192.71 408.35 192.7 408.35 191.74 415.91 191.74"/>
                <rect className="cls-2" x="411.33" y="188.71" width="4.58" height="2.01"/>
                <polygon className="cls-2" points="408.35 202.86 408.35 192.7 409.34 192.71 409.34 202.72 408.35 202.86"/>
                <rect className="cls-2" x="410.33" y="192.58" width="0.99" height="10.28"/>
                <rect className="cls-2" x="412.34" y="192.58" width="1.03" height="10.28"/>
            </g>
            <g id="B_26" className="bureau" onClick={(e) => handleSelectBureau(e, "B_26")}>
                <title>Bureau 26 - salle 1</title>
                <rect className="cls-1" x="416.43" y="139.73" width="19.96" height="37.89"/>
                <rect className="cls-2" x="411.34" y="165.63" width="4.61" height="2"/>
                <rect className="cls-2" x="408.35" y="163.63" width="7.59" height="1.01"/>
                <polygon className="cls-2" points="415.91 152.66 415.91 153.63 408.35 153.61 408.35 152.66 415.91 152.66"/>
                <rect className="cls-2" x="411.33" y="149.62" width="4.58" height="2.01"/>
                <polygon className="cls-2" points="408.35 163.78 408.35 153.61 409.34 153.63 409.34 163.63 408.35 163.78"/>
                <rect className="cls-2" x="410.33" y="153.5" width="0.99" height="10.28"/>
                <rect className="cls-2" x="412.34" y="153.5" width="1.03" height="10.28"/>
            </g>
            <g id="B_25" className="bureau" onClick={(e) => handleSelectBureau(e, "B_25")}>
                <title>Bureau 25 - salle 1</title>
                <rect className="cls-1" x="416.41" y="100.65" width="19.96" height="37.89"/>
                <rect className="cls-2" x="411.32" y="126.56" width="4.61" height="2"/>
                <rect className="cls-2" x="408.34" y="124.55" width="7.59" height="1.01"/>
                <polygon className="cls-2" points="415.89 113.58 415.89 114.55 408.34 114.53 408.34 113.58 415.89 113.58"/>
                <rect className="cls-2" x="411.31" y="110.54" width="4.58" height="2.01"/>
                <polygon className="cls-2" points="408.34 124.7 408.34 114.53 409.32 114.55 409.32 124.55 408.34 124.7"/>
                <rect className="cls-2" x="410.32" y="114.42" width="0.99" height="10.28"/>
                <rect className="cls-2" x="412.32" y="114.42" width="1.03" height="10.28"/>
            </g>
            <g id="B_24" className="bureau" onClick={(e) => handleSelectBureau(e, "B_24")}>
                <title>Bureau 24 - salle 1</title>
                <rect className="cls-1" x="328.6" y="203.61" width="37.89" height="19.96"/>
                <rect className="cls-2" x="338.59" y="198.53" width="2" height="4.61"/>
                <rect className="cls-2" x="341.59" y="195.54" width="1.01" height="7.59"/>
                <polygon className="cls-2" points="353.57 203.1 352.6 203.1 352.61 195.54 353.57 195.54 353.57 203.1"/>
                <rect className="cls-2" x="354.59" y="198.51" width="2.01" height="4.58"/>
                <polygon className="cls-2" points="342.45 195.54 352.61 195.54 352.6 196.53 342.6 196.53 342.45 195.54"/>
                <rect className="cls-2" x="342.45" y="197.52" width="10.28" height="0.99"/>
                <rect className="cls-2" x="342.45" y="199.53" width="10.28" height="1.03"/>
            </g>
            <g id="B_23" className="bureau" onClick={(e) => handleSelectBureau(e, "B_23")}>
                <title>Bureau 23 - salle 1</title>
                <rect className="cls-1" x="289.44" y="203.61" width="37.89" height="19.96"/>
                <rect className="cls-2" x="299.43" y="198.53" width="2" height="4.61"/>
                <rect className="cls-2" x="302.42" y="195.54" width="1.01" height="7.59"/>
                <polygon className="cls-2" points="314.41 203.1 313.44 203.1 313.45 195.54 314.41 195.54 314.41 203.1"/>
                <rect className="cls-2" x="315.43" y="198.51" width="2.01" height="4.58"/>
                <polygon className="cls-2" points="303.28 195.54 313.45 195.54 313.44 196.53 303.43 196.53 303.28 195.54"/>
                <rect className="cls-2" x="303.28" y="197.52" width="10.28" height="0.99"/>
                <rect className="cls-2" x="303.28" y="199.53" width="10.28" height="1.03"/>
            </g>
            <g id="B_22" className="bureau" onClick={(e) => handleSelectBureau(e, "B_22")}>
                <title>Bureau 22 - salle 1</title>
                <rect className="cls-1" x="250.22" y="203.61" width="37.89" height="19.96"/>
                <rect className="cls-2" x="260.71" y="198.53" width="2" height="4.61"/>
                <rect className="cls-2" x="263.71" y="195.54" width="1.01" height="7.59"/>
                <polygon className="cls-2" points="275.69 203.1 274.72 203.1 274.73 195.54 275.69 195.54 275.69 203.1"/>
                <rect className="cls-2" x="276.71" y="198.51" width="2.01" height="4.58"/>
                <polygon className="cls-2" points="264.57 195.54 274.73 195.54 274.72 196.53 264.71 196.53 264.57 195.54"/>
                <rect className="cls-2" x="264.57" y="197.52" width="10.28" height="0.99"/>
                <rect className="cls-2" x="264.57" y="199.53" width="10.28" height="1.03"/>
            </g>
            <g id="B_21" className="bureau" onClick={(e) => handleSelectBureau(e, "B_21")}>
                <title>Bureau 21 - salle 1</title>
                <rect className="cls-1" x="211.04" y="203.61" width="37.89" height="19.96"/>
                <rect className="cls-2" x="221.03" y="198.53" width="2" height="4.61"/>
                <rect className="cls-2" x="224.03" y="195.54" width="1.01" height="7.59"/>
                <polygon className="cls-2" points="236.01 203.1 235.04 203.1 235.05 195.54 236.01 195.54 236.01 203.1"/>
                <rect className="cls-2" x="237.03" y="198.51" width="2.01" height="4.58"/>
                <polygon className="cls-2" points="224.89 195.54 235.05 195.54 235.04 196.53 225.03 196.53 224.89 195.54"/>
                <rect className="cls-2" x="224.89" y="197.52" width="10.28" height="0.99"/>
                <rect className="cls-2" x="224.89" y="199.53" width="10.28" height="1.03"/>
            </g>
            <g id="B_20" className="bureau" onClick={(e) => handleSelectBureau(e, "B_20")}>
                <title>Bureau 20 - salle 1</title>
                <g id="Layer_45" data-name="Layer 45">
                <rect className="cls-1" x="167.12" y="70.34" width="37.89" height="19.96"/>
                <rect className="cls-2" x="177.4" y="65.26" width="2" height="4.61"/>
                <rect className="cls-2" x="180.4" y="62.27" width="1.01" height="7.59"/>
                <polygon className="cls-2" points="192.38 69.83 191.41 69.83 191.42 62.27 192.38 62.27 192.38 69.83"/>
                <rect className="cls-2" x="193.4" y="65.24" width="2.01" height="4.58"/>
                <polygon className="cls-2" points="181.26 62.27 191.42 62.27 191.41 63.26 181.4 63.26 181.26 62.27"/>
                <rect className="cls-2" x="181.26" y="64.25" width="10.28" height="0.99"/>
                <rect className="cls-2" x="181.26" y="66.25" width="10.28" height="1.03"/>
                </g>
            </g>
            <g id="B_19" className="bureau" onClick={(e) => handleSelectBureau(e, "B_19")}>
                <title>Bureau 19 - salle 1</title>
                <g id="Layer_43" data-name="Layer 43">
                <rect className="cls-1" x="128" y="70.31" width="37.89" height="19.96"/>
                <rect className="cls-2" x="137.67" y="65.14" width="2" height="4.61"/>
                <rect className="cls-2" x="140.67" y="62.16" width="1.01" height="7.59"/>
                <polygon className="cls-2" points="152.65 69.71 151.68 69.71 151.69 62.16 152.65 62.16 152.65 69.71"/>
                <rect className="cls-2" x="153.67" y="65.13" width="2.01" height="4.58"/>
                <polygon className="cls-2" points="141.53 62.16 151.69 62.16 151.68 63.14 141.68 63.14 141.53 62.16"/>
                <rect className="cls-2" x="141.53" y="64.14" width="10.28" height="0.99"/>
                <rect className="cls-2" x="141.53" y="66.14" width="10.28" height="1.03"/>
                </g>
            </g>
            <g id="B_18" className="bureau" onClick={(e) => handleSelectBureau(e, "B_18")}>
                <title>Bureau 18 - salle 1</title>
                <g id="Layer_41" data-name="Layer 41">
                <rect className="cls-1" x="88.97" y="70.31" width="37.89" height="19.96"/>
                <rect className="cls-2" x="99" y="65.14" width="2" height="4.61"/>
                <rect className="cls-2" x="102" y="62.16" width="1.01" height="7.59"/>
                <polygon className="cls-2" points="113.98 69.71 113.01 69.71 113.03 62.16 113.98 62.16 113.98 69.71"/>
                <rect className="cls-2" x="115" y="65.13" width="2.01" height="4.58"/>
                <polygon className="cls-2" points="102.86 62.16 113.03 62.16 113.01 63.14 103.01 63.14 102.86 62.16"/>
                <rect className="cls-2" x="102.86" y="64.14" width="10.28" height="0.99"/>
                <rect className="cls-2" x="102.86" y="66.14" width="10.28" height="1.03"/>
                </g>
            </g>
            <g id="B_17" className="bureau" onClick={(e) => handleSelectBureau(e, "B_17")}>
                <title>Bureau 17 - salle 1</title>
                <g id="Layer_39" data-name="Layer 39">
                <rect className="cls-1" x="50.04" y="70.23" width="37.89" height="19.96"/>
                <rect className="cls-2" x="60.03" y="65.14" width="2" height="4.61"/>
                <rect className="cls-2" x="63.02" y="62.16" width="1.01" height="7.59"/>
                <polygon className="cls-2" points="75.01 69.71 74.04 69.71 74.05 62.16 75.01 62.16 75.01 69.71"/>
                <rect className="cls-2" x="76.03" y="65.13" width="2.01" height="4.58"/>
                <polygon className="cls-2" points="63.88 62.16 74.05 62.16 74.04 63.14 64.03 63.14 63.88 62.16"/>
                <rect className="cls-2" x="63.88" y="64.14" width="10.28" height="0.99"/>
                <rect className="cls-2" x="63.88" y="66.14" width="10.28" height="1.03"/>
                </g>
            </g>
            <g id="B_16" className="bureau" onClick={(e) => handleSelectBureau(e, "B_16")}>
                <title>Bureau 16 - salle 1</title>
                <g id="Layer_36" data-name="Layer 36">
                <rect className="cls-2" x="338.2" y="105.51" width="7" height="2.02"/>
                <rect className="cls-2" x="338.2" y="89.51" width="7" height="2"/>
                <polygon className="cls-2" points="339.21 103.51 339.21 102.51 337.23 102.51 337.23 102.48 337.23 100.51 336.22 100.5 336.21 100.48 336.21 96.51 336.23 96.5 337.22 96.5 337.22 94.51 337.23 94.5 339.22 94.5 339.22 93.52 339.24 93.51 344.21 93.5 344.21 92.51 339.22 92.51 339.21 93.5 337.21 93.5 337.21 94.5 336.22 94.5 336.21 96.5 335.21 96.5 335.21 100.5 336.21 100.5 336.21 100.53 336.22 102.5 337.21 102.5 337.21 102.52 337.21 103.51 339.21 103.51"/>
                <polygon className="cls-2" points="346.21 103.49 347.2 103.49 347.2 93.48 346.21 93.48 346.21 92.49 348.23 92.49 348.23 104.5 346.21 104.5 346.21 103.49"/>
                <polygon className="cls-2" points="339.21 104.48 339.21 103.49 344.21 103.49 344.21 92.49 346.21 92.49 346.21 104.5 339.21 104.48"/>
                </g>
            </g>
            <g id="B_15" className="bureau" onClick={(e) => handleSelectBureau(e, "B_15")}>
                <title>Bureau 15 - salle 1</title>
                <g id="Layer_34" data-name="Layer 34">
                <rect className="cls-2" x="338.22" y="85.48" width="7" height="2.02"/>
                <rect className="cls-2" x="338.22" y="69.48" width="7" height="2"/>
                <polygon className="cls-2" points="339.23 83.48 339.23 82.48 337.25 82.48 337.25 82.46 337.25 80.48 336.24 80.48 336.23 80.46 336.24 76.49 336.25 76.48 337.24 76.48 337.24 74.49 337.25 74.48 339.24 74.48 339.24 73.5 339.26 73.48 344.24 73.48 344.24 72.49 339.24 72.49 339.23 73.48 337.24 73.48 337.24 74.48 336.24 74.48 336.23 76.48 335.24 76.48 335.24 80.48 336.23 80.48 336.24 80.5 336.24 82.48 337.23 82.48 337.24 82.49 337.24 83.48 339.23 83.48"/>
                <polygon className="cls-2" points="346.23 83.46 347.22 83.46 347.22 73.46 346.23 73.46 346.23 72.47 348.25 72.47 348.25 84.48 346.23 84.48 346.23 83.46"/>
                <polygon className="cls-2" points="339.24 84.46 339.23 83.46 344.24 83.46 344.24 72.47 346.23 72.47 346.23 84.48 339.24 84.46"/>
                </g>
            </g>
            <g id="B_14" className="bureau" onClick={(e) => handleSelectBureau(e, "B_14")}>
                <title>Bureau 14 - salle 1</title>
                <g id="Layer_32" data-name="Layer 32">
                <rect className="cls-2" x="338.24" y="66.46" width="7" height="2.02"/>
                <rect className="cls-2" x="338.24" y="50.46" width="7" height="2"/>
                <polygon className="cls-2" points="339.25 64.46 339.25 63.46 337.27 63.46 337.27 63.43 337.27 61.46 336.26 61.45 336.25 61.43 336.26 57.46 336.28 57.45 337.26 57.45 337.26 55.46 337.27 55.45 339.27 55.45 339.27 54.47 339.28 54.45 344.26 54.45 344.26 53.46 339.26 53.46 339.25 54.45 337.26 54.45 337.26 55.45 336.26 55.45 336.25 57.45 335.26 57.45 335.26 61.45 336.25 61.45 336.26 61.47 336.26 63.45 337.25 63.45 337.26 63.47 337.26 64.46 339.25 64.46"/>
                <polygon className="cls-2" points="346.26 64.44 347.25 64.44 347.25 54.43 346.26 54.43 346.26 53.44 348.27 53.44 348.27 65.45 346.26 65.45 346.26 64.44"/>
                <polygon className="cls-2" points="339.26 65.43 339.25 64.44 344.26 64.44 344.26 53.44 346.26 53.44 346.26 65.45 339.26 65.43"/>
                </g>
            </g>
            <g id="B_13" className="bureau" onClick={(e) => handleSelectBureau(e, "B_13")}>
                <title>Bureau 13 - salle 1</title>
                <g id="Layer_30" data-name="Layer 30">
                <rect className="cls-2" x="338.27" y="43.09" width="7" height="2.02"/>
                <rect className="cls-2" x="338.27" y="27.1" width="7" height="2"/>
                <polygon className="cls-2" points="339.27 41.09 339.27 40.1 337.29 40.1 337.29 40.07 337.29 38.09 336.29 38.09 336.27 38.07 336.28 34.1 336.3 34.09 337.28 34.09 337.28 32.1 337.3 32.09 339.29 32.09 339.29 31.11 339.31 31.09 344.28 31.09 344.28 30.1 339.28 30.1 339.28 31.09 337.28 31.09 337.28 32.09 336.28 32.09 336.27 34.09 335.28 34.09 335.28 38.09 336.28 38.09 336.28 38.11 336.28 40.09 337.27 40.09 337.28 40.11 337.28 41.09 339.27 41.09"/>
                <polygon className="cls-2" points="346.28 41.07 347.27 41.07 347.27 31.07 346.28 31.07 346.28 30.08 348.29 30.08 348.29 42.09 346.28 42.09 346.28 41.07"/>
                <polygon className="cls-2" points="339.28 42.07 339.27 41.07 344.28 41.07 344.28 30.08 346.28 30.08 346.28 42.09 339.28 42.07"/>
                </g>
            </g>
            <g id="B_12" className="bureau" onClick={(e) => handleSelectBureau(e, "B_12")}>
                <title>Bureau 12 - salle 1</title>
                <g id="Layer_28" data-name="Layer 28">
                <rect className="cls-2" x="289.82" y="88.69" width="7" height="2.02"/>
                <rect className="cls-2" x="289.82" y="104.71" width="7" height="2"/>
                <polygon className="cls-2" points="295.81 92.71 295.81 93.71 297.79 93.71 297.79 93.73 297.79 95.71 298.79 95.71 298.81 95.74 298.8 99.7 298.78 99.72 297.8 99.72 297.8 101.7 297.78 101.72 295.79 101.72 295.79 102.7 295.77 102.71 290.8 102.71 290.8 103.71 295.8 103.71 295.8 102.71 297.8 102.71 297.8 101.71 298.8 101.71 298.81 99.71 299.8 99.71 299.8 95.71 298.8 95.71 298.8 95.69 298.8 93.71 297.81 93.71 297.8 93.7 297.8 92.71 295.81 92.71"/>
                <polygon className="cls-2" points="288.8 92.73 287.81 92.73 287.81 102.73 288.8 102.73 288.8 103.73 286.79 103.73 286.79 91.71 288.8 91.71 288.8 92.73"/>
                <polygon className="cls-2" points="295.8 91.73 295.81 92.73 290.8 92.73 290.8 103.73 288.8 103.73 288.8 91.71 295.8 91.73"/>
                </g>
            </g>
            <g id="B_11" className="bureau" onClick={(e) => handleSelectBureau(e, "B_11")}>
                <title>Bureau 11 - salle 1</title>
                <g id="Layer_26" data-name="Layer 26">
                <rect className="cls-2" x="289.79" y="68.44" width="7" height="2.02"/>
                <rect className="cls-2" x="289.79" y="84.46" width="7" height="2"/>
                <polygon className="cls-2" points="295.78 72.47 295.78 73.46 297.77 73.46 297.77 73.49 297.77 75.47 298.77 75.47 298.78 75.49 298.78 79.46 298.76 79.47 297.78 79.47 297.78 81.46 297.76 81.47 295.77 81.47 295.77 82.45 295.75 82.47 290.78 82.47 290.78 83.46 295.78 83.46 295.78 82.47 297.78 82.47 297.78 81.47 298.78 81.47 298.78 79.47 299.78 79.47 299.78 75.47 298.78 75.47 298.78 75.45 298.78 73.47 297.78 73.47 297.78 73.45 297.78 72.47 295.78 72.47"/>
                <polygon className="cls-2" points="288.78 72.49 287.79 72.49 287.79 82.49 288.78 82.49 288.78 83.48 286.76 83.48 286.76 71.47 288.78 71.47 288.78 72.49"/>
                <polygon className="cls-2" points="295.78 71.49 295.78 72.49 290.78 72.49 290.78 83.48 288.78 83.48 288.78 71.47 295.78 71.49"/>
                </g>
            </g>
            <g id="B_10" className="bureau" onClick={(e) => handleSelectBureau(e, "B_10")}>
                <title>Bureau 10 - salle 1</title>
                <g id="Layer_24" data-name="Layer 24">
                <rect className="cls-2" x="289.77" y="48.43" width="7" height="2.02"/>
                <rect className="cls-2" x="289.77" y="64.45" width="7" height="2"/>
                <polygon className="cls-2" points="295.76 52.46 295.76 53.45 297.75 53.45 297.75 53.48 297.75 55.46 298.75 55.46 298.76 55.48 298.76 59.45 298.74 59.46 297.75 59.46 297.75 61.45 297.74 61.46 295.75 61.46 295.75 62.45 295.73 62.46 290.75 62.46 290.75 63.45 295.75 63.45 295.76 62.46 297.76 62.46 297.76 61.46 298.75 61.46 298.76 59.46 299.76 59.46 299.76 55.46 298.76 55.46 298.76 55.44 298.75 53.46 297.76 53.46 297.76 53.45 297.76 52.46 295.76 52.46"/>
                <polygon className="cls-2" points="288.76 52.48 287.77 52.48 287.77 62.48 288.76 62.48 288.76 63.47 286.74 63.47 286.74 51.46 288.76 51.46 288.76 52.48"/>
                <polygon className="cls-2" points="295.75 51.48 295.76 52.48 290.75 52.48 290.75 63.47 288.76 63.47 288.76 51.46 295.75 51.48"/>
                </g>
            </g>
            <g id="B_9" className="bureau" onClick={(e) => handleSelectBureau(e, "B_9")}>
                <title>Bureau 9 - salle 1</title>
                <g id="Layer_22" data-name="Layer 22">
                <rect className="cls-2" x="289.75" y="27.57" width="7" height="2.02"/>
                <rect className="cls-2" x="289.75" y="43.59" width="7" height="2"/>
                <polygon className="cls-2" points="295.74 31.59 295.74 32.59 297.72 32.59 297.72 32.62 297.72 34.59 298.73 34.59 298.74 34.62 298.73 38.59 298.72 38.6 297.73 38.6 297.73 40.59 297.72 40.6 295.73 40.6 295.73 41.58 295.71 41.59 290.73 41.6 290.73 42.59 295.73 42.59 295.74 41.6 297.74 41.6 297.73 40.59 298.73 40.59 298.74 38.59 299.73 38.59 299.73 34.59 298.74 34.59 298.73 34.57 298.73 32.59 297.74 32.59 297.74 32.58 297.73 31.59 295.74 31.59"/>
                <polygon className="cls-2" points="288.74 31.61 287.75 31.61 287.75 41.62 288.74 41.62 288.74 42.61 286.72 42.61 286.72 30.6 288.74 30.6 288.74 31.61"/>
                <polygon className="cls-2" points="295.73 30.61 295.74 31.61 290.73 31.61 290.73 42.61 288.74 42.61 288.74 30.6 295.73 30.61"/>
                </g>
            </g>
            <g id="B_8" className="bureau" onClick={(e) => handleSelectBureau(e, "B_8")}>
                <title>Bureau 8 - salle 1</title>
                <g id="Layer_20" data-name="Layer 20">
                <rect className="cls-2" x="470.97" y="27" width="2.02" height="7"/>
                <rect className="cls-2" x="486.99" y="27" width="2" height="7"/>
                <polygon className="cls-2" points="475 28.01 476 28.01 476 26.03 476.02 26.03 478 26.03 478 25.02 478.02 25.01 481.99 25.02 482 25.04 482 26.02 483.99 26.02 484 26.04 484 28.03 484.99 28.03 485 28.04 485 33.02 485.99 33.02 485.99 28.02 485 28.01 485 26.02 484 26.02 484 25.02 482 25.01 482 24.02 478 24.02 478 25.01 477.98 25.02 476 25.02 476 26.01 475.99 26.02 475 26.02 475 28.01"/>
                <polygon className="cls-2" points="475.02 35.02 475.02 36.01 485.02 36.01 485.02 35.02 486.01 35.02 486.01 37.03 474 37.03 474 35.02 475.02 35.02"/>
                <polygon className="cls-2" points="474.02 28.02 475.02 28.01 475.02 33.02 486.01 33.02 486.01 35.02 474 35.02 474.02 28.02"/>
                </g>
            </g>
            <g id="B_7" className="bureau" onClick={(e) => handleSelectBureau(e, "B_7")}>
                <title>Bureau 7 - salle 1</title>
                <g id="Layer_18" data-name="Layer 18">
                <rect className="cls-2" x="424.92" y="27.03" width="2.02" height="7"/>
                <rect className="cls-2" x="440.94" y="27.03" width="2" height="7"/>
                <polygon className="cls-2" points="428.95 28.04 429.94 28.04 429.94 26.05 429.97 26.05 431.95 26.05 431.95 25.05 431.97 25.03 435.94 25.04 435.95 25.06 435.95 26.04 437.94 26.04 437.95 26.06 437.95 28.05 438.94 28.05 438.95 28.07 438.95 33.04 439.94 33.04 439.94 28.04 438.95 28.04 438.95 26.04 437.95 26.04 437.95 25.04 435.95 25.03 435.95 24.04 431.95 24.04 431.95 25.04 431.93 25.04 429.95 25.04 429.95 26.04 429.94 26.04 428.95 26.04 428.95 28.04"/>
                <polygon className="cls-2" points="428.97 35.04 428.97 36.03 438.97 36.03 438.97 35.04 439.96 35.04 439.96 37.05 427.95 37.05 427.95 35.04 428.97 35.04"/>
                <polygon className="cls-2" points="427.97 28.04 428.97 28.04 428.97 33.04 439.96 33.04 439.96 35.04 427.95 35.04 427.97 28.04"/>
                </g>
            </g>
            <g id="B_6" className="bureau" onClick={(e) => handleSelectBureau(e, "B_6")}>
                <title>Bureau 6 - salle 1</title>
                <g id="Layer_16" data-name="Layer 16">
                <rect className="cls-2" x="380.81" y="27.05" width="2.02" height="7"/>
                <rect className="cls-2" x="396.83" y="27.05" width="2" height="7"/>
                <polygon className="cls-2" points="384.83 28.06 385.83 28.06 385.83 26.07 385.86 26.07 387.84 26.07 387.84 25.07 387.86 25.06 391.83 25.06 391.84 25.08 391.84 26.06 393.83 26.06 393.84 26.08 393.84 28.07 394.82 28.07 394.84 28.09 394.84 33.06 395.83 33.06 395.83 28.06 394.84 28.06 394.84 26.06 393.84 26.06 393.84 25.06 391.84 25.06 391.84 24.06 387.84 24.06 387.84 25.06 387.82 25.06 385.84 25.06 385.84 26.06 385.82 26.06 384.83 26.06 384.83 28.06"/>
                <polygon className="cls-2" points="384.86 35.06 384.86 36.05 394.86 36.05 394.86 35.06 395.85 35.06 395.85 37.08 383.84 37.08 383.84 35.06 384.86 35.06"/>
                <polygon className="cls-2" points="383.86 28.06 384.86 28.06 384.86 33.06 395.85 33.06 395.85 35.06 383.84 35.06 383.86 28.06"/>
                </g>
            </g>
            <g id="B_5" className="bureau" onClick={(e) => handleSelectBureau(e, "B_5")}>
                <title>Bureau 5 - salle 1</title>
                <g id="Layer_14" data-name="Layer 14">
                <rect className="cls-2" x="208.08" y="28.1" width="2.02" height="7"/>
                <rect className="cls-2" x="224.1" y="28.1" width="2" height="7"/>
                <polygon className="cls-2" points="212.1 29.1 213.1 29.1 213.1 27.12 213.13 27.12 215.1 27.12 215.1 26.12 215.13 26.1 219.09 26.11 219.11 26.13 219.11 27.11 221.1 27.11 221.11 27.13 221.11 29.12 222.09 29.12 222.1 29.14 222.11 34.11 223.1 34.11 223.1 29.11 222.11 29.11 222.11 27.11 221.11 27.11 221.1 26.11 219.11 26.1 219.11 25.11 215.1 25.11 215.1 26.11 215.09 26.11 213.1 26.11 213.1 27.1 213.09 27.11 212.1 27.11 212.1 29.1"/>
                <polygon className="cls-2" points="212.12 36.11 212.12 37.1 222.13 37.1 222.13 36.11 223.12 36.11 223.12 38.12 211.11 38.12 211.11 36.11 212.12 36.11"/>
                <polygon className="cls-2" points="211.12 29.11 212.12 29.1 212.12 34.11 223.12 34.11 223.12 36.11 211.11 36.11 211.12 29.11"/>
                </g>
            </g>
            <g id="B_4" className="bureau" onClick={(e) => handleSelectBureau(e, "B_4")}>
                <title>Bureau 4 - salle 1</title>
                <g id="Layer_12" data-name="Layer 12">
                <rect className="cls-2" x="163.88" y="27.13" width="2.02" height="7"/>
                <rect className="cls-2" x="179.91" y="27.13" width="2" height="7"/>
                <polygon className="cls-2" points="167.91 28.14 168.91 28.14 168.91 26.15 168.93 26.15 170.91 26.15 170.91 25.15 170.93 25.14 174.9 25.14 174.91 25.16 174.91 26.14 176.9 26.14 176.91 26.16 176.91 28.15 177.9 28.15 177.91 28.17 177.91 33.14 178.9 33.14 178.9 28.14 177.91 28.14 177.91 26.14 176.91 26.14 176.91 25.14 174.91 25.14 174.91 24.14 170.91 24.14 170.91 25.14 170.89 25.14 168.91 25.14 168.91 26.14 168.9 26.14 167.91 26.14 167.91 28.14"/>
                <polygon className="cls-2" points="167.93 35.14 167.93 36.13 177.93 36.13 177.93 35.14 178.93 35.14 178.93 37.16 166.91 37.16 166.91 35.14 167.93 35.14"/>
                <polygon className="cls-2" points="166.93 28.14 167.93 28.14 167.93 33.14 178.93 33.14 178.93 35.14 166.91 35.14 166.93 28.14"/>
                </g>
            </g>
            <g id="B_3" className="bureau" onClick={(e) => handleSelectBureau(e, "B_3")}>
                <title>Bureau 3 - salle 1</title>
                <g id="Layer_10" data-name="Layer 10">
                <rect className="cls-2" x="118.01" y="27.15" width="2.02" height="7"/>
                <rect className="cls-2" x="134.03" y="27.15" width="2" height="7"/>
                <polygon className="cls-2" points="122.04 28.16 123.03 28.16 123.03 26.18 123.06 26.18 125.04 26.18 125.04 25.17 125.06 25.16 129.03 25.16 129.04 25.18 129.04 26.17 131.03 26.17 131.04 26.18 131.04 28.17 132.03 28.17 132.04 28.19 132.04 33.16 133.03 33.16 133.03 28.17 132.04 28.16 132.04 26.16 131.04 26.16 131.04 25.17 129.04 25.16 129.04 24.16 125.04 24.16 125.04 25.16 125.02 25.16 123.04 25.17 123.04 26.16 123.03 26.16 122.04 26.16 122.04 28.16"/>
                <polygon className="cls-2" points="122.06 35.16 122.06 36.15 132.06 36.15 132.06 35.16 133.06 35.16 133.06 37.18 121.04 37.18 121.04 35.16 122.06 35.16"/>
                <polygon className="cls-2" points="121.06 28.16 122.06 28.16 122.06 33.16 133.06 33.16 133.06 35.16 121.04 35.16 121.06 28.16"/>
                </g>
            </g>
            <g id="B_2" className="bureau" onClick={(e) => handleSelectBureau(e, "B_2")}>
                <title>Bureau 2 - salle 1</title>
                <g id="Layer_8" data-name="Layer 8">
                <rect className="cls-2" x="75.01" y="27.14" width="2.02" height="7"/>
                <rect className="cls-2" x="91.03" y="27.14" width="2" height="7"/>
                <polygon className="cls-2" points="79.03 28.15 80.03 28.15 80.03 26.17 80.06 26.17 82.03 26.17 82.03 25.16 82.06 25.15 86.03 25.16 86.04 25.18 86.04 26.16 88.03 26.16 88.04 26.17 88.04 28.16 89.02 28.16 89.03 28.18 89.04 33.16 90.03 33.16 90.03 28.16 89.04 28.15 89.04 26.16 88.04 26.16 88.03 25.16 86.04 25.15 86.04 24.16 82.04 24.16 82.04 25.15 82.02 25.16 80.03 25.16 80.03 26.15 80.02 26.16 79.03 26.16 79.03 28.15"/>
                <polygon className="cls-2" points="79.05 35.16 79.05 36.15 89.06 36.15 89.06 35.16 90.05 35.16 90.05 37.17 78.04 37.17 78.04 35.16 79.05 35.16"/>
                <polygon className="cls-2" points="78.06 28.16 79.05 28.15 79.05 33.16 90.05 33.16 90.05 35.16 78.04 35.16 78.06 28.16"/>
                </g>
            </g>
            <g id="B_1" className="bureau" onClick={(e) => handleSelectBureau(e, "B_1")}>
                <title>Bureau 1 - salle 1</title>
                <g id="Layer_6" data-name="Layer 6">
                <rect className="cls-2" x="29.03" y="27.16" width="2" height="8"/>
                <polygon className="cls-2" points="44.03 27.16 46.04 27.16 46.03 35.16 44.03 35.16 44.03 38.14 32.02 38.14 32.02 37.2 33.04 37.15 43.02 37.15 43.03 36.14 33.03 36.16 33.03 37.09 32.02 37.13 32.02 34.16 33.03 34.16 43.04 34.16 43.04 29.16 44.04 29.15 44.03 27.16"/>
                <polygon className="cls-2" points="32.07 37.05 32.02 37.11 32.02 37.22 33.02 37.15 33.03 37.05 32.07 37.05"/>
                <polygon className="cls-2" points="32.02 29.16 32.02 34.23 33.04 34.26 33.03 34.16 33.04 29.16 32.02 29.16"/>
                <polygon className="cls-2" points="33 29.2 33.04 29.16 33.04 27.16 34.04 27.16 34.04 26.16 36.04 26.16 36.04 25.16 40.03 25.16 40.03 26.15 42.03 26.15 42.03 27.16 43.03 27.16 43.04 29.16 42.03 29.16 42.03 27.18 42 27.16 40.03 27.16 40.03 26.18 40 26.15 36.07 26.16 36.03 26.19 36.04 27.16 34.07 27.16 34.03 27.18 34.03 29.15 33.06 29.16 33 29.2"/>
                </g>
            </g>
            
            <g id="Border">
                <polygon className="cls-2" points="0 1.14 0.02 231.09 3.93 231.09 3.93 5.02 508.97 5.02 508.97 227.08 4.04 227.16 4.03 231.15 514.06 231.15 514.06 0 0 0 0 1.14"/>
                <polygon className="cls-2" points="3.74 227.16 4.21 227.16 4.15 231.15 0 231.15 0.02 227.12 3.74 227.16"/>
                <g id="Layer_37" data-name="Layer 37">
                <rect className="cls-1" x="300.98" y="24.21" width="33.02" height="81.95"/>
                </g>
                <g id="Layer_56" data-name="Layer 56">
                <polygon className="cls-1" points="4.75 22.5 4.75 5.82 507.56 5.54 507.56 22.5 4.75 22.5"/>
                </g>
            </g>
            </g>
        </svg>
    </div>

    return component
}

export default PlanModele1