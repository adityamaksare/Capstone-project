import React from "react";
import AboutImage1 from "../Assets/aboutImage1.jpg";
import AboutImage2 from "../Assets/aboutImage2.jpg";

export const AboutSection = () => {
  return (
    <div className=" container p-0 justify-content-center align-items-center">
      <div className="  container m-0 row" style={{ padding: "60px 0px" }}>
        <div className="about-section left-side col-lg-6 col-md-6 col-sm-12 p-0">
          <h1 className="little-lemon-heading">Little Lemon</h1>
          <h2 className="hero-chicago" style={{ color: "#495E57" }}>
            Chicago
          </h2>
          <article className="about-text mt-5">
            Mario and Adrian are talented chefs at Little Lemon, a renowned
            restaurant known for its exceptional cuisine. Mario, with his
            expertise in Italian dishes, brings a touch of classic elegance to
            the menu, creating dishes that are both authentic and innovative.
            His passion for fresh ingredients and attention to detail make each
            meal a memorable experience.
          </article>
        </div>
        <div
          className="rightside col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center"
          style={{ height: "fit-content" }}
        >
          <div
            className="image-container position-relative d-flex justify-content-center align-items-center"
            style={{ width: "350px", minHeight: "500px", overflow: "hidden" }}
          >
            <img
              src={AboutImage1}
              alt="andrio and mario"
              className="position-absolute"
              style={{
                width: "250px",
                minHeight: "270px",
                top: "50px",
                borderRadius: "20px",
                zIndex: 1,
              }}
            />

            <img
              src={AboutImage2}
              alt="andrio and mario"
              className="position-absolute aboutImage2"
              style={{
                width: "250px",
                minHeight: "270px",
                top: "200px",
                left: "90px",
                zIndex: 2,
                borderRadius: "20px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
