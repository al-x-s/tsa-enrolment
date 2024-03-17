import styles from "./page.module.css";
import prisma from "@/prisma/client";
import { redirect } from "next/navigation";

export default async function Home() {
  "use server";
  const schools = await prisma.school.findMany({
    select: { name: true },
  });

  const schoolNames = schools.map((school) => school.name);

  async function submitSchool(FormData) {
    "use server";
    const school = FormData.get("school");
    redirect(`/form/${school}`);
  }

  return (
    <main className={styles.main}>
      <h1>TSA Online Enrolment</h1>
      <form action={submitSchool}>
        <select autoFocus name="school">
          <option value="">Please Select</option>
          {schoolNames.map((school) => (
            <option key={school} value={school}>
              {school}
            </option>
          ))}
        </select>
        <button>Get Started</button>
      </form>
    </main>
  );
}
