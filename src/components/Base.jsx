import React from "react";
import Container from "react-bootstrap/esm/Container";
import Footer from "./Footer";
import Button from "react-bootstrap/esm/Button";
import { NavLink } from "react-router-dom";

const Base = ({
  title = "Page Title",
  description = "Page Descripiotn ",
  buttonName = "Shop",
  buttonFlag = false,
  buttonType = "primary",
  buttonLink = "/",
  children,
}) => {
  let MyStyle = {
    height: "200px",
  };
  return (
    <div>
      <Container
        fluid
        className="bg-dark text-white pg-5 text-center d-flex align-items-center justify-content-center"
        style={MyStyle}
      >
        <div>
          <h3 className="text-center">{title}</h3>
          <p className="text-center">{description && description}</p>
          {buttonFlag && (
            <Button as={NavLink} to={buttonLink} variant={buttonType}>
              {buttonName}
            </Button>
          )}
        </div>
      </Container>
      {/* In Child we will get the containt of other componets Whe have to pace the children
       prop bellow our Master pge containt and above footer */}
      {children}
      <Footer />
    </div>
  );
};

export default Base;
