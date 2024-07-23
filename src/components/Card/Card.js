import styles from "./Card.module.css";
import { Typography, Chip } from '@mui/material';
import dummyImage from "./dummy.png";
// 
export default function Card({ title, image, follows , likes }) {
    const chipLabel = follows ? `${follows} follows` : `${likes} likes`
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <img src={image} className={styles.image} alt="Card" />
                <div
                className={styles.chipContainer}
                >
                    <Chip
                        label={chipLabel}
                        className={styles.followersCount}
                    />
                </div>
            </div>
            <Typography sx={{color: "white"}} className={styles.title}>{title}</Typography>
        </div>
    );
}
