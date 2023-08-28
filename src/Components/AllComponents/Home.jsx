import React, { useContext} from "react";
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import WrapperContainer from './WrapperContainer/WrapperContainer'
import MidFilterSection from '../MidSection/MidFilterSection'
import MidComponentParent from '../MidSection/MidComponentParent'
import TabsComponent from '../MidSection/TabsComponent'
import FurtnitureFlow from '../MidSection/FurtnitureFlow'
import NewsLetter from '../MidSection/NewsLetter'
import Card from '../MidSection/Card'
import Footer from '../Footer/Footer'
import { ThemeBgContext } from "../ContextWrapeer/ThemeContext";
import MobileNav from "../Navbar/MobileNav";



const Home = () => {
  const { theme } = useContext(ThemeBgContext);


  return (
    <div className="relative">
      <MobileNav/>
      <div className={theme === "light" ? "bg-white" : "bg-dark"}>
      <WrapperContainer navHead>
      <Navbar/>
        <Header/>
      </WrapperContainer>
      <div className='bg-gray-100 w-full'>
    <WrapperContainer>
      <MidFilterSection/>
      <MidComponentParent/>
      <TabsComponent/>
      <FurtnitureFlow/>
      <Card/>
      <NewsLetter/>
    </WrapperContainer>
   
      </div>
      
      </div>
      <div style={{marginTop:"2rem"}}>
    <Footer/>

    </div>
    </div>
  )
}

export default Home