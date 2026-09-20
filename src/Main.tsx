import ReactDom from 'react-dom/client';
import App from "./App";

function Main() {
    return (
        <div>
            <App />
        </div>
    );
}

const root = ReactDom.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <Main />
);