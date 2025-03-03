import { useNavigate } from 'react-router-dom'

import "./Logout.css"

const Logout = () => {
    const navigate = useNavigate(); // Get the navigate function from useNavigate

    const LoginAgain = () => {
        navigate('/')
    }

    return (
        <div className="logout-container">
            <div className="left">
                <div className="tablet">
                    <img src="https://cdn-icons-png.flaticon.com/512/483/483408.png" alt="Secure Icon" />
                    <p>Secure</p>
                </div>
            </div>
            <div className="right">
                <div className="logout-box">
                    <h2>You are Logged Out</h2>
                    <p>You have successfully logged out of the application</p>
                    <button onClick={() => LoginAgain()}>Login Again</button>
                </div>
            </div>
        </div>
    );
}

export default Logout;