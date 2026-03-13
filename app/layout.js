import "./globals.css";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "BUTBIT",
  description: "Соціальна мережа BUTBIT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>

        {/* Google icons */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded"
          rel="stylesheet"
        />

        {/* бокова панель */}
        <Sidebar />

        {/* сторінки */}
        {children}

      </body>
    </html>
  );
}
