import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from './src/Redux/store';
import Router from './src/routes/router';

export default function App() {
  const [store, setStore] = useState(null);

  useEffect(() => {
    const load = async () => {
      const s = await createStore();
      setStore(s);
    };
    load();
  }, []);

  if (!store) return null; // أو Loading

  return (
    <Provider store={store}>
   <Router/>
    </Provider>
  );
}

    

