// import { HashRouter, Route } from 'react-router-dom'
// import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from './App.module.scss'
import './App.scss';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import MainPage from './content/MainPage';
import BelotePage from './content/BelotePage';
import Navbar from './components/SiteComponents/Navbar';
import Footer from './components/SiteComponents/Footer';


const App = () => {
  return (
    <div className={styles.App}>
      <I18nextProvider i18n={i18n}>
        <div className={styles.content}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact
                path='/'
                element={<MainPage />}
              />
              <Route exact
                path='/belote/room/:roomID'
                element={<BelotePage />}
              />

            </Routes>
          </BrowserRouter>
        </div>
        <Footer />
      </I18nextProvider>
    </div>
  );
}

export default App;
