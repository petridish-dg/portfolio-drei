import type { AppProps } from 'next/app';
import 'the-new-css-reset/css/reset.css';

import Layout from '../common/UI/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
