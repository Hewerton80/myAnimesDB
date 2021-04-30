import { GlobalStyle } from "../assets/globalStyle";
import GlobalContainer from "../components/tanpletes/GlobalContainer";
import Providers from "../contexts";

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <GlobalStyle />
      <GlobalContainer>
        <Component {...pageProps} />
      </GlobalContainer>
    </Providers>
  )
}

export default MyApp
