import { useEffect, useState } from "react";
import "../index.css";
import axios from "axios";

export function Login(props) {
  return (
    <div className="form-container">
      <form className="login-form" onSubmit={props.setPass}>
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
          required
        />
        <input type="submit" name="logmein" className="login-fields" />
      </form>
    </div>
  );
}

