import './globals.css'; // (или './global.css', если переименуешь)
import type { AppProps } from 'next/app';

// эта функция уже есть в новом проекте по-умолчанию!
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
