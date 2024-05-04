import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Book() {
  const [checkInDate, setCheckInDate] = useState(null); 
  const [checkOutDate, setCheckOutDate] = useState(null); 

  return (
    <>
      <div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
          <div className="bg-white shadow" style={{ padding: "35px" }}>
            <div className="row g-2">
              <div className="col-md-10">
                <div className="row g-2">
                  <div className="col-md-3">
                    <div className="date" id="date1" data-target-input="nearest">
                      <DatePicker
                        selected={checkInDate}
                        onChange={date => setCheckInDate(date)}
                        className="form-control"
                        placeholderText="Check in"
                      />
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="date" id="date2" data-target-input="nearest">
                      <DatePicker
                        selected={checkOutDate}
                        onChange={date => setCheckOutDate(date)}
                        className="form-control"
                        placeholderText="Check out"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <select className="form-select">
                      <option selected>Adult</option>
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select className="form-select">
                      <option selected>Child</option>
                      <option value="1">1 Child</option>
                      <option value="2">2 Children</option>
                      <option value="3">3 Children</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary w-100">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
