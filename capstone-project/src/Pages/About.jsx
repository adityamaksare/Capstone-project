import React from "react";
import TeamImage1 from "../Assets/TeamImage1.png";
import TeamImage2 from "../Assets/TeamImage2.png";

export const About = () => {
  return (
    <div>
      <div className="container p-0">
        <div className="row m-0 p-3">
          <div className="col-lg-6 col-md-6 col-sm-12 p-0 py-5 ">
            <img
              style={{ borderRadius: "10px" }}
              className="mb-3"
              src={TeamImage1}
              alt="team group"
            />
            <img
              style={{ borderRadius: "10px" }}
              src={TeamImage2}
              alt="team group"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 p-0 py-5">
            <h2
              className="mb-3"
              style={{
                fontFamily: "Karla",
                fontWeight: "bold",
                fontSize: "24px",
                color: "#495E57",
              }}
            >
              "Good food, good vibes, and great company."
            </h2>
            <p
              className="about-text"
              style={{ fontSize: "18px", maxWidth: "550px" }}
            >
              "Our love for food began in a small kitchen, where we spent
              countless hours experimenting with flavours and creating dishes
              that brought joy to our loved ones. Inspired by our travels and
              the vibrant food cultures we encountered, we dreamed of sharing
              our passion with the world. After years of planning and hard work,
              we finally opened the doors to Little Lemon. Our goal was to
              create a space where people could come together to enjoy delicious
              food, good company, and a warm atmosphere. We've faced challenges
              along the way, but our commitment to quality and our love for what
              we do has kept us going. Looking ahead, we're excited to continue
              exploring new culinary horizons and making a positive impact on
              our community. We invite you to join us on this journey and
              experience the magic of Little Lemon."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
