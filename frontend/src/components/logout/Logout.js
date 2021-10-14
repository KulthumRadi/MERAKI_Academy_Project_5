import React from "react";
import { useHistory } from "react-router-dom";

export const Logout = () => {
  const history = useHistory();
  localStorage.clear();
  
  history.push("/home");

  return <div></div>;
};
