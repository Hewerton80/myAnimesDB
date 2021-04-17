import { GlobalStyle } from "../assets/globalStyle";
import Providers from "../contexts";

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <GlobalStyle />
      <Component {...pageProps} />
    </Providers>
  )
}

export default MyApp
