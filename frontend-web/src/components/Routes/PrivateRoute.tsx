import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../../core/utils/auth';

type Props = {
  children: React.ReactNode;
  path: string;
  // allowedRoutes?: Role[];
}

const PrivateRoute = ({ children, path }: Props) => {
  return (
    <Route
      path={path}
      render={({ location }) => {

        if (!isAuthenticated()) {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )

        }
        //else if (isAuthenticated() ) {
        //   return (
        //     <Redirect
        //       to={{ pathname: "/" }}
        //     />
        //   )
        // }

        return children;

      }}
    />
  );
}

export default PrivateRoute;