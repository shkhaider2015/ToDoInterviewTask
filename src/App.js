import './App.css';
import { MenuAppBar } from './components/Navbar/Navbar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import { Steppers } from './components/Stepper/stepper';
import { StepperCard } from './components/StepperCard/stepperCard';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main : '#8d00de',
    },
    secondary: {
      main : '#ffb300',
    },
    error: {
      main : '#eb4034'
    }
  },
});

const brands = [
  "Technysm", "GLW Brand", "Haggerty"
]

const App = () => {

  return (
    <MuiThemeProvider theme={Theme} >
      <MenuAppBar />
      <Container maxWidth="lg" >
        <div>
          <h2 style={{ marginTop : '5%', marginBottom : '2%' }} >CV Shortlisted</h2>
        </div>
        {
          brands.map(
            (value, index) => <StepperCard title={value} />
          )
        }
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
