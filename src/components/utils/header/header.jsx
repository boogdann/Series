import {NavLink} from 'react-router-dom';
import s from './header.module.css';
import {useState} from 'react';
import Button from "@mui/material/Button";
import {useTranslation, Trans} from "react-i18next";

function Header(props) {
    const {t, i18n} = useTranslation();

    const LINKS_CLASS_NAME = "d-flex " + s.header_container + " "
    let [isShowen, setIsShowen] = useState(true)
    let [links_class_name, setClassName] = useState(LINKS_CLASS_NAME)

    const lngs = {
        ru: {nativeName: 'Русский'},
        en: {nativeName: 'English'}
    }

    function burger_click() {
        setIsShowen(!isShowen)
        let addiction = ""
        if (isShowen) {
            addiction = s.showen
        }
        setClassName(LINKS_CLASS_NAME + addiction)
    }

    return (
        <>
            <header>
                <div className={s.container}>
                    <div className={"d-flex " + s.header_box}>
                        <div className={s.burger_button_container}>
                            <span onClick={burger_click} className={s.burger_button}></span>
                        </div>
                        <div className={links_class_name}>
                            <NavLink className={s.menu_btn} to={"/Home"}>{t('header.home')}</NavLink>
                            <NavLink className={s.menu_btn} to={"/films"}>{t('header.films')}</NavLink>
                            <NavLink className={s.menu_btn} to={"https://github.com/boogdann/Series"}>{t('header.developers')}</NavLink>
                        </div>
                        <div>
                            {Object.keys(lngs).map((lng) => (
                                <Button variant="outlined" type="submit" key={lng}
                                        onClick={() => i18n.changeLanguage(lng)}
                                        disabled={i18n.resolvedLanguage === lng}
                                        style={{
                                            color: 'white',
                                            backgroundColor: i18n.resolvedLanguage === lng ? 'var(--main-yellow)' : 'transparent',
                                            marginLeft: '5px',
                                            maxWidth: '75px',
                                            fontSize: '12px',
                                        }}>
                                    {lngs[lng].nativeName}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;