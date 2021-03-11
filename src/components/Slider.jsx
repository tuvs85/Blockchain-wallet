import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 750,
    },
    margin: {
        height: theme.spacing(3),
    },
}));

const marks = [
    {
        value: 10,
        label: '10',
    },
    {
        value: 20,
        label: '20',
    },
    {
        value: 50,
        label: '50',
    },
    {
        value: 100,
        label: '100',
    },
    {
        value: 150,
        label: '150',
    },
    {
        value: 200,
        label: '200',
    }
];
function valuetext(value) {
    return `${value}`;
}
export default function DiscreteSlider({onChange}) {
    const classes = useStyles();
    const handleChange = (event, newValue) => {
        onChange(newValue);
    };
    return (
        <Slider
            className={classes.root}
            min={10}
            defaultValue={10}
            getAriaValueText={valuetext}
            onChange={handleChange}
            aria-labelledby="discrete-slider-custom"
            step={10}
            max={200}
            valueLabelDisplay="auto"
            marks={marks}
        />
    );
}
