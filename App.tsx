import React from 'react';
import { StatusBar } from 'react-native';
import { Home } from './src/pages/Home';
import { TemaAtualProvider } from './src/contexts/useTheme';

export default function App() {
  return (
    <>
      <TemaAtualProvider> 
      <StatusBar 
        backgroundColor="transparent" 
        translucent 
        barStyle="light-content" 
      />

      <Home />      
      </TemaAtualProvider> 
    </>
  );
}
