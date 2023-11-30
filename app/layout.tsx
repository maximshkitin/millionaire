/* Components */
import React from "react";
import { Providers } from "@/lib/providers";

/* Instruments */
import "./styles/layout.scss";
import "./styles/globals.scss";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <section className="container">
            <main className="main">{children}</main>
          </section>
        </body>
      </html>
    </Providers>
  );
}
