import { NavLink } from 'react-router-dom';
import s from './header.module.css';

function Header(props) {
    return (
      <>
        <header>
            <div class={s.container}> 
                <div className={"d-flex " + s.header_box}>
                    <div className={s.burger_button_container}><span className={s.burger_button}></span></div>
                    <div className={"d-flex " + s.header_container}>
                        <NavLink className={s.menu_btn} to={"/Home"}>Home</NavLink>
                        <NavLink className={s.menu_btn} to={"/films"}>Serials</NavLink>
                    </div>
                    <button>tmp</button>
                </div>
            </div>
        </header>
      </>
    );
  }
  
export default Header;