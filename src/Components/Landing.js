import "./Landing.css";
import { useNavigate } from "react-router-dom";
/*import desktopImage from './pineapple-desktop.jpg';
import mobileImage from './pineapple-mobile.jpg';
import { useState, useEffect } from "react";*/
/*
const BackGrImage = () => {
   const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;

    return (
        <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
            <div className="App-content">
                <h1>Pineapples</h1>
                <p>They are good</p>
            </div>
        </div>
    );
};

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    },[]);

    return windowWidth;
};
*/

function Landing(){
    const navigate = useNavigate();
    return <div className="container-fluid lll">
           <img src="https://via.placeholder.com/500" className="img" alt=""/>

                <button className="btn btn-primary" onClick={()=>navigate("/form/login")}>View Girls </button>
            </div>
   
}      
export default Landing;