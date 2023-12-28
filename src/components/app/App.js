import Link from "../link/Link";
import "./App.scss";
import {links} from "../../utils/links";

function App() {
  return (
    <div className="App">
      <h1>Анастасия Неведрова</h1>
      <p>Demo проектов</p>
      <ul>
        {links.map((link, index) => (
          <Link key={index} link={link} />
        ))}
      </ul>
    </div>
  );
}

export default App;
