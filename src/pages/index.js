import React from "react";
import Base from "../components/Base";
import Button from "react-bootstrap/esm/Button";
import { toast } from "react-toastify";

const Index = () => {
  const SuccessToast = () => {
    // toast is used to create a message
    toast.success("This is Ract Toastify Success", {
      // This objct with parameter also can be set on the <ToastContainer />
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <Base
      title="Home"
      description="Shop what you need , we provice best produc as per your need with wolds best disscounts "
      buttonFlag="True"
      buttonType="secondary"
    >
      <div className="text-center">
        <h2>This Poject is growing daily!!</h2>
        <h3>Stay tuned for a complete veriosn soon...</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam odio
          debitis aperiam placeat praesentium. Laboriosam temporibus deserunt
          nisi minima doloribus cupiditate culpa, omnis quibusdam consequatur
          laudantium itaque, quasi earum neque obcaecati consectetur voluptate
          dolores repellendus fugiat? Impedit laudantium perferendis magni
          voluptate qui pariatur minima similique, tempore, nisi consequuntur
          quasi nostrum! Praesentium iste rem assumenda aut provident omnis sunt
          explicabo!
        </p>
        <Button variant="success" onClick={SuccessToast}>
          Testing Tostify Success
        </Button>
      </div>
    </Base>
  );
};

export default Index;
