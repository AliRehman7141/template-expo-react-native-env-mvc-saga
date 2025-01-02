import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import FlashMessage from 'react-native-flash-message';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import MainStack from 'navigation/index';
import appColors from 'utils/appColors';
import { persistor, store } from 'store/index';

const queryClient = new QueryClient();

LogBox.ignoreAllLogs(true);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: appColors.primary,
    secondary: appColors.secondary,
  },
};


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider theme={theme}>
            <StatusBar
              translucent={true}
              backgroundColor={"transparent"}
              barStyle={"dark-content"}
            />
            <MainStack />
          </PaperProvider>
          <FlashMessage position="top" floating={true} />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;