import { FC } from "react";
import CardComponent from "../UI/CardComponent";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

// interface Exercises {
//     exerciseName: string,
//     description: string,
//     image: any,
//     id?: string
//   };

// const exercises: Array<Exercises> = [
//     {
//         exerciseName: "Pushups",
//         description: "It will pump your triceps and chest perfect!",
//         image: pushups,
//     },
//     {
//         exerciseName: "Run",
//         description: "Classic cardio! Nothing unusual... But watch how to do that correct.",
//         image: run,
//     },
//     {
//         exerciseName: "Plank",
//         description: "Perfect execise for your press!",
//         image: plank,
//     },
// ];

const Exercises: FC = () => {
  const exercises = useSelector(state => state.exercises.exercises);

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
