import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { logoutUser } from 'actions/common';

interface UserProfile {
  _id?: string;
  username?: string;
  email?: string;
  name?: string;
  picture?: string;
}

interface SessionState {
  isSignedIn: boolean;
  userData: UserProfile | null;
}


const initialState: SessionState = {
  isSignedIn: false,
  userData: null,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    sessionChangeState: (state, action: PayloadAction<Partial<SessionState>>) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutUser, () => initialState);
  },
});

export type { UserProfile, SessionState }

export const {
  sessionChangeState,
} = sessionSlice.actions;

export default sessionSlice.reducer;
