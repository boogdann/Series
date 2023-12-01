import { NavLink } from 'react-router-dom';
import s from './header.module.css';
import { useState } from 'react';

function Header(props) {

    const LINKS_CLASS_NAME = "d-flex " + s.header_container + " "
    let [isShowen, setIsShowen] = useState(false)
    let [links_class_name, setClassName] = useState(LINKS_CLASS_NAME)

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
            <div class={s.container}> 
                <div className={"d-flex " + s.header_box}>
                    <div className={s.burger_button_container}>
                      <span onClick={burger_click} className={s.burger_button}></span>
                    </div>
                    <div className={links_class_name}>
                        <NavLink className={s.menu_btn} to={"/Home"}>Home</NavLink>
                        <NavLink className={s.menu_btn} to={"/films"}>Serials</NavLink>
                        <NavLink className={s.menu_btn} to={"/news"}>News</NavLink>
                    </div>
                    <button>Button</button>
                </div>
            </div>
        </header>
      </>
    );
  }
  
export default Header;