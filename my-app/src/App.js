import ReactDOM from "react-dom/client";
import Layout from "./layout/layout";

export default function App() {
  return (
    <Layout>
    </Layout>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

