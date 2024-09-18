import React from 'react';
import theme from './src/global/theme'
import { ThemeProvider } from 'styled-components/native';
import { Dashboard } from './src/screens/Dashboard/Dashboard';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if(!fontsLoaded){
    return
  }
  return (
    <ThemeProvider theme={theme}>
      <Dashboard/>
    </ThemeProvider>
  );
}
