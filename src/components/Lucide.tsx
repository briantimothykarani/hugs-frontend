import { Container, Typography } from "@mui/material";

/*
import { Home as HomeIcon, BookX } from "lucide-react";
function Lucide() {
    const helloworld=()=>{

    }
    return (
        <>
            <p>lucide react</p>
            <BookX />
            <HomeIcon onClick={helloworld} className="cursor-pointer" size={120} color="green" />

        </>

    )
}
export default Lucide;*/
// material ui
function Lucide() {
    return <Container sx={{ bgcolor: 'tomato', height: "100vh" }} >
        <Typography variant="h1"><p className="text-blue-300">hi here hello</p></Typography>
    </Container >


}
export default Lucide;