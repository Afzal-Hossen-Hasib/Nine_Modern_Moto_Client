import React from "react";
import countries from "../../../Images/summary/country.png";
import projects from "../../../Images/summary/project.png";
import client from "../../../Images/summary/client.png";
import feedback from "../../../Images/summary/feedback.png";
import "./Summary.css";

const Summary = () => {
  return (
    <div>
      <div className="summary-title">
      <h1>Millions Business Trust Us</h1>
      <h4>Try To Understand Users Expectation</h4>
      </div>
      <div className="summary-div">
        <div class="row row-cols-2 row-cols-md-4 g-4">
          <div class="col">
            <div class="card h-100 first-card">
              <img src={countries} alt="" />
              <div class="card-body">
                <h5 class="card-title">72+</h5>
                <p class="card-text">Countries</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 first-card">
              <img src={projects} alt="" />
              <div class="card-body">
                <h5 class="card-title">535+</h5>
                <p class="card-text">Complete Projects</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 first-card">
              <img src={client} alt="" />
              <div class="card-body">
                <h5 class="card-title">277+</h5>
                <p class="card-text">Happy Clients</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 first-card">
              <img src={feedback} alt="" />
              <div class="card-body">
                <h5 class="card-title">437+</h5>
                <p class="card-text">Feedbacks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="summary-details">
            <div>
                <h2>Have Any Question About Us Or Get A <br /> Products Request?</h2>
                <p>Don't Hesitate To Contact Us.</p>

                <button className="request-button">Request For Quote</button>
                <button className="contact-button">Contact Us</button>
            </div>
      </div>
    </div>
  );
};

export default Summary;
