import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./footer.module.css";
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
                            <Icon className={s.Icon} >
                                <Instagram className={s.Contact}/>
                            </Icon>
                            <Icon className={s.Icon}>
                                <Facebook className={s.Contact} />
                            </Icon>
                            <Icon className={s.Icon}>
                                <Mail className={s.Contact}/>
                            </Icon>
                            <Icon className={s.Icon}>
                                <Twitter className={s.Contact}/>
                            </Icon>
                        </div>
                    </div>
            </div>
        </footer>
    );
};

export default Footer;