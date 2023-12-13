import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./footerUI.module.css";
import {Icon} from "@mui/material";
import {Facebook, Instagram, Mail} from "@mui/icons-material";
import {Twitter} from "@material-ui/icons";

const Footer = () => {
    return (
        <footer>
            <div className={s.footer__container}>
                <div className={"d-flex justify-between"}>
                    <a className={s.teamImg} href={"https://gitlab.com/python-developers2055030"}>
                        <img className={s.footer__logo}
                             src="https://lh3.googleusercontent.com/H5vEyHrn-Wopcyw_RDyOIMtuDcj_Rv_o2Fa8-Iu_8LK3LsG28XcRa7J0HnjHMoXDUFvbUQ35NWWNFdzACDVEfruZ4jUC7Kp8wg=s0"
                             alt="python cucold developers team"/>
                    </a>
                    <div className={s.footer__links}>
                        <NavLink to = {"https://www.instagram.com/yagorka.js/"} targeti = "_blank" rel = "noopener noreferrer">
                            <Icon className={s.Icon} >
                                <Instagram className={s.Contact}/>
                            </Icon>
                        </NavLink>
                        <NavLink to = {"https://vk.com/egorka274"} target = "_blank" rel = "noopener noreferrer">
                            <Icon className={s.Icon}>
                                <Facebook className={s.Contact} />
                            </Icon>
                        </NavLink>
                        <NavLink to = {"mailto:tadeush.off@gmail.com"} target = "_blank" rel = "noopener noreferrer">
                            <Icon className={s.Icon}>
                                <Mail className={s.Contact}/>
                            </Icon>
                        </NavLink>
                        <NavLink to = {"https://www.youtube.com/watch?v=tfn-59fbNMQ&list=PLDyJYA6aTY1lpbNh66kFpF62QpJyzliT2"} target = "_blank">
                            <Icon className={s.Icon}>
                                <Twitter className={s.Contact}/>
                            </Icon>
                        </NavLink>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;