/*import React from "react";*/
import { FaSearch } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Learner_basic_details() {
  return (
    <div>
      <h2>Search Criteria</h2>
      <form>
        <div className="row">
          <div className="input-container">
            <label style={{ fontWeight: "bold" }}>
              Group ID:
              <input
                type="text"
                name="groupId"
                placeholder="Enter Group ID"
                required
              />
            </label>
          </div>
          <div className="input-container">
            <label style={{ fontWeight: "bold" }}>
              Group Name:
              <input
                type="text"
                name="groupName"
                placeholder="Enter Group Name"
                required
              />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-container">
            <label style={{ fontWeight: "bold" }}>
              Provider First Name:
              <input
                type="text"
                name="providerFirstName"
                placeholder="Enter Provider's First Name"
                required
              />
            </label>
          </div>
          <div className="input-container">
            <label style={{ fontWeight: "bold" }}>
              Provider Last Name:
              <input
                type="text"
                name="providerLastName"
                placeholder="Enter Provider's Last Name"
                required
              />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-container">
            <label htmlFor="service-dropdown" style={{ fontWeight: "bold" }}>
              Service Type:
            </label>
            <select id="service-dropdown">
              <option value="">--Select Service Type--</option>
              <option value="home-nursing">Home Nursing</option>
              <option value="physician">Physician</option>
              <option value="chiropractor">Chiropractor</option>
            </select>
          </div>
        </div>
        <p>*Please enter at least one value for the search criteria</p>
        <div className="row">
          <button type="submit" className="search-button">
            <FaSearch style={{ marginRight: "8px" }} />
            Search
          </button>
          <button type="submit" className="clear-button">
            <MdDelete style={{ marginRight: "8px" }} />
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
