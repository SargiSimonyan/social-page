import React from "react";
import { useLocation } from 'react-router-dom';
import './Personal.css';
import data from "./data";

function Personal () {
  const location = useLocation();
  const message = location.state?.message;
  return (
    <div className="container">
      Personal page of {data[message-1].name}
    </div>
  )
}

export default Personal 

 