import ReactDOM from 'react-dom/client';
import RestApiClient from './utils/RestApiClient';

async function main()
{
    let api = new RestApiClient('http://localhost:3001');

    if (process.env.REACT_APP_MODE === "render")
    {
        api = new RestApiClient('https://jeweler-assistant-server.onrender.com');
    }

    const response = await api.get("/ping");

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<h1>{response.message}</h1>);
}

main();
