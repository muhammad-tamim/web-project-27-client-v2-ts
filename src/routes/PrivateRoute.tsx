import { useContext } from "react";
import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

type PrivateRouteProps = {
    children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const location = useLocation();
    const auth = useContext(AuthContext);

    if (!auth) return null;

    const { user, loading } = auth;

    if (loading) {
        return <span className="loading loading-spinner loading-xl"></span>;
    }

    if (!user) {
        return (
            <Navigate
                to="/sign-in"
                state={{ from: location.pathname }}
                replace
            />
        );
    }

    return children;
};

export default PrivateRoute;
