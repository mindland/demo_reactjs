import React from "react";
import { Route } from "react-router-dom";
import NavbarHome from "../../Components/NavbarHome";

function LayoutHome(props) {   // HOC la truyen component vao component khac 
  return (
    <>
      <NavbarHome />
      {props.children}
    </>
  );
}

const HomeTemplate = ({ Component, ...props }) => {   // chi truuyen duoc toi da la 3 props
  // boc tach du lieu

  return (
    <Route {...props} render={(propsComponents) =>    // render dung de lay lai cac thuoc tinh match cua props 
    <LayoutHome>
        <Component {...propsComponents}/>
    </LayoutHome>} />
  ); 

};

export default HomeTemplate;
