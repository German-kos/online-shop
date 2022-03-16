import { useEffect, useState } from "react";
import "../index.css";
import axios from "axios";

export function Login() {
  const [user, setUser] = useState(undefined);
  const Handler = (e) => {
    // if (e.target.name === "username") setUser((prev)=>{ return {...prev, username: e.target.value} });
    // if (e.target.name === "password") setUser((prev)=>{ return {...prev, password: e.target.value} });
    // setUser({username: e.target[0].value, password: e.target[1].value})
    // console.log(res.data.find( obj => obj.username === e.target[0].value && obj.password === e.target[1].value))
    e.preventDefault();
    axios.get("./files/users.json").then((res) => {
      // if(res.data.find(obj => obj.username === e.target[0].value && obj.password === e.target[1].value)!== null){
      setUser(
        res.data.find(
          (obj) =>
            obj.username === e.target[0].value &&
            obj.password === e.target[1].value
        )
      );
      // }
    });

    // setUser((prev) => {return {...prev, [e.target.name]: e.target.value}})
  };

  // useEffect(() => {
  //   if(user != undefined){
  //     return(
  //       <div>
  //         successs
  //       </div>
  //     )
  //   }
  // },[user]);
  if (user !== undefined) return <h1>Welcome, {user.username}</h1>;
  return (
    <div className="form-container">
      <form className="login-form" onSubmit={Handler}>
        <figure>
          user[0]: {user?.username}
          <br />
          user[1]: {user?.password}
        </figure>
        <input
          type="text"
          name="username"
          className="login-fields"
          placeholder="username"
        />
        <input
          type="text"
          name="password"
          className="login-fields"
          placeholder="password"
        />
        <input type="submit" name="logmein" className="login-fields" />
      </form>
    </div>
  );
}
