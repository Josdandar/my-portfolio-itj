import PageDescription from "@/components/PageDescription";
import { Grid } from "@mui/material";
import { Button } from "@mui/material"
import { useRouter } from "next/router"
import { Chip } from "@mui/material"
import { Stack } from "@mui/material"

export default function About({skills}){
    const router = useRouter();

    return (
        <section>
            <PageDescription title="About Me" description="Here you will find more information about me, what i do and my current skills"></PageDescription>

            <Grid container spacing={2}>
                <Grid item md={6}>
                    <h2>Get to know me!</h2>
                    <p>Full Stack Developer</p>
                    <p>Cool guy</p>
                    <div>
                    <Button variant="contained" size="large" onClick={()=>router.push("/contact")}>Projects</Button>
                    </div>
                </Grid>
                <Grid item md={6}>
                    <h2>My Skills</h2>
                    <Stack direction="row" spacing={2} useFlexWrap flexWrap="wrap">
                    {skills.map((skill) => <Chip key={skill} label={skill}/>)}
                    </Stack>
                    
                </Grid>
            </Grid>
        </section>
    )
};

export async function getStaticProps(){
    let skills = [];
    try {
        const response = await fetch("https://itj-skillset-jose-default-rtdb.firebaseio.com/")
        const data = await response.json();
        skills = data.split(",");
    } catch (error) {
        console.log(error);
    }

    return {
        props:  {
            skills,
        },
        revalidate: 30,
    };
}