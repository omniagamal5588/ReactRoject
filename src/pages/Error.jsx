import { useRouteError } from "react-router-dom";
import React from 'react';
export function Error(){
    const error= useRouteError();
    return(
        <div className="alert alert-danger text-center  text-dark">
        <h2>{error.message}  <i className="bi bi-emoji-frown-fill "></i></h2>
        </div>
    )
}