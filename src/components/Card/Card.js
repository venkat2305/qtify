import styles from "./Card.module.css";
import { Typography, Chip } from '@mui/material';
import dummyImage from "./dummy.png";

export default function Card({ title, image, follows }) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <img src={image} className={styles.image} alt="Card" />
                <div
                className={styles.chipContainer}
                >
                    <Chip
                        label={`${follows} follows`}
                        className={styles.followersCount}
                    />
                </div>
            </div>
            <Typography sx={{color: "white"}} className={styles.title}>{title}</Typography>
        </div>
    );
}
