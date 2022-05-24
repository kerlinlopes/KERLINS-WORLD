import { routes } from '../../routes/BaseRoutes';
import { Link } from 'react-router-dom';
import img from './Logo.module.scss';

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link to={routes.HOME}>
        <img
          src="/assets/solar-system.svg"
          alt=""
        ></img>
        <h1>KERLIN</h1>
      </Link>
    </div>
  );
};

export default Logo;
