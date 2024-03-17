"use client";
import React from "react";
import { PageWrapper } from "./PageWrapper";

const ClientDetails = ({
  client_name,
  relationship,
  client_street_address,
  client_city_suburb,
  client_state,
  client_postcode,
  client_email,
  hire_purchase_byo,
  updateFields,
}) => {
  return (
    <PageWrapper title="Your Details">
      <label htmlFor="client_name">Name</label>
      <input
        required
        // className="border shadow p-1"
        id="client_name"
        name="client_name"
        type="text"
        value={client_name}
        onChange={(e) => updateFields({ client_name: e.target.value })}
        autoFocus
      ></input>
      <label htmlFor="client_email">Email</label>
      <input
        required
        // className="border shadow p-1"
        id="client_email"
        name="client_email"
        type="text"
        value={client_email}
        onChange={(e) => updateFields({ client_email: e.target.value })}
      ></input>
      <label htmlFor="relationship">Relation To Student</label>
      <select
        value={relationship}
        required
        // className="border shadow p-1"
        name="relationship"
        id="relationship"
        onChange={(e) => updateFields({ relationship: e.target.value })}
      >
        <option value="">Please Select</option>
        <option value="Parent">Parent</option>
        <option value="Relative">Relative</option>
        <option value="Guardian">Guardian</option>
        <option value="Other">Other</option>
      </select>
    </PageWrapper>
  );
};

export default ClientDetails;
