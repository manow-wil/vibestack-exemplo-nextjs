export const metadata = { title: "Vibestack: exemplo Next.js" };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
