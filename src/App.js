import './App.css';
import { MenuAppBar } from './components/Navbar/Navbar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Steppers } from './components/Stepper/stepper';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main : '#8d00de'
    },
    secondary: {
      main : '#e3a324'
    },
    error: {
      main : '#eb4034'
    }
  },
});

const App = () => {
  return (
    <MuiThemeProvider theme={Theme} >
      <MenuAppBar />
      <Container maxWidth="lg" >
        <Steppers />
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
