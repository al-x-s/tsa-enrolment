import React from "react";
import prisma from "@/prisma/client";
import styles from "./page.module.css";
import EnrolmentForm from "../Form.js";

export default async function Form({ params }) {
  const school = await prisma.school.findFirst({
    where: { name: decodeURI(params.school) },
    include: {
      programs: true,
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.nav}>{school.name}</div>
      <EnrolmentForm school />
      {/* <div className={styles.form}>
        <div>{school.id}</div>
        <div className={styles.page_nav}>PAGE NAVIGATION</div>
      </div> */}
    </div>
  );
}
