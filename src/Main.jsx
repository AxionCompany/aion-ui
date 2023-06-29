import { render } from 'solid-js/web';
import './index.css';
import App from './App.jsx';

const RenderAppInstance = (id) => (props) => {

  const element = document.getElementById(id);

  render(() => <App {...props} />, element);
}

if (typeof window !== 'undefined') {
  window.RenderAppInstance = RenderAppInstance;
}

export default RenderAppInstance;
