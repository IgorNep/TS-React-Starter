import ClickCounter from './ClickCounter';
import '../assets/scss/index.scss';
import image from '../assets/images/react-logo.png';
import logo from '../assets/images/react-1.svg';
import Button from './components/Button';

export const App = () => {
  return (
    <>
      <h1>
        Hello world {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={image} alt='React Logo' width='300' height='200' />
      <img src={logo} alt='React Logo Svg' width='300' height='200' />
      <ClickCounter />
      <Button />
    </>
  );
};
