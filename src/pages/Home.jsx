import { Box, Container, Grid } from '@mui/material';
import Hero from '../components/Hero';
import ChipBar from '../components/ChipBar';
import mocha1 from '../assets/mocha1.png';
import mocha5 from '../assets/mocha5.png';
import mocha3 from '../assets/mocha3.png';
import mocha4 from '../assets/mocha4.png';

import Card from '../components/Card';

export default function Home() {
  return (
    <Box
      className="Home"
      sx={{
        bgcolor: 'primary',
        minHeight: '100vh',
      }}
    >
      <Hero />
      <Container>
        <ChipBar />
        <Grid container mb={3} spacing={3}>
          <Card name="Caffe Mocha" sub="Deep foam" price="43" image={mocha1} />
          <Card name="Caffe Mocha" sub="Deep foam" price="43" image={mocha5} />
          <Card name="Caffe Mocha" sub="Deep foam" price="43" image={mocha3} />
          <Card name="Caffe Mocha" sub="Deep foam" price="43" image={mocha4} />
        </Grid>
      </Container>
    </Box>
  );
}
