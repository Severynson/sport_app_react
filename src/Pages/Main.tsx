import { FC } from "react";
import { Grid } from "@mui/material";
import pullups from "../Images/Pullups.jpg";
import someExercise from "../Images/SomeExercise.jpg";
import CardComponent from "../UI/CardComponent";
import { useNavigate } from "react-router-dom";

interface FeatureCardsInfo {
  featureName: string,
  description: string,
  image: any,
  id: string
};

const featureCardsInfo: FeatureCardsInfo[] = [
  {
    featureName: "Watch exercise technique",
    description: "Technique and form are two totally different things. Technique is the way you perform an exercise in order to target specific muscle groups",
    image: pullups,
    id: "e1",
  },
  {
    featureName: "Create own sport tutorials",
    description:
      "Create own sport tutorials and earn money...",
    image: someExercise,
    id: "e2",
  },
];

const Main: FC = () => {
  const navigate = useNavigate();

  const navigationOnClick: (string) => void = (card) => {
    if (card === "e1") navigate("/exercises");
    if (card === "e2") navigate("/create-exercise");
  };

  return (
  <Grid component="main" height= "85vh" justifyContent="center" alignItems="center" container spacing={2}>
  {featureCardsInfo.map((e) => {
    return <Grid key={e.id} onClick={() => navigationOnClick(e.id)} item><CardComponent  name={e.featureName} description={e.description} picture={e.image} /></Grid>
  })}
  </Grid>
    );
};

export default Main;
