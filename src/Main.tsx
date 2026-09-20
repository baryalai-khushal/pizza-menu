import ReactDom from 'react-dom/client';

function Main() {
    return (
        <h1>Hello World</h1>
    );
}

const root = ReactDom.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <Main />
);