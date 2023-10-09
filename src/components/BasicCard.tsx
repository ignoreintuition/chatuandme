import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({
  heading,
  text,
  onClick,
}: {
  heading: string;
  text: string;
  onClick: Function;
}) {
  return (
    <Card  sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onClick()}>
          New Topic
        </Button>
      </CardActions>
    </Card>
  );
}
