import { NavLink } from 'react-router-dom';
import s from './header.module.css';

function Header(props) {
    return (
      <>
        <header>
            <div class={s.container}> 
                <div>
                    <span className={"burger-button"}></span>
                    <div className={"d-flex header_container"}>
                        <NavLink to={"/Home"}>Home</NavLink>
                        <NavLink to={"/films"}>Serials</NavLink>
                    </div>
                </div>
            </div>
        </header>
      </>
    );
  }
  
export default Header;