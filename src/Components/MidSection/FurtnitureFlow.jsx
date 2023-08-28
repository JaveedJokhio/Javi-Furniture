import React,{useContext} from 'react'
import flowLight from "../../assets/images/flow-light.png";
import flowDark from "../../assets/images/flow-dark.png";
import { ThemeBgContext } from "../ContextWrapeer/ThemeContext";


const FurtnitureFlow = () => {
  const { theme } = useContext(ThemeBgContext);

  return (
    <div>
        <img
        className="sm:hidden bg-center bg-no-repeat bg-cover h-full w-full"
        src={theme === "light" ? flowLight : flowDark}
        alt="furniture flow"
      ></img>
    </div>
  )
}

export default FurtnitureFlow