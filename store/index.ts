import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PersistConfig,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from "redux-persist";

import rootReducer from 'reducers/index';
import rootSaga from 'sagas/index';

export type RootStateReducer = ReturnType<typeof rootReducer>;

type PersistConfigType = PersistConfig<RootStateReducer>;

const persistConfig: PersistConfigType = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loading'],
  whitelist: ['session']
};

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]

const persistedReducer = persistReducer<RootStateReducer>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActionPaths: ['onSuccess'],
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        immutableCheck: false
      },
    }).concat(middleware),
});

export const persistor = persistStore(store);

export const clearReduxData = async (): Promise<{ status: string; error?: any }> => {
  try {
    await persistor.flush();
    await persistor.purge();
    await persistor.flush();
    return { status: 'Clean success' };
  } catch (error) {
    return { status: 'Error clearing data', error };
  }
};

sagaMiddleware.run(rootSaga);

// clearReduxData()

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;