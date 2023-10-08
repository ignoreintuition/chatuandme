"use client";
import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import BasicCard from "@/components/BasicCard";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function HomePage() {
  const { user, error, isLoading } = useUser();

  const [question, setQuestion] = React.useState();
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setQuestion(data.question);
      });
  }, []);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (user) {
    return (
      <div>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          
        >
          <Grid xs={6}>
            <BasicCard
              heading="Topic"
              text={question}
              onClick={() => {
                fetch("/api")
                  .then((res) => res.json())
                  .then((data) => {
                    setQuestion(data.question);
                  });
              }}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
