import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ThingsContext } from '../../context/Context';




export default function BasicCard( { data }) {
    const things = useContext(ThingsContext)
    console.log(things);
return (
<Card sx={{ minWidth: 275 }}>
{data.filter(item => item.name === 'Elvito').map((perro) => (
    <CardContent>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Codeworker
    </Typography>
    <Typography variant="h5" component="div">
        {perro.name}
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
    Descripción
    </Typography>
    <Typography variant="body2">
        {perro.skills}
        <br />
        {'"Great master Jedi"'}
    </Typography>
    </CardContent>
        ))}
    <CardActions>
    <Button size="small">Learn More</Button>
    </CardActions>
</Card>
);
}