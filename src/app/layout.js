import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Chatbot from "../../components/Chatbot";
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
      <Chatbot />
    </html>
  );
}
