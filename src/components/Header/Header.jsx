import React from "react";
import "./Header.css";
import headerImg from "../../assets/images/header.avif";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header class="header bg-bright" id="header">
      <div class="container">
        <div class="header-content text-center">
          <h6 class="text-uppercase text-blue-dark fs-14 fw-6 ls-1">
            ONLINE RSUME BUILDER
          </h6>
          <h1 class="lg-title">
            Only 2% of resumes make it pas the first round. Be in the top 2%
          </h1>
          <p class="text-dark fs-18">
            Use professional field-tested resume templates that follow that
            exact 'resume rules' employers look for. Easy to use and done within
            minutes - try now for free!
          </p>
          <Link to="/resume" class="btn btn-primary text-uppercase">
            create my resume
          </Link>
          <img src={headerImg} alt="headerImg" />
        </div>
      </div>
    </header>
  );
}
