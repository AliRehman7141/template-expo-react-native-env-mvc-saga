import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';

import { AppDispatch, RootState } from 'store/index';
import { NavigationProp } from 'navigation/NavKeys';
import { LoginScreenErrors } from './models';
import { isEmailValid } from 'utils/appValidations';
import { signinRequest } from 'actions/session';
import { sessionChangeState } from 'reducers/session';

const initialErrorState = {
    email: "",
    password: "",
    general: ""
}

const useController = () => {

    const navigation = useNavigation<NavigationProp>()
    const dispatch = useDispatch<AppDispatch>()
    const { apiStatus } = useSelector((state: RootState) => state.session)

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true)
    const [errors, setErrors] = useState<LoginScreenErrors>()

    const isButtonActive = isEmailValid(email) && password.length > 5

    useEffect(() => {
        setErrors(initialErrorState)
    }, [email, password])

    const onContinuePress = async () => {
        // dispatch(signinRequest({
        //     payload: { email, password }
        // }))
        dispatch(sessionChangeState({ isSignedIn: true }))
    }

    const onEyePress = () => {

    }

    return {
        isLoading: apiStatus === "loading",
        email,
        errors,
        password,
        isButtonActive,
        isPasswordVisible,

        setEmail,
        onEyePress,
        setPassword,
        onContinuePress,
        setIsPasswordVisible,
    }
};

export default useController;
