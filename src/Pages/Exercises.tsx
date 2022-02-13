import { FC, useState } from "react";
import CardComponent from "../UI/CardComponent";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import ExercisePost from "./ExercisePost";

const Exercises: FC = () => {
  const exercises = useSelector(state => state.exercises.exercises);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [exerciseToOpen, setExerciseToOpen] = useState<null | {}>(null);

  const postOpener = (clickedPost: object): void => {
      setExerciseToOpen(clickedPost);
      setIsOpen(true);
  };

  const postCloser = (): void => {
    setIsOpen(false);
  };

  return (
    <>
    <ExercisePost open={isOpen} exerciseToOpen={exerciseToOpen} postCloser={postCloser} />
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
            <div onClick={() => postOpener(e)}>
            <CardComponent
              name={e.exerciseName}
              description={e.description}
              picture={e.image}
            />
            </div>
          </Grid>
        );
      })}
    </Grid>
    </>
  );
};

export default Exercises;
