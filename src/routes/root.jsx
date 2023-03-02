import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

export default function Root(){
    return (
        <>
        <NavBar />
        <div className="details">
            <Outlet />
        </div>
        <Footer />
        </>
    )
}