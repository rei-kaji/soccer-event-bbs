import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Explanation from '../Explanation.jsx';
import Cards from '../Cards/Cards';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  wrapIcon: {
    alignItems: 'center',
    display: 'flex',
  },
}));

const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.4rem',
  },
};

function Detail(props) {
  const classes = useStyles();
  const { id } = useParams();
  const [event, setEvent] = useState('');

  useEffect(() => {
    const res = props.EventDataList.filter((event) => {
      return event.id === Number(id);
    });
    setEvent(res[0]);
  }, [props, id]);

  return (
    <ThemeProvider theme={theme}>
      <Cards EventDetail={event} />
      <Explanation explanation={event.explanation} />
      <Container maxWidth='sx'>
        <Box sx={{ height: 'auto', m: 2 }}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Typography
                    variant='h3'
                    component='div'
                    className={classes.wrapIcon}
                    lineHeight={3}
                  >
                    We're now...
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id='filled-number'
                    label='people'
                    type='number'
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant='filled'
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Container>
      <Container sx={{ alignItems: 'center' }}>
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Button
            variant='contained'
            style={{
              maxWidth: '200px',
              minWidth: '200px',
              backgroundColor: '#AE303A',
            }}
          >
            Update
          </Button>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Detail;
