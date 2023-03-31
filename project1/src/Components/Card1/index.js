import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card1() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://blogger.googleusercontent.com/img/a/AVvXsEgT8qdGPeHZH9dpYk46TJkNsedP_YtM9sB9Cw7hoRn7rZ3hyy5BaEkbJJ4b2_yDP4PByoMT3_0D5IA-zHHR-BbgovzUgkWnOMLUxDPYmv0wfEGJ2g_euotGyh6mVSloTCbm3elV7AakAvNZFaSpq0o2tvxxo14X6v0uX2vkVtlS_nUzYdwccGSVBFjNVA=s16000"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          React JS
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

  }
  