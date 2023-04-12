import { Route, Routes } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MainPage from "./MainPage/MainPage";
import CourseList from "./CourseList/CourseList";
import AboutUs from "./AboutUs/AboutUs";
import Contact from "./ContactUs/ContactUs";

const App = () => {
    return (
        <>
            <Header/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/courses" element={<CourseList/>}/>
                    <Route path="/about" element={<AboutUs/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            <Footer/>
        </>
    )
}

export default App