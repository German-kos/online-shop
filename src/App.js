import { React, useState, useEffect } from "react";
import axios from "axios";
import SignIn from "./components/sign-in"
import EntryPoint from "./components/entry-point";
import { SiteRouter } from "./components/site-router";
//
function App() {
  const [user, setUser] = useState(undefined);

  const setAuthenticatedUser = (e) => {
    e.preventDefault();
    axios.get("./files/users.json").then((res) => {
      setUser(
        res.data.find(
          (obj) =>
            obj.username.toLowerCase() === e.target[0].value.toLowerCase() &&
            obj.password === e.target[2].value
        )
      );
    });
  };
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <SiteRouter formSubmit={setAuthenticatedUser} currentUser={user}/>
    </>
  );
}

export default App;
