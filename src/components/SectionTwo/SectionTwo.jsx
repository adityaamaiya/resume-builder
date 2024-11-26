import React from "react";
import "./SectionTwo.css";
import feature1 from "../../assets/images/feature1.svg";
import feature2 from "../../assets/images/feature2.svg";
import feature3 from "../../assets/images/feature3.svg";

export default function SectionTwo() {
  return (
    <div class="section-two bg-bright">
      <div class="container">
        <div class="section-two-content">
          <div class="section-items">
            <div class="section-item">
              <div class="section-item-icon">
                <img src={feature1} alt="" />
              </div>
              <h5 class="section-item-title">
                Make a resume that wins interviews!
              </h5>
              <p class="text">
                Use our resume maker with its advanced creation tools to tell
                professional story that engages recruiters, hiring managers and
                even CEOs.
              </p>
            </div>

            <div class="section-item">
              <div class="section-item-icon">
                <img src={feature2} alt="" />
              </div>
              <h5 class="section-item-title">Resume writing made easy!</h5>
              <p class="text">
                Resume writing has never been this effortless. Pre-generated
                text, visual designs and more - all already integrated into the
                resume maker. Just fill in your details.
              </p>
            </div>

            <div class="section-item">
              <div class="section-item-icon">
                <img src={feature3} alt="" />
              </div>
              <h5 class="section-item-title">
                A recruiter-tested CV maker tool
              </h5>
              <p class="text">
                Our resume builder and its pre-generated content are tested by
                recruiters and IT experts. We help your CV become truly
                competitive in the hiring process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
