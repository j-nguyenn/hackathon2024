import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://unpkg.com/easymde/dist/easymde.min.css"
        />
        <script src="https://unpkg.com/easymde/dist/easymde.min.js"></script>
        <script src="./script.js" type="text/javascript" defer />
      </Helmet>
      <textarea id="my-text-area"></textarea>
    </>
  );
}

export default App;
