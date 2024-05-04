import React from "react";
import CommonHeading from "../common/CommonHeading";
import { roomItems } from "../data/data";

export default function Rooms() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <CommonHeading heading="Rooms" title="Rooms" subtitle="Explore our" />
        <div className="row g-4">
          {roomItems.map((room, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="room-item shadow rounded overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src={room.img} alt={room.name} />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                    {room.price}
                  </small>
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">{room.name}</h5>
                    <div className="ps-2">{room.star}</div>
                  </div>
                  <div className="d-flex mb-3">
                    {room.facilities.map((facility, idx) => (
                      <small key={idx} className="border-end me-3 pe-3">
                        {facility.icon}
                        {facility.quantity} {facility.name}
                      </small>
                    ))}
                  </div>
                  <p className="text-body mb-3">{room.description}</p>
                  <div>
                    <a href="" className="btn btn-sm btn-dark rounded py-2 px-4">
                      {room.darkbtn}
                    </a>
                    <a href="" className="btn btn-sm btn-primary rounded py-2 px-4">
                      {room.yellowbtn}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
