import { useState } from "react";
import Values from "values.js";
function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <ssection className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            placeholder="#f15025"
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="btn">generate</button>
        </form>
      </ssection>
      <section className="colors">
        <h4>List goes Here</h4>
      </section>
    </>
  );
}

export default App;
