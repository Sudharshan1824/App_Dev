import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia, TextField, Autocomplete } from '@mui/material';
import { styled } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import Slide from './components/Slider';
import Footer from './components/Footer';

// Styled components
const AppBarStyled = styled(AppBar)({
  backgroundColor: 'purple', // Dark background for contrast
  color: '#fff',
  padding: '10px 0',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow
});

const ToolbarStyled = styled(Toolbar)({
  justifyContent: 'space-between',
  alignItems: 'center',
});

const HeaderSection = styled('header')({
  textAlign: 'center',
  padding: '2rem 0',
  backgroundColor: '#f7c847',
});

const HeaderButton = styled(Button)({
  margin: '0 0.5rem', // Adjusted margin for spacing
  borderRadius: '20px', // Rounded corners
  backgroundColor: 'grey',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#333', // Slightly lighter on hover
  },
  transition: 'background-color 0.3s ease',
});

const HeaderLogo = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1.5rem',
  color: '#fff',
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
});

const LocationSearchContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  padding: '2rem 0',
});

const WhyChooseSection = styled('section')({
  textAlign: 'center',
  padding: '2rem 0',
  background: 'linear-gradient(to right,)', // Gradient background
  color: 'white',
});

const SectionTitle = styled(Typography)({
  color: 'black', // Adjust this color if needed
  textDecoration: 'underline',
});

const Section = styled('section')({
  textAlign: 'center',
  padding: '2rem 0',
});

const StyledCard = styled(Card)({
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  width: '100%',
  maxWidth: 280, // Adjusted width for cards
  margin: '0 auto', // Center the card horizontally
  backgroundColor: 'bisque', // Yellow background color
  color: '#000', // Text color to ensure readability on yellow background
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
  },
});

const StyledCardMedia = styled(CardMedia)({
  height: 200, // Adjust height to fit smaller cards
  transition: 'filter 0.3s ease',
  '&:hover': {
    filter: 'brightness(80%)',
  },
});

const locationOptions = [
  { label: 'Electrical Service', path: '/elec' },
  { label: 'Painting Service', path: '/pain' },
  { label: 'Bathroom Service', path: '/bathroom' },
  { label: 'Water Purify Service', path: '/water' },
  { label: 'AC Service', path: '/ac' },
  { label: 'Plumbing Service', path: '/plumb' },
  { label: 'Kitchen Service', path: '/kitchen' },
  { label: 'Gardening Service', path: '/garden' },
  { label: 'Home Cleaning Service', path: '/carpet' },
  { label: 'Car Wash', path: '/carwash' },
  { label: 'Refrigerator Service', path: '/tank' },
  { label: 'CCTV Service', path: '/cctv' },
];

