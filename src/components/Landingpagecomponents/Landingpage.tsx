// src/components/LandingPage.tsx

// REMOVED: import { GraduationCap, MessageSquare } from "lucide-react"; 

import Landingpageaboutus from "./Landingpageaboutus"
import Landingpagefooter from "./LandingpageFooter"
import LandingPagehero from "./Landingpagehero"
import Landingpageprice from "./Landingpageprice"
import Landingpagetestimonials from "./Landingpagetestimonials"

function LandingPage() {
    return (
        <>
            <LandingPagehero />
            <Landingpageaboutus />
            <Landingpageprice />
            <Landingpagetestimonials />
            <Landingpagefooter />
        </>
    )
}
export default LandingPage
