import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Routing from './config/routes';

function App() {
  return (
      <div className="App">
        <Routing />
      </div>

  );
}

export default App;
