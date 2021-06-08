import './styles.css';
import image from '../assets/react-logo.png';
import logo from '../assets/react-1.svg';

export const App = () => {
  return (
    <>
      <h1>Hello world</h1>;
      <img src={image} alt='React Logo' width='300' height='200' />
      <img src={logo} alt='React Logo Svg' width='300' height='200' />
    </>
  );
};
