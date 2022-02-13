import pushups from "../Images/Pushups.jpg";
import plank from "../Images/Plank.jpg";
import run from "../Images/Run.jpg";
import { Exercise } from "../interfaces";
import { createSlice } from "@reduxjs/toolkit";

interface ExercisesSliceState {
exercises: Exercise[];
}

const initialState: ExercisesSliceState = {
exercises: [
    {
        exerciseName: "Push ups",
        description: "It will pump your triceps and chest perfect!",
        image: pushups,
        exerciseVideoLink: "https://www.youtube.com/watch?v=-T64FLsJnAU&ab_channel=ATHLEAN-X%E2%84%A2",
    },
    {
        exerciseName: "Run",
        description: "Classic cardio! Nothing unusual... But watch how to do that correct.",
        image: run,
        exerciseVideoLink: "https://www.youtube.com/watch?v=_kGESn8ArrU&ab_channel=GlobalTriathlonNetwork",
    },
    {
        exerciseName: "Plank",
        description: "Perfect execise for your press!",
        image: plank,
        exerciseVideoLink: "https://www.youtube.com/watch?v=Z90xpWvuUPs&ab_channel=emiwong",
    },
],
};

const exercisesSlice = createSlice({
    name: "exercises",
    initialState,
    reducers: {
        addExercise(state, action) {
            console.log(action.payload);
            state.exercises.push(action.payload);
        }
    }
});

export const {addExercise} = exercisesSlice.actions;
export default exercisesSlice.reducer;