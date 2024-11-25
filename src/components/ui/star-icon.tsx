import { PropsWithChildren } from 'react';

interface StarIconProps {
  classname?: string;
}

export const StarIcon = ({
  children,
  classname,
}: PropsWithChildren<StarIconProps>) => {
  return <div className={classname}>{children}</div>;
};
