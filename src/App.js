import { ThemeProvider } from 'styled-components';
import { Route } from 'react-router-dom';
import './App.css';
import theme from './style/theme';
import MainPage from './page/MainPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Route path='/' exact component={MainPage} />
      </div>
    </ThemeProvider>
  );
}

export default App;
