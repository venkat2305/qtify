import { useEffect, useState } from 'react';
import { Typography, Button } from '@mui/material';
import axios from 'axios';
import Grid from '@mui/material/Grid';

import Card from '../Card/Card';
import styles from './Section.module.css';

export default function Section() {

    const [cardData, setCardData] = useState([])

    const getTopAlbums = async () => {
        try {
            const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top")
            setCardData(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTopAlbums()
    }, [])

    return (
        <div className={styles.section}>
            <div className={styles.sectionHeader}>
                <Typography
                    className={styles.sectionTitle}
                >
                    Top Albums
                </Typography>
                <Button className={styles.collapseBtn}>Collapse</Button>
            </div>

            <Grid container spacing={4}>
                {cardData.map((data) => (
                    <Grid item xs={12} sm={6} md={2} lg={2} key={data.id}>
                        <Card title={data.title} image={data.image} follows={data.follows} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}