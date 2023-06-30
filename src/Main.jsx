import { render } from 'solid-js/web';
import './index.css';
import App from './App.jsx';

const renderer = (props) => {

  const element = document.getElementById('aion-ui');

  render(() => <App {...props} />, element);
}

if (typeof window !== 'undefined') {
  window.renderer = renderer;
} 

export default renderer;
