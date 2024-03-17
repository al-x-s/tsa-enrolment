"use client";
import React from "react";
import { PageWrapper } from "./PageWrapper";
import styles from "../form.module.css";

const StudentDetails = ({
  student_school,
  agree_tsa_terms,
  student_first_name,
  student_surname,
  previous_student,
  instrument,
  inst_other,
  student_grade,
  student_medical,
  tuition_type,
  updateFields,
}) => {
  return (
    <PageWrapper title="Student Details">
      <label className={styles.label} htmlFor="student_first_name">
        First Name
      </label>
      <input
        required
        className={styles.input}
        id="student_first_name"
        name="student_first_name"
        type="text"
        value={student_first_name}
        onChange={(e) => updateFields({ student_first_name: e.target.value })}
        autoFocus
      ></input>
      <label className={styles.label} htmlFor="student_surname">
        Last Name
      </label>
      <input
        required
        className={styles.input}
        id="student_surname"
        name="student_surname"
        type="text"
        value={student_surname}
        onChange={(e) => updateFields({ student_surname: e.target.value })}
      ></input>
      <label className={styles.label} htmlFor="student_school">
        School
      </label>
      <select
        value={student_school}
        required
        className={styles.select}
        name="student_school"
        id="student_school"
        onChange={(e) => updateFields({ student_school: e.target.value })}
      >
        <option value="">Please Select</option>
        <option value="OLQP">OLQP</option>
        <option value="Arcadia PS">Arcadia PS</option>
      </select>
      <label className={styles.label} htmlFor="student_grade">
        Grade
      </label>
      <select
        value={student_grade}
        required
        className={styles.select}
        name="student_grade"
        id="student_grade"
        onChange={(e) => updateFields({ student_grade: e.target.value })}
      >
        <option value="">Please Select</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
    </PageWrapper>
  );
};

export default StudentDetails;
