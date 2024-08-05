import "~/styles/globals.css";
import { type AppType } from "next/app";
// import { useState, useEffect } from "react";
import { AuthProvider } from "~/components/common/AuthContext";
// import EventAlertDialog from "~/components/EventAlertDialog";

const MyApp: AppType = ({ Component, pageProps }) => {
  // const [showModal, setShowModal] = useState<boolean>(false);

  // useEffect(() => {
  //   setShowModal(true);
  // }, []);

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };

  return (
    <AuthProvider>
      <main>
        {/* <EventAlertDialog show={showModal} onClose={handleCloseModal} /> */}
        <Component {...pageProps} />
      </main>
    </AuthProvider>
  );
};

export default MyApp;
