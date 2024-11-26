import React from "react";
import "./SectionOne.css";
import { Link } from "react-router-dom";
import sectionOneImg from "../../assets/images/section1.svg";

export default function SectionOne() {
  return (
    <section class="section-one">
      <div class="section-one-content">
        <div class="section-one-left">
          <img src={sectionOneImg} alt="sectionOneImg" />
        </div>
        <div class="section-one-right text-center">
          <h2 class="lg-title text">Use the best resume maker as your guide!</h2>
          <p class="text">
            Getting that dream job can seem like an impossible task. We're here
            to change that. Give yourself a real advantage with the best online
            resume maker: created by experts, imporved by data, trusted by
            millions of professionals.
          </p>

          <Link to="/resume" class="btn btn-primary text-uppercase">
            create my resume
          </Link>
        </div>
      </div>
    </section>
  );
}
