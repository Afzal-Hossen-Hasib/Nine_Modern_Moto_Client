import React from "react";
import "./MyProtfolio.css";
import myImg from "../../../Images/myImg/shape-7.png";

const MyProtfolio = () => {
  return (
    <div className="portfolio-div mt-5">
      <h1 className="review-title">My portfolio</h1>
      <div className="about_me_content">
        <div className="my_img">
          <img src={myImg} alt="" />
        </div>

        <div className="about_me_info">
          <div className="educationa_info">
            <p>
              Name: <span>Afzal Hossen Hasib</span>
            </p>
            <p>
              Email: <span>ahhasib47@gmail.com</span>
            </p>
            <p>
              Mobile: <span>01740233993</span>
            </p>
            <p>
              Graduation:{" "}
              <span>
                National University of Bangladesh (BBA in Accounting) 2018
              </span>{" "}
            </p>
            <p>
              Post Graduation:
              <span>
                National University of Bangladesh (MBA in Accounting) 2022
              </span>
            </p>
            <p>
              PGD: 
               <span>
                 Bangladesh Agricultural University (PGD in IT) 2022-Present
              </span>
            </p>
          </div>

          <div className="skills">
            <h3>Programming Skills</h3>
            <p>
              I started my web development journey from the beginning of 2022
              and learned the following skills:
            </p>
            <ul>
              <li>html</li>
              <li>css</li>
              <li>tailwind css</li>
              <li>bootstrap</li>
              <li>javascript</li>
              <li>react js</li>
              <li>redux</li>
              <li>node js</li>
              <li>express js</li>
              <li>mongodb</li>
              <li>firebase</li>
              <li>git</li>
              <li>vs code</li>
            </ul>
          </div>

          <div>
              <h3>My Project Link</h3>
              <ul>
                  <li><span>https://motor-mania-65f3c.web.app/</span></li>
                  <li>https://gym-trainer-871db.web.app/</li>
                  <li>https://a-bite-of-yummy.netlify.app/</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProtfolio;
