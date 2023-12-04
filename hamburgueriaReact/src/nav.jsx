import { Outlet, Link } from "react-router-dom";
import BasicExample from "./components/navbs";



const Nav = () => {
  return (
    <>
    <BasicExample/>

      <Outlet />
    </>
  )
};

export default Nav;