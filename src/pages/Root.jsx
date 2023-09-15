import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PopupModal from "../components/UI/Modal"

const RootLayout = () => {
    const [modalShow, setModalShow] = React.useState(true);
    return (
        <>
        <PopupModal show={modalShow} onHide={() => setModalShow(false)} />
        <Navbar />
        <Outlet />
        <Footer />
        </>

    )
}

export default RootLayout;