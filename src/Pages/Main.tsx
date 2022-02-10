import { FC } from "react";
import { Grid } from "@mui/material";
import pullups from "../Images/Pullups.jpg";
import someExercise from "../Images/SomeExercise.jpg";
import CardComponent from "../UI/CardComponent";

const featureCardsInfo = [
  {
    featureName: "Watch exercise technique",
    description: "Technique and form are two totally different things. Technique is the way you perform an exercise in order to target specific muscle groups",
    image: pullups,
  },
  {
    featureName: "Create own sport tutorials",
    description:
      "Create own sport tutorials and earn money...",
    image: someExercise,
  },
];

const Main: FC = () => {
  return (

  
  <Grid component="main" sx={{height: "85vh"}} justifyContent="center" alignItems="center" container spacing={2}>
  {featureCardsInfo.map((e, i) => {
    return <Grid key={i} item><CardComponent name={e.featureName} description={e.description} picture={e.image} /></Grid>
  })}
  </Grid>
    );
};

export default Main;
