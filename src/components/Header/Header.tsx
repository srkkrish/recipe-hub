import { useNavigate } from 'react-router-dom'

import "./Header.css"
import recipeImage from "./../../assets/recipe.png"

const Header = ({ title }: any) => {
    const navigate = useNavigate(); // Get the navigate function from useNavigate

    const RouteToHome = () => {
        navigate('/');
    }

    const Logout = () => {
        navigate('/logout');
    }

    return (
        <header className='recipehub-header'>
            <div className="header-left">
                <img src={recipeImage} alt="Product List" height={35} width={35} onClick={() => RouteToHome()} />
                {title}
            </div>
            <div className="header-right">
                <span className="fa fa-sign-out-alt" title="Logout" onClick={() => Logout()}></span>
            </div>
        </header>
    );
}
export default Header;