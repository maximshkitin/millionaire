/* Components */
import { Providers } from '@/lib/providers';
// import { Nav } from './components/Nav'

/* Instruments */
import './styles/layout.scss';
import './styles/globals.scss';

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <section className="container">
            {/* <Nav /> */}

            <main className="main">{props.children}</main>

          </section>
        </body>
      </html>
    </Providers>
  );
}
