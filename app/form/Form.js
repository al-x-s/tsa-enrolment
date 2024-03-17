"use client";
import React from "react";
import { useMultiStepForm } from "../hooks/useMultiStepForm";
import { useRouter } from "next/navigation";
import { StudentDetails, ClientDetails } from "./pages";
import styles from "./form.module.css";

const INITIAL_DATA = {
  student_school: "",
  agree_tsa_terms: false,
  student_first_name: "",
  student_surname: "",
  previous_student: false,
  instrument: "",
  inst_other: "",
  student_grade: "",
  student_medical: "",
  tuition_type: "",
  client_name: "",
  relationship: "",
  client_street_address: "",
  client_city_suburb: "",
  client_state: "",
  client_postcode: "",
  client_email: "",
  hire_purchase_byo: "",
  inst_insurance: false,
  drivers_license_no: "",
  nearest_relative_name: "",
  nearest_relative_phone: "",
  main_earner_name: "",
  main_earner_mobile: "",
  main_earner_employer_name: "",
  main_earner_employer_phone: "",
  cc_payment_provider: "",
  cc_name: "",
  cc_number: "",
  cc_expiry: "",
  cc_ccv: "",
  bank_country: "",
  bank_name: "",
  bank_street_address: "",
  bank_city_suburb: "",
  bank_state: "",
  bank_postcode: "",
  bank_bsb: "",
  bank_acc_name: "",
  bank_acc_number: "",
  agree_rental_terms: false,
  accessories: [],
};

const EnrolmentForm = ({ school }) => {
  const { push } = useRouter();
  const [data, setData] = React.useState({
    ...INITIAL_DATA,
  });

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { step, steps, currentStepIndex, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <StudentDetails {...data} updateFields={updateFields} />,
      <ClientDetails {...data} updateFields={updateFields} />,
    ]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();

    try {
      const response = await fetch("/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Registration was successful, handle success here
        console.log("Student enrolled!");
        push("/dashboard");
      } else {
        // Registration failed, handle errors here
        console.error("Enrolment failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const isDisabled = isFirstStep ? true : false;

  return (
    <div className={styles.container}>
      <form className={styles.form_wrapper} onSubmit={handleSubmit}>
        {step}

        <div className={styles.form_nav}>
          <button type="button" onClick={back} disabled={isDisabled}>
            Back
          </button>
          <div className="">
            {currentStepIndex + 1} / {steps.length}
          </div>
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
};

export default EnrolmentForm;
