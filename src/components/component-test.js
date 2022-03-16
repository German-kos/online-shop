//test for json get

import React, { useEffect, useState } from "react";
import axios from "axios";

export function Test(props) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios
      .get("./files/users.json")
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(()=>{
    console.log(user);
  },[user]
  )
  return <>{user?.Username}</>
}
