import { React } from "react";
import "./ImageCard.css";
import { useNavigate } from "react-router-dom";

function ImageCard(props) {
  const navigate = useNavigate();
    return <div className="text-center" >
    <img src="1.jpg" className="rounded img-fluid "  onClick={()=>navigate("/form/address")}alt=""/>
  </div>
       
}

export default ImageCard;