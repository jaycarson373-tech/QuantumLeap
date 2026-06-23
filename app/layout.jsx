import './globals.css';

export const metadata = {
  title: 'QuantumLeap | Hourly Timeline Arena',
  description:
    'QuantumLeap is an isometric multiplayer GameFi arena where LEAP holders choose decade floors and split hourly rewards when their era is drawn.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
