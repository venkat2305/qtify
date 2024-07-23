import { useEffect, useState } from 'react';
import { Typography, Button } from '@mui/material';
import axios from 'axios';
import Grid from '@mui/material/Grid';

import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel'

import styles from './Section.module.css';

export default function Section({title,cardData}) {

    const [Collapse, setCollapse] = useState(false)

    return (
        <div className={styles.section}>
            <div className={styles.sectionHeader}>
                <Typography
                    className={styles.sectionTitle}
                >
                    {title}
                </Typography>
                <Button
                    className={styles.collapseBtn}
                    onClick={() => setCollapse(!Collapse)}
                    sx={{ textTransform: 'none' }}
                >
                    {Collapse ? "Collapse" : "Show All"}
                </Button>
            </div>

            {Collapse ? (
                <Grid container spacing={4}>
                    {cardData.map((data) => (
                        <Grid item xs={12} sm={6} md={2} lg={2} key={data.id}>
                            <Card title={data.title} image={data.image} follows={data.follows} />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <div>
                    <Carousel albumData={cardData} />
                </div>

            )}


        </div>
    )
}