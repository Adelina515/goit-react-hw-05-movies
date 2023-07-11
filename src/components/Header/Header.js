import Loader from 'components/loader/Loader';
import { Suspense } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import style from 'components/Header/Header.module.css';

const Header = () => {
  return (
    <div>
      <nav className={style.nav}>
        <NavLink className={Link} to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Header;
