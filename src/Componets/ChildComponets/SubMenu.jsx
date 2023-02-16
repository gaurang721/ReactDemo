import React from "react";
import { Link } from "react-router-dom";


export default function SubMenu(props) {
    let subitem= props.childitem;
  return (
    <>
    <ul className="submenu__item list-none relative md:absolute top-px md:top-8 bg-white shadow-sm	py-3 px-3 z-10	">
        {
            subitem.map((current,index)=>{
                return <li className="pb-3 subMenu__item" key={index}><Link to={"/"} className="subMenu__link">{current}</Link></li>
            })
           
            }
    </ul>
    </>
  )
}
