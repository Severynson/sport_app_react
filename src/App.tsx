import React, { FC } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";
import CreateExercise from "./Pages/CreateExercise";
import Exercises from "./Pages/Exercises";
import Main from "./Pages/Main";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/main" element={<Main />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/create-exercise" element={<CreateExercise />} />
            <Route path="/" element={<Navigate to="/main" />} />
            <Route path="*" element={<Navigate to="/main" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
