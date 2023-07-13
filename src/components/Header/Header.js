import Loader from 'components/loader/Loader';
import { Suspense } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import style from 'components/Header/Header.module.css';

const Header = () => {
  const location = useLocation();
  const active = location.pathname === '/' ? 'active' : '';
  return (
    <div className={style.container}>
      <nav className={style.nav}>
        <NavLink className={`${style.link} ${style[active]} `} to="/" end>
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
