import { useState } from "react";
import Values from "values.js";
import SingleColor from "./SinglrColor";
function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15063").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={error ? "error" : null}
            type="text"
            value={color}
            placeholder="#f15025"
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="btn">generate</button>
        </form>
      </section>
      <section className="colors">
        {list.map((item, index) => (
          <SingleColor key={index} {...item} index={index} />
        ))}
      </section>
    </>
  );
}

export default App;
