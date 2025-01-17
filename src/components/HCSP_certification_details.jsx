/*import React from "react";*/
export default function HCSP_certification_details() {
  return (
    <div>
      <h2>HCSP Certification Filters</h2>
      <form>
        <div className="row">
          <div className="input-container">
            <label>
              <input type="checkbox" name="medicationAdministration" />
              All
            </label>
          </div>
          <div className="input-container">
            <label>
              <input type="checkbox" name="medicationAdministration" />
              Medication Administration
            </label>
          </div>
          <div className="input-container">
            <label>
              <input type="checkbox" name="microCredentials" />
              Micro Credentials
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
