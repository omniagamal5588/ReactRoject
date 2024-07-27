import { Outlet } from "react-router-dom";
import { NavBar } from "../componants/NavBar";

export function SharedLayout(){
    return(
       <>
         <NavBar/>
        <Outlet/>
       
       </>
    )
}