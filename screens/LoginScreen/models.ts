import { RouteProp } from "@react-navigation/native";

import { RootStackParamList } from "navigation/NavKeys";

type LoginScreenProps = {
    route: RouteProp<RootStackParamList, 'LoginScreen'>;
}


type LoginScreenErrors = {
    email?: string;
    password?: string;
}


export type {
    LoginScreenProps,
    LoginScreenErrors
}