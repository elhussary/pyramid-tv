import { useRouter } from "next/router";
import AppLayout from "../components/Layout/AppLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AppLayout>
       <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
