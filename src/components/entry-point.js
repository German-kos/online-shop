import { React, useState, useEffect } from "react";
import axios from "axios";
import SignIn from "./sign-in";
import { SiteRouter } from "./site-router";
import PersistentDrawerLeft from "./drawer";

function EntryPoint(Props) {

  return (
    <>
      <PersistentDrawerLeft/>
    </>
  );
}
export default EntryPoint;
