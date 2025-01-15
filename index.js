import { ProxyAgent, setGlobalDispatcher } from "undici";

setGlobalDispatcher(new ProxyAgent("http://example.com:3128"));

fetch("http://www.github.com");
