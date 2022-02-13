import { configureStore } from "@reduxjs/toolkit";
import exercisesReducer from "./exercisesSlice";

export default configureStore({
    reducer: {
        exercises: exercisesReducer,
    },
})