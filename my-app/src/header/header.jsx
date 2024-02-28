import React from "react";
import LogoImg from "../header/img/logotype.png"
import Input from "../header/img/Group.png"
import Icons from "../header/icons/sun-day-weather-symbol_icon-icons 1.png"
import Icons1 from "../header/icons/Union.png"
import Icons2 from "../header/icons/ion_notifications-outline.png"
import Icons3 from "../header/icons/Ellipse 6.png"
import Icons4 from "../header/icons/Frame.png"
import "./header.css";
export default function Header(){
    return (
        <header>
            <div className="All_header">
                <div className="logo">
                <img className="logo-img" src={LogoImg} style={{width: "130px", height: "30px"}}/>
                </div>
                <div  className="input">
                <img src={Input} alt="" />
                <input className="input-header"  placeholder="Поиск различных акций"></input>
                </div>
                <div className="icons">
                <ul>
                    <a href=""><li><img src={Icons} alt="" /></li></a>
                    <a href=""><li><img src={Icons1} alt="" /></li></a>
                    <a href=""><li><img src={Icons2} alt="" /></li></a>
                    <a href=""><li>|</li></a>
                    <a href=""><li><img src={Icons3} alt="" /><span style={{marginLeft: "15px"}}>User</span></li></a>
                    <a href=""><li><img style={{width:"16px", height:"16px"}} src={Icons4} alt="" /></li></a>
                </ul>
                </div>
            </div>
            <div className="presentation"></div>
        </header>
    )
}