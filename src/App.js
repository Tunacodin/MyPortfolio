import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';
import './App.css';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <Container maxWidth="lg" style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      {/* Header */}
      <Typography variant="h3" align="center" gutterBottom style={{ color: '#3f51b5' }}>
        Tuna Bostancıbaşı Portfolio
      </Typography>

      {/* Summary Section */}
      <Typography variant="h5" gutterBottom style={{ color: '#3f51b5' }}>
        Summary
      </Typography>
      <Typography variant="body1" paragraph style={{ color: '#555' }}>
        I am Tuna Bostancıbaşı, a final-year Computer Engineering student at Pamukkale University. I co-founded a software solutions company called OmTun Labs to create innovative IT solutions. I have expertise in JavaScript, C#, and React.js, and experience with image processing and mobile development.
      </Typography>

      {/* Projects Section */}
      <Typography variant="h5" gutterBottom style={{ color: '#3f51b5' }}>
        Projects
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <CardContent>
              <Typography variant="h6" style={{ color: '#3f51b5' }}>Parking System Project</Typography>
              <Typography variant="body2" paragraph style={{ color: '#555' }}>
                Developed a system to automate parking operations using image processing and license plate recognition.
                <ul>
                  <li>Frontend: React.js, React Native</li>
                  <li>Backend: Python</li>
                  <li>Database: Efficient structured database</li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Izmir Eventy Mobile App</Typography>
              <Typography variant="body2" paragraph>
                Developed a mobile app enabling users to track and discover events such as concerts and exhibitions in Izmir.
                <ul>
                  <li>Mobile: React Native</li>
                  <li>API: Integrated Izmir Open Source API</li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Apartment Management App</Typography>
              <Typography variant="body2" paragraph>
                Streamlined communication and operations between tenants and landlords.
                <ul>
                  <li>Frontend: React Native (Expo)</li>
                  <li>Backend: .NET Core</li>
                  <li>Database: MS SQL Server</li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Skills Section */}
      <Typography variant="h5" gutterBottom style={{ color: '#3f51b5' }}>
        Skills & Technologies
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3} style={{ color: '#555' }}>JavaScript</Grid>
        <Grid item xs={6} md={3} style={{ color: '#555' }}>C#</Grid>
        <Grid item xs={6} md={3} style={{ color: '#555' }}>React.js</Grid>
        <Grid item xs={6} md={3} style={{ color: '#555' }}>React Native</Grid>
        <Grid item xs={6} md={3} style={{ color: '#555' }}>.NET Core</Grid>
        <Grid item xs={6} md={3} style={{ color: '#555' }}>SQL Server</Grid>
        <Grid item xs={6} md={3} style={{ color: '#555' }}>Material-UI</Grid>
        <Grid item xs={6} md={3} style={{ color: '#555' }}>Tailwind CSS</Grid>
      </Grid>

      {/* Contact Section */}
      <Typography variant="h5" gutterBottom style={{ color: '#3f51b5' }}>
        Contact
      </Typography>
      <Typography variant="body1" style={{ color: '#555' }}>
        Email: bostancibasituna58@gmail.com
      </Typography>
      <Typography variant="body1" style={{ color: '#555' }}>
        LinkedIn: <a href="https://www.linkedin.com/in/tuna-bostancibasi/" style={{ color: '#3f51b5' }}>Tuna Bostancıbaşı</a>
      </Typography>
      <Typography variant="body1" style={{ color: '#555' }}>
        GitHub: <a href="https://github.com/Tunacodin" style={{ color: '#3f51b5' }}>Tunacodin</a>
      </Typography>
      <Typography variant="body1" style={{ color: '#555' }}>
        Website: <a href="https://tunabostancibasi.com" style={{ color: '#3f51b5' }}>tunabostancibasi.com</a>
      </Typography>
    </Container>
  );
}

export default App;
