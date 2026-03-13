import "./globals.css";
import Sidebar from "./components/Sidebar"; // Переконайтеся, що шлях саме "./components/Sidebar"

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <head>
        {/* Підключення іконок для меню */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
