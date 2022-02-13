import { FC } from "react";
import ReactDom from "react-dom";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { blue } from '@mui/material/colors';
import { Typography } from "@mui/material";
import { Exercise } from "../interfaces";
import CancelIcon from '@mui/icons-material/Cancel';
import ReactPlayer from "react-player";
const backgroundColor = blue[300];

interface propType {
    open: boolean,
    exerciseToOpen: null | Exercise,
    postCloser: () => void,
};

const useStyles = makeStyles({
    background: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backdropFilter: "blur(6px)",
    },
    postContainer: {
        position: "relative",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "800px",
        padding: "20px",
        backgroundColor,
        borderRadius: "15px",
    },
    player: {
        width: "700px"
    },
    videoContainer: {
        borderRadius: "15px",
        overflow: "hidden"
    },
    closeIcon: {
        position: "absolute",
        right: -10,
        top: -10,
        color: "black",
        backgroundColor: "red",
        borderRadius: "50%",
    },
});

const ExercisePost: FC<propType> = ({open, exerciseToOpen, postCloser}) => {
    const classes = useStyles();
    
    if (!open) return null;

    else return ReactDom.createPortal(
        <Box className={classes.background}>
            <Box className={classes.postContainer}>
        <CancelIcon onClick={postCloser} className={classes.closeIcon} fontSize="large" />
        <Box className={classes.videoContainer}><ReactPlayer width="100%" controls url={exerciseToOpen?.exerciseVideoLink} /></Box>
        <Typography variant="h3">{exerciseToOpen?.exerciseName}</Typography>
        <Typography variant="h5">{exerciseToOpen?.description}</Typography>
            </Box>
        </Box>,
        document.getElementById('portal')
    )
};

export default ExercisePost;