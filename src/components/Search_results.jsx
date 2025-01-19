/* import React from "react"; */
import { HiCheckBadge } from "react-icons/hi2";

export default function Search_results() {
  const data = [
    {
      slno: 1,
      name: "Brown,S.Alice",
      service_type: "Home Nursing",
      group_name: "Syra Health",
      group_id: "PGID12345",
      phone_number: "(555) 123-4567",
      additional_certifications: "Micro Credentials",
    },
    {
      slno: 2,
      name: "Doe,John",
      service_type: "Physician",
      group_name: "Syra Health",
      group_id: "PGID12345",
      phone_number: "(555) 234-5678",
      additional_certifications: "Medication Administration",
    },
    {
      slno: 3,
      name: "Harry, Lan",
      service_type: "Chiropractor",
      group_name: "XYZ Health",
      group_id: "PGID67890",
      phone_number: "(555) 345-6789",
      additional_certifications: [
        "Micro Credentials",
        "Medication Administration",
      ],
    },
    {
      slno: 4,
      name: "Alice,Bob",
      service_type: ["Chiropractor", "Home Nursing"],
      group_name: "XYZ Health",
      group_id: "PGID67890",
      phone_number: "(555) 456-7890",
      additional_certifications: " ",
    },
    {
      slno: 5,
      name: "Avesta,Palm",
      service_type: ["Physician", "Home Nursing"],
      group_name: "Syra Health",
      group_id: "PGID12345",
      phone_number: "(555) 567-8901",
      additional_certifications: "Medication Administration",
    },
  ];

  const fieldNames = Object.keys(data[0]);

  return (
    <div>
      <h2>Search Results</h2>
      <table>
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Name</th>
            <th>Service Type</th>
            <th>Group Name</th>
            <th>Group ID</th>
            <th>Phone Number</th>
            <th>Additional Certifications</th>
            <th>HCSP Certifications</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              {fieldNames.map((field, i) => (
                <td key={i}>
                  {Array.isArray(user[field])
                    ? user[field].join(", ")
                    : user[field]}
                </td>
              ))}
              <td>
                <button type="button" className="hcsp-button">
                  <HiCheckBadge className="hcsp-icon" />
                  HCSP Certified
                </button>
              </td>
              <td>
                <button type="button" className="view-button">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
