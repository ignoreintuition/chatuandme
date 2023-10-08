import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function StarredPage() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" gutterBottom>
          <h1>What is Chat U And Me?</h1>
          <p>
            It seems that in the digital age we have become accustomed to
            interfacing with our friends, our families, and our loved ones
            through technology. This has been a great way to connect with people
            regardless of distance. There are two sides to this coin, however.
          </p>
          <p>
            We have grown so accustomed to connecting through digital means
            sometimes we forget how to just have a conversation. We struggle to
            this of topics that will spark debate, discussion, and critical
            thinking. This is what Chat U And Me aims to help.
          </p>
          <p>
            Chat U And Me is an repository of topics that you and your
            partner/friends/family can draw topics from for discussion. What
            makes Chat U And Me unique is that, in addition to a curated list of
            topics we let you submit your own topics. These topics will be
            vetted by users who opt in for beta questions and rank them to be
            added to the general population.
          </p>
          <p>
            The result is an ever growing repository of questions to keep you
            engaged with your loved ones. Let's get back to face-to-face
            conversations. Let's connect with our loved ones again as humans.
            And let's stop having conversations with Artificial Intelligence
            and, instead, have conversations with Not-so-artificial
            intelligence.
          </p>
        </Typography>
      </Box>
    </Container>
  );
}
