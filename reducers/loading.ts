import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { logoutUser } from 'actions/common';

interface LoadingState {
    isLoading: boolean;
    isInviteLoading: boolean;
    socialLoginLoading: boolean;
    resendLoading: boolean;
}

const initialState: LoadingState = {
    isLoading: false,
    isInviteLoading: false,
    socialLoginLoading: false,
    resendLoading: false,
};

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setInvite: (state, action: PayloadAction<boolean>) => {
            state.isInviteLoading = action.payload;
        },
        setResendLoading: (state, action: PayloadAction<boolean>) => {
            state.resendLoading = action.payload;
        },
        setSocialLoginLoading: (state, action: PayloadAction<boolean>) => {
            state.socialLoginLoading = action.payload;
        },
        resetLoading: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(logoutUser, () => initialState);
    },
});

export const {
    setLoading,
    setInvite,
    setResendLoading,
    setSocialLoginLoading,
    resetLoading,
} = loadingSlice.actions;

export default loadingSlice.reducer;
