import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, CardActions, FormControlLabel, Grid, Switch, Typography } from '@mui/material';

import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';

// ==============================|| PROFILE 1 - SETTINGS ||============================== //

const Settings = () => {
    const theme = useTheme();

    const [state1, setState1] = React.useState({
        checkedA: true,
        checkedB: false
    });
    const handleSwitchChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState1({ ...state1, [event.target.name]: event.target.checked });
    };

    return (
        <SubCard title="Email Settings">
            <Grid container direction="column" spacing={3}>
                <Grid item xs={12}>
                    <Grid container direction="column" spacing={0}>
                        <Grid item>
                            <Typography variant="subtitle1">Setup Email Notification</Typography>
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Switch checked={state1.checkedA} onChange={handleSwitchChange1} name="checkedA" color="primary" />
                                }
                                label="Email Notification"
                            />
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Switch checked={state1.checkedB} onChange={handleSwitchChange1} name="checkedB" color="primary" />
                                }
                                label="Send Copy To Personal Email"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <CardActions sx={{ p: 0, pt: 3 }}>
                <Grid spacing={2} container justifyContent="flex-end">
                    <Grid item>
                        <AnimateButton>
                            <Button variant="contained">Update</Button>
                        </AnimateButton>
                    </Grid>
                    <Grid item>
                        <Button sx={{ color: theme.palette.error.main }}>Clear</Button>
                    </Grid>
                </Grid>
            </CardActions>
        </SubCard>
    );
};

export default Settings;
