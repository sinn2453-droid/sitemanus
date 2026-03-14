import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>

        {children}

        <Navbar />

      </body>
    </html>
  );
}
