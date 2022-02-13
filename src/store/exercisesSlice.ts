import pushups from "../Images/Pushups.jpg";
import plank from "../Images/Plank.jpg";
import run from "../Images/Run.jpg";
import { createSlice } from "@reduxjs/toolkit";

interface Exercise {
    exerciseName: string,
    description: string,
    image: any,
    id?: string  
};

interface ExercisesSliceState {
exercises: Exercise[];
}

const initialState: ExercisesSliceState = {
exercises: [
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
],
};

const exercisesSlice = createSlice({
    name: "exercises",
    initialState,
    reducers: {
        addExercise(state, action) {
            state.exercises.push(action);
        }
    }
});

export const {addExercise} = exercisesSlice.actions;
export default exercisesSlice.reducer;