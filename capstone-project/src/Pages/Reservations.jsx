import React from "react";
import { useState } from "react";

export const Reservations = () => {
  const [occasion, setOccasion] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Reservation Details: \nOccasion: ${occasion} \nDate: ${date} \nTime: ${time} \nGuests: ${guests}`
    );
    console.log("Reservation Submitted: ", { occasion, date, time, guests });
  };
  return (
    <section className="container d-flex justify-content-center align-items-center p-3">
      <div
        className="card shadow-lg p-5"
        style={{ borderRadius: "15px", maxWidth: "500px", width: "100%" }}
      >
        <h3 className="text-center mb-4">Reserve a Table</h3>
        <form onSubmit={handleSubmit}>
          {/* Occasion Dropdown */}
          <div className="form-group mb-3">
            <label htmlFor="occasion" className="form-label">
              Occasion
            </label>
            <select
              className="form-control"
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
            >
              <option value="">Select an occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Engagement">Engagement</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Date Input */}
          <div className="form-group mb-3">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          {/* Time Input */}
          <div className="form-group mb-3">
            <label htmlFor="time" className="form-label">
              Time
            </label>
            <input
              type="time"
              className="form-control"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>

          {/* Number of Guests Range */}
          <div className="form-group mb-3">
            <label htmlFor="guests" className="form-label">
              Number of Guests: {guests}
            </label>
            <input
              type="range"
              className="form-range"
              id="guests"
              min="1"
              max="20"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="form-group d-grid">
            <button
              type="submit"
              style={{
                backgroundColor: "#495E57",
                fontWeight: "bold",
                fontSize: "16px",
                color: "#A4D4C4",
              }}
            >
              Reserve
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Reservations;