function HomePage() {
  const navigate = useNavigate();

  const handleOptionSelect = (event, newValue) => {
    if (newValue) {
      navigate(newValue.path);
    }
  };

  return (
    <>
      <AppBarStyled position="static">
        <ToolbarStyled>
          <HeaderLogo>
            {/* Add logo here if available */}
            COMFORT CREW
          </HeaderLogo>
          <div>
            <Link to="/about">
              <HeaderButton color="inherit">About Us</HeaderButton>
            </Link>
            <Link to="/service">
              <HeaderButton color="inherit">Our Services</HeaderButton>
            </Link>
            <Link to="/contact">
              <HeaderButton color="inherit">Contact</HeaderButton>
            </Link>
            <Link to="/blogs">
              <HeaderButton color="inherit">Blogs</HeaderButton>
            </Link>
            <Link to="/cart">
              <HeaderButton color="inherit">Cart</HeaderButton>
            </Link>
            <Link to="/login">
              <HeaderButton color="inherit">Login</HeaderButton>
            </Link>
          </div>
        </ToolbarStyled>
      </AppBarStyled>

      <Container style={{ padding: '0 2rem', margin: '0 auto', maxWidth: '1200px' }}>
        <LocationSearchContainer>
          <Autocomplete
            options={locationOptions}
            getOptionLabel={(option) => option.label}
            onChange={handleOptionSelect}
            renderInput={(params) => <TextField {...params} label="Search Services" variant="outlined" />}
            style={{ width: 300 }}
          />
        </LocationSearchContainer>

        <Slide />

        <WhyChooseSection>
          <SectionTitle variant="h4" component="h2" gutterBottom>
            Why Choose Our Company For Your Home Repairs?
          </SectionTitle>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <StyledCard>
                <StyledCardMedia
                  component="img"
                  alt="High Quality"
                  image="https://blog.renovationfind.com/wp-content/uploads/2023/12/Handyman-Services-800x450-2.jpg"
                />
                <CardContent>
                  <Typography variant="h6" component="h3">
                    High Quality
                  </Typography>
                  <Typography component="p">
                    Our high-quality repairing services ensure that every job is completed with precision and care. We use top-grade materials and advanced techniques to guarantee durability and excellence in every repair. Trust us to enhance the longevity and performance of your home fixtures and appliances.
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StyledCard>
                <StyledCardMedia
                  component="img"
                  alt="Professionalism"
                  image="https://blog.renovationfind.com/wp-content/uploads/2023/12/Handyman-Services-800x450-2.jpg"
                />
                <CardContent>
                  <Typography variant="h6" component="h3">
                    Professionalism
                  </Typography>
                  <Typography component="p">
                    Experience unparalleled professionalism with our repairing services. Our skilled technicians are punctual, courteous, and dedicated to delivering superior craftsmanship. We pride ourselves on maintaining transparent communication and ensuring your complete satisfaction from start to finish.
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StyledCard>
                <StyledCardMedia
                  component="img"
                  alt="Flexibility"
                  image="https://blog.renovationfind.com/wp-content/uploads/2023/12/Handyman-Services-800x450-2.jpg"
                />
                <CardContent>
                  <Typography variant="h6" component="h3">
                    Flexibility
                  </Typography>
                  <Typography component="p">
                    Our flexibility in repairing services ensures that we work around your schedule, providing convenient and efficient solutions. Whether it's an urgent fix or a planned upgrade, we tailor our services to meet your unique needs and timing, ensuring minimal disruption to your daily routine and doing the best service.
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StyledCard>
                <StyledCardMedia
                  component="img"
                  alt="Certified"
                  image="https://blog.renovationfind.com/wp-content/uploads/2023/12/Handyman-Services-800x450-2.jpg"
                />
                <CardContent>
                  <Typography variant="h6" component="h3">
                    Certified
                  </Typography>
                  <Typography component="p">
                    Our certified repairing services guarantee that all work is performed by qualified and experienced professionals. We adhere to industry standards and regulations, ensuring safe and reliable repairs. Trust our certified experts to deliver exceptional results with every project and providing good service.
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          </Grid>
        </WhyChooseSection>

        <Section>
          <Typography variant="h4" component="h2" gutterBottom>
            Reliable, Trusted, and Professional Services
          </Typography>
          <Typography component="p" gutterBottom>
            Our team of professionals are here to provide top-notch services to keep your home in great condition.
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              { label: 'Electrical Service', image: 'https://cdn2.hubspot.net/hubfs/4495544/electrical-system-in-home.jpeg', path: '/elec' },
              { label: 'Painting Service', image: 'https://thepaintpeople.com/wp-content/uploads/2017/05/wallpainter.jpg', path: '/pain' },
              { label: 'Bathroom Service', image: 'https://i1.wp.com/i.pinimg.com/originals/19/f2/18/19f21857163adcee4349166af11ae145.jpg?w=1140&ssl=1', path: '/bathroom' },
              { label: 'Water Purify Service', image: 'https://tse1.mm.bing.net/th?id=OIP.u11XtOifLP1uRIaWmwxnIgHaHa&pid=Api&P=0&h=180', path: '/water' },
              { label: 'AC Service', image: 'https://depobagoesbangunan.com/wp-content/uploads/2021/11/0c0f926de3-ac-1-pkac-inverter-aqa-kcrv99wgw.jpg', path: '/ac' },
              { label: 'Plumbing Service', image: 'https://pinoybuilders.ph/wp-content/uploads/2020/09/thumbnail-7453a20af19e11ea80de0a28c9fc2713.jpeg', path: '/plumb' },
              { label: 'Kitchen Service', image: 'https://tse1.mm.bing.net/th?id=OIP.VQawv30nNtKcUjqo659jeAHaE7&pid=Api&P=0&h=180', path: '/kitchen' },
              { label: 'Gardening Service', image: 'https://www.theenglishgarden.co.uk/wp-content/uploads/2016/10/britains-best-lawn.jpg', path: '/garden' },
              { label: 'Home Cleaning Service', image: 'https://tse1.mm.bing.net/th?id=OIP.tMWyag0QEnQWKq29ffCbJAHaE8&pid=Api&P=0&h=180', path: '/carpet' },
              { label: 'Car Wash', image: 'https://websta.me/wp-content/uploads/2020/09/washing-car-2048x1367.jpg', path: '/carwash' },
              { label: 'Refrigerator Service', image: 'https://tse2.mm.bing.net/th?id=OIP.uAJBPgpMVrbQBgGYMM4rNgHaE8&pid=Api&P=0&h=180', path: '/tank' },
              { label: 'CCTV Service', image: 'https://irp-cdn.multiscreensite.com/34b75936/dms3rep/multi/stock-photo-technician-installing-cctv-camera-for-security-741405910.jpg', path: '/cctv' }
            ].map(service => (
              <Grid item xs={12} sm={6} md={3} key={service.label}>
                <StyledCard>
                  <StyledCardMedia
                    component="img"
                    alt={service.label}
                    image={service.image}
                  />
                </StyledCard>
                <Link to={service.path}>
                  <Button>
                    <Typography variant="h6" component="h3">
                      {service.label}
                    </Typography>
                  </Button>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Section>
      </Container>

      <Footer />
    </>
  );
}

export default HomePage;
