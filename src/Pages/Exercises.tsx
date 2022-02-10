import { FC } from "react";
import CardComponent from "../UI/CardComponent";
import pushups from "../Images/Pushups.jpg";
import plank from "../Images/Plank.jpg";
import run from "../Images/Run.jpg";
import { Grid } from "@mui/material";

const exercises = [
    {
        exerciseName: "Pushups",
        description: "It will pump your triceps and chest perfect!",
        image: pushups,
    },
    {
        exerciseName: "Run",
        description: "Classic cardio! Nothing unusual... But watch how to do that correct.",
        image: run,
    },
    {
        exerciseName: "Plank",
        description: "Perfect execise for your press!",
        image: plank,
    },
];

const Exercises: FC = () => {
  return (
    <Grid
      component="main"
      margin="20px auto"
      justifyContent="center"
      alignItems="center"
      container
      spacing={2}
    >
      {exercises.map((e, i) => {
        return (
          <Grid key={i} item>
            <CardComponent
              name={e.exerciseName}
              description={e.description}
              picture={e.image}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Exercises;
