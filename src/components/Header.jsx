import React from 'react';
import { Link } from 'react-router-dom';
import ControlServicios from './ControlServicios';

const Header = ({ servicios, servicio }) => {
  return (
    <>
      <header>
        <div>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1>Safe<span>Pets</span></h1>
          </Link>
        </div>
        <ControlServicios servicios={servicios} />
      </header>
    </>
  );
};

export default Header;
