import React from 'react';
import {NavLink} from "react-router-dom";
import s from "../footer/footer.module.css";
import {Icon} from "@mui/material";
import {Facebook, Instagram, Mail} from "@mui/icons-material";
import {Twitter} from "@material-ui/icons";

const Footer = () => {
    return (
        <footer>
            <div className={s.footer__container}>
                <div>
                    <div className={s.footer__block}>
                        <img className={s.footer__logo}
                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQEqX8S4P056LbpQIgHfwjg-WC6GcnJsJwIT8pmaNmw&s"
                             alt="logo"/>
                        <div className={s.footer__data}>
                            <div className={s.footer__column}>
                                <NavLink className={s.footer__btn} to={"/Home"}>Home</NavLink>
                                <NavLink className={s.footer__btn} to={"/films"}>Serials</NavLink>
                                <NavLink className={s.footer__btn} to={"/news"}>News</NavLink>
                            </div>
                            <div className={s.footer__column}>

                                <NavLink className={s.footer__btn} to={"/Home"}>Contacts</NavLink>
                                <NavLink className={s.footer__btn} to={"/films"}>можно ещё</NavLink>
                                <NavLink className={s.footer__btn} to={"/news"}>но я хз что</NavLink>
                            </div>
                        </div>
                        <div className={s.footer__links}>
                            <Icon color="primary">
                                <Instagram/>
                            </Icon>
                            <Icon color="primary">
                                <Facebook/>
                            </Icon>
                            <Icon color="primary">
                                <Mail/>
                            </Icon>
                            <Icon color="primary">
                                <Twitter/>
                            </Icon>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;