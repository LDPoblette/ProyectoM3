import React from "react";
import { CardLayout } from "./styles";

function Card(props) {
    return (
      <CardLayout>{props.children}</CardLayout>
    );
  }
  
  export default Card;