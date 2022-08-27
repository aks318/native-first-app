import { useFonts } from 'expo-font';
import Navigator from './routes/homeStack';
import Home from './Screens/Home';
let customFonts = {
  'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
  'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf')
};

const App = () => {
  const [isLoaded] = useFonts(customFonts);
  if (!isLoaded) {
    return null
  }
    return <Navigator />;
}

export default App