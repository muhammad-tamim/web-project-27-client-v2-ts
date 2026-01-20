import { useContext } from "react";
import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import LoadingSpinner from "../components/ui/LoadingSpinner";

type PrivateRouteProps = {
    children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const location = useLocation();
    const auth = useContext(AuthContext);

    if (!auth) return null;

    const { user, loading } = auth;

    if (loading) {
        return <LoadingSpinner minHScreen={'min-h-screen'}></LoadingSpinner>
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
