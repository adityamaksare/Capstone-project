import React from "react";
import testimonialData from "./Assets/testimonialData.json"; // Import the JSON data

const TestimonialCardComponent = ({ testimonial }) => {
  return (
    <div
      className="card"
      style={{
        maxWidth: "280px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={testimonial.image.src}
        alt={`${testimonial.name}'s testimonial`}
        className="card-img-top rounded-circle mx-auto mt-3"
        style={{ width: "94px", height: "94px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5
          className="card-title text-center mb-2"
          style={{ marginLeft: "85px", marginTop: "5px" }}
        >
          {testimonial.name}
        </h5>
        <p className="card-text text-muted">{`" ${testimonial.text} "`}</p>
      </div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <div className="container-fluid p-5" style={{ backgroundColor: "#FBDABB" }}>
      <div className="Testimonials-section container">
        <h2
          style={{
            fontFamily: "Markazi Text, serif",
            fontWeight: "500",
            fontSize: "40px",
          }}
          className="text-center p-0 "
        >
          Testimonials
        </h2>
        <div className="row" style={{ padding: "20px 60px" }}>
          {testimonialData.Testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
            >
              <TestimonialCardComponent testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
