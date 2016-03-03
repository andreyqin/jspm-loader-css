import CSSLoaderBuilded from './CSSLoaderBuilded.js';
import CSSLoaderDOM from './CSSLoaderDOM.js';

const LoaderExtention = typeof window === 'undefined' ? CSSLoaderBuilded : CSSLoaderDOM;

export default LoaderExtention;