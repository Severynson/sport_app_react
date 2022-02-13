import { useForm } from "react-hook-form";
import { Box } from "@mui/system";
import { FC } from "react";
import { TextField, Button, TextareaAutosize, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { grey, red } from "@mui/material/colors";
import { Collections } from "@mui/icons-material";
const background = grey[200];
const errorColor = red[500];

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background,
        width: "400px",
        margin: "40px auto",
        padding: "10px",
        borderRadius: "15px"
    },
    createExerciseForm: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10
    },
    error: {
        color: errorColor        
    }
})

const CreateExercise: FC = () => {
    const classes = useStyles();

    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onChange",
    });

    const onSubmit: (object) => void = (data) => {
        console.log(data);
        alert(JSON.stringify(data));
        reset();
    };
  
    return (
     <Box className={classes.container}>
         <h2>Create a new one exercise:</h2>
        <form className={classes.createExerciseForm} onSubmit={handleSubmit(onSubmit)}>
      
  
        <TextField
          error={!!errors?.exerciseName}
          { ...register("exerciseName", {required: true}) }
          id="outlined-error-helper-text"
          
          label="Exercise name"
          helperText={errors?.exerciseName && "Required..."}
        />
        <TextField
          error={!!errors?.exerciseVideoLink}
          { ...register("exerciseVideoLink", {required: true}) }
          id="outlined-error-helper-text"
          label="Exercise video link"
          helperText={errors?.exerciseVideoLink && "Required..."}
        />
         <input
            { ...register("exerciseImage", {required: true}) }
            accept="image/*"
            style={{ display: "none" }}
            id="raised-button-file"
            name="exerciseImage"
            multiple
            type="file"
          />
          <label htmlFor="raised-button-file">
            <Button
              component="div"
              startIcon={<Collections />}
            >
              Uppload exercise picture
            </Button>
            <Typography color={errorColor}>{errors?.exerciseImage && "Exercise couldn't be posted without image!"}</Typography>
          </label>
         <TextareaAutosize
         { ...register("exerciseDescription", {required: true}) }
      aria-label="minimum height"
      minRows={5}
      placeholder="Describe exercises by stepts (using enter-space to Start a new step)."
      style={{ width: 200 }}
    />
        <Typography color={errorColor}>{errors?.exerciseDescription && "Description couldn't be empty!"}</Typography>
        <Button type="submit" variant="contained" disabled={!isValid}>Submit</Button>
        </form>
     </Box>
    );
};

export default CreateExercise;