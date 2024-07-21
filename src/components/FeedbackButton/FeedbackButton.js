import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';
import '@fontsource/poppins'; // Defaults to weight 400
import styles from "./FeedbackButton.module.css"

export default function FeedbackButton({ children }) {
    // const styles = {
    //     borderRadius: "10px",
    //     color: "#34C94B",
    //     backgroundColor: "#121212",
    //     fontFamily: "Poppins",
    //     "&:hover": {
    //         backgroundColor: "#34C94B",
    //         color: "#121212"
    //     }
    // }

    return (
        <Stack>
            <Button
                variant="contained"
                // sx={styles}
                className={styles.feedbackButton}
            >{children}</Button>
        </Stack>

    )
}
