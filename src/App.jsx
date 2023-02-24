
import { Provider } from 'react-redux';
import { Header } from './components/Header/Header.jsx';
import { Navigation } from './components/Navigation/Navigation.jsx';
import { Catalog } from './components/Catalog/Catalog.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { store } from './store/index.js';
import { ModalDelivery } from './components/ModalDelivery/ModalDelivery.jsx';

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <Navigation />
        <Catalog />
      </main>
      <Footer />
      <ModalDelivery />
    </Provider>
  )
}

export default App
