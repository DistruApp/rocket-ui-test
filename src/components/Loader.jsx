// Generic loader component
import React from 'react';
import loader from "../../styles/img/__loader.gif";

export default function Loader() {
   return(
      <img src={loader} alt="Loading..." />
   )
}