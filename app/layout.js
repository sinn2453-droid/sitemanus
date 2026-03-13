import "./globals.css";
import Sidebar from "../components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="uk">

      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded"
          rel="stylesheet"
        />
      </head>

      <body>

        {/* бокова панель */}
        <Sidebar />

        {/* контент сторінок */}
        {children}

      </body>

    </html>
  );
}
