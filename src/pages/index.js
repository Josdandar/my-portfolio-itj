import { useRouter } from "next/router"
import { Button } from "@mui/material"
import styles from "../styles/Home.module.css"

export default function Home({name, summary}) {
  const router = useRouter();

  return (
    <section className={styles.Home}>
      <h1 className={styles.Name}>{name}</h1>
      <div className={styles.Summary}>{summary} </div>
      <div>
        <Button variant="contained" size="large" onClick={()=>router.push("/projects")}>Projects</Button>
      </div>
    </section>
  )
}

export async function getStaticProps() {
  //Get my data from a API 
  return {
    props: {
      name: "Jose De Anda",
      summary: "I am a Full-Stack Developer with proficiency in both Front-End and Back-End development."
    }
  }
}