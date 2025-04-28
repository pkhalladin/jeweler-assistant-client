import ReactDOM from 'react-dom/client';
import RestApiClient from './utils/RestApiClient';
import ApplicationComponent from './components/ApplicationComponent';
import "./index.css";

export let api = null;

async function main()
{
    if (process.env.REACT_APP_MODE === "render")
    {
        api = new RestApiClient('https://jeweler-assistant-server.onrender.com');
    }
    else
    {
        api = new RestApiClient('http://localhost:3001');
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<ApplicationComponent />);
}

main();
