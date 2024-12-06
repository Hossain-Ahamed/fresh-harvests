import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthProvider";

const useAuth = () => {
    const { user, isLoading, setIsLoading, loginByEmailPass ,signup} = useContext(AuthContext);
    return { user, isLoading, setIsLoading, loginByEmailPass, signup};
};

export default useAuth;