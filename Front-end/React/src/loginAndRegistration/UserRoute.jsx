import React from "react";
import { Redirect, Route } from "react-router-dom";

function UserRoute({ component: Component, ...rest }) {
  const role = localStorage.getItem("role");

  return (
    <Route
      {...rest}
      render={(props) => {
        if (role === "user") {
          return <Component />;
        } else {
          return (
            <Redirect to={{ pathname: "", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
}

export default UserRoute;