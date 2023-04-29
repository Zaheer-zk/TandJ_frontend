import Nav from '@/components/Nav';
import QtyContext from '@/lib/context';
import '@/styles/globals.css';
import { withUrqlClient } from 'next-urql';

function App({ Component, pageProps }) {
  return (
    <>
      <QtyContext>
        <Nav />
        <Component {...pageProps} />
      </QtyContext>
    </>
  );
}

export default withUrqlClient(() => ({
  url: process.env.NEXT_PUBLIC_BACKEND_API,
}))(App);
