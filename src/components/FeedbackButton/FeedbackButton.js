import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '@fontsource/poppins'; // Defaults to weight 400
// import styles from "./FeedbackButton.module.css";
import styles from "./FeedbackButton.module.css";

export default function FeedbackButton({ children }) {
    return (
        <Stack>
            <Button
                variant="contained"
                className={styles.feedbackButton}
                sx={{ textTransform: 'none' }}
            >
                {children}
            </Button>
        </Stack>
    )
}
