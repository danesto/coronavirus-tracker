import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

import cx from 'classnames';
import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if(!confirmed) {
        return 'Loading...';
    }

    return (
        <div className={styles.container}> 
            <Grid container spacing={3} justify="center">
                
                {/* CARD 1 */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infectedCard)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases</Typography>
                    </CardContent>   
                </Grid>

                {/* CARD 2 */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recoveredCard)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">
                            Number of recovered cases
                        </Typography>
                    </CardContent>   
                </Grid>

                 {/* CARD 3 */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deathsCard)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths</Typography>
                    </CardContent>   
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;