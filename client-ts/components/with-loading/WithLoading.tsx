import React, { FC } from "react";
import classes from "./WithLoading.module.scss";

interface Props {
  isLoading: boolean;
}

// P represents the props of the component that is passed into the HOC
export const WithLoading = <P extends object>(
  Component: React.ComponentType<P>
) => {
  const WithLoadingComponent: FC<Props> = ({ isLoading, ...props }) => {
    if (!isLoading) return <Component {...(props as P)} />;
    return (
      <div className={classes.loadingContainer}>
        <div className={classes.loadingSpinner}>
          <div className={classes.loading}>
            <div></div>
          </div>
        </div>
      </div>
    );
  };
  return WithLoadingComponent;
};
