import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface GifProps {
  url: string;
  title: string;
}

export default function Gif({ url, title }: GifProps) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        marginTop: '4rem',
        backgroundColor: '#252836',
        borderRadius: '.5rem',
      }}
    >
      <CardMedia component="img" height="200" image={url} alt="green iguana" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ color: 'white' }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
