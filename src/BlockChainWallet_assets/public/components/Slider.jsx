import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';

const marks = [
    {
        value: 1,
        label: '1',
    },
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
export default function DiscreteSlider({onChange, value}) {
    const handleChange = (event, newValue) => {
        onChange(newValue);
    };
    // const handleInputChange = (event) => {
    //     onChange(event.target.value === '' ? '' : Number(event.target.value));
    // };
    return (
       <>
           <Grid container spacing={2} alignItems="center">
               <Grid item xs>
                   <Slider
                       style={{width: '375px'}}
                       min={marks[0].value}
                       defaultValue={marks[0].value}
                       getAriaValueText={valuetext}
                       onChange={handleChange}
                       aria-labelledby="discrete-slider-custom"
                       step={1}
                       max={200}
                       valueLabelDisplay="auto"
                       marks={marks}
                   />
               </Grid>
           </Grid>
       </>
    );
}
