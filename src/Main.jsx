import { render } from "solid-js/web";
import "./index.css";
import App from "./App.jsx";

import {
  AionProvider,
  EchoProvider,
  LoremIpsumProvider,
  OpenAiProvider,
} from "./providers/index.js";

const renderer = (props) => {
  const element = document.getElementById("aion-ui");
  element.innerHTML = "";
  render(() => <App {...props} />, element);
  return element;
};

const Providers = {
  AionProvider,
  OpenAiProvider,
  EchoProvider,
  LoremIpsumProvider
};

export { Providers };

export default renderer;
