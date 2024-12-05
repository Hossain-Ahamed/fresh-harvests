import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthProvider";

const useAuth = () => {
    const { user, isLoading, setIsLoading, loginByEmailPass } = useContext(AuthContext);
    return { user, isLoading, setIsLoading, loginByEmailPass };
};

export default useAuth;