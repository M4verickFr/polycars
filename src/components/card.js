import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import "../App.css";
  
const useStyles = makeStyles({
    root: {
        width: 100,
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 18,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function CardCar({car, cars, setCars}) {

    const classes = useStyles();

    const handleDelete = () => {
        
        // ... submit to API or something
        setCars(cars.filter((el) => el.id !== car.id));

    };

    return(

        <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            <b><span className={`"title" ${car.done ? "completed" : ''}`}> {car.title} </span></b>
          </Typography>
          <Typography variant="body2" component="p">
            {car.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleDelete}>Delete</Button>
        </CardActions>
        </Card>

        // <div>
        //     <span className={`"title" ${car.done ? "completed" : ''}`}> {car.title} </span>    
        // </div>
        
    );
}