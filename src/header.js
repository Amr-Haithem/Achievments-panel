
import logo from './images/logoo.png';

const Header = () => {
    /*<div className="logoHolder"><img src={logo} ></img></div>*/
    return ( 
        <div className="header">
            <h1 className="titleHolder">Achievments Panel</h1>
            <div className="logoHolder"><img id="logo" src={logo} alt=""/>
            </div>

            
            
        </div>
        
     );
}
 
export default Header;