import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <p>Hello! Please Log-In</p>
      <div className="">
        <p>
          Don't have an account yet? <a href="/signup">Sign up here</a>.
        </p>
      </div>
    </div>
  );
};
