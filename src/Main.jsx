import { render } from 'solid-js/web';
import './index.css';
import App from './App.jsx';

const RenderAppInstance = (id) => (props) => {

  const element = document.getElementById(id);

  if (import.meta?.env?.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
      'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    );
  }
  render(() => <App {...props} />, element);
}

window.RenderAppInstance = RenderAppInstance;
export default RenderAppInstance;
