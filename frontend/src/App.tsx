import { Toaster } from 'react-hot-toast';
import { Router } from './routes';

import './App.css';

function App() {
    return (
        <>
            <Router />
            <Toaster />
        </>
    );
}

export default App;
