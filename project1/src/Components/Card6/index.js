import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card6() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="https://1000logos.net/wp-content/uploads/2020/09/Java-Logo-640x400.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Java
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. 

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}