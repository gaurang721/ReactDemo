import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import SubMenu from './SubMenu'


function NavMenu(props) {
 const mysub= ()=>{
  if (props.childitem !== undefined) {
    return "abc"
  }else{
  return ""
  }
 }
  return (
        <>
           <li className= {`navitem relative ${mysub()}`}><Link className="navitem__link " to={props.link}>{props.navItem} </Link>  {props.childitem !== undefined ? <SubMenu childitem={props.childitem} /> : "" }</li>
        </>
 
    )
}

export default NavMenu