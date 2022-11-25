import clsx from 'clsx';

import { prefixedClassNames } from '../styles/utils';

export const navbarClasses = prefixedClassNames('Navbar', ['root', 'navbar']);

interface Props {
  classes?: typeof navbarClasses;
  className?: string;
}

const Navbar = ({ classes, className }: Props) => {
  return (
    <header className={clsx(className, classes?.root)}>
      <nav className={classes?.navbar}>Navbar</nav>
    </header>
  );
};

export default Navbar;
