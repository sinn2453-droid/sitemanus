export const metadata = {
  title: "My Site",
  description: "My first Next.js site"
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
