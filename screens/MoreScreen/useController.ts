import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { NavigationProp } from 'navigation/NavKeys';
import { AppDispatch, RootState } from 'store/index';
import { logoutUser } from 'actions/common';

const useController = () => {

    const navigation = useNavigation<NavigationProp>()
    const dispatch = useDispatch<AppDispatch>()
    const { userData } = useSelector((state: RootState) => state.session)

    const onLogoutPress = async () => {
        dispatch(logoutUser())
    }

    return {
        userData,

        onLogoutPress,
    }
};

export default useController;
