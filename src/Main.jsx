import { render } from 'solid-js/web';
import './index.css';
import App from './App.jsx';

import { AionProvider, OpenAiProvider, EchoProvider, LoremIpsumProvider } from './providers/index.js';

const renderer = (props) => {

  const element = document.getElementById('aion-ui');

  render(() => <App {...props} />, element);
  return element
}

if (typeof window !== 'undefined') {
  window.renderer = renderer;
}

const Providers =  { AionProvider, OpenAiProvider, EchoProvider, LoremIpsumProvider }

export { Providers };

export default renderer;

