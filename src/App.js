import { Login } from "./components/login-prot";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { SiteRouter } from "./components/router-prot";
import ContinuousSlider from "./components/drawer-test";
//
function App() {
  const [user, setUser] = useState(undefined);
  const [token, setToken] = useState(false);
  //
  const setAuthenticatedUser = (e) => {
    e.preventDefault();
    axios.get("./files/users.json").then((res) => {
      setUser(
        res.data.find(
          (obj) =>
            obj.username.toLowerCase() === e.target[0].value.toLowerCase() &&
            obj.password === e.target[1].value
        )
      );
    });
  };
  //testing to see if user pulls obj from json
  useEffect(() => {
    console.log(user);
  }, [user]);
  //conditional render for logged in users
  if (user !== undefined) {
    return <SiteRouter authorized={token} />;
  }
  return (
    <>
      <div>
        <img src={require("../src/pfp/Capture.PNG")} />
        <Login setPass={setAuthenticatedUser} />
      </div>
    </>
  );
}

export default App;
