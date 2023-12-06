/* Components */
import React from "react";
import { Providers } from "@/app/store/providers";

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

export const metadata = {
  title: "Millionaire App",
};
