import { useState } from "react";
import questions from "./data";

const App = () => {
  const [activeId, setActiveId] = useState(null);

  function toggle(id) {
    // Si la pregunta ya está abierta, la cierra; si no, la abre
    setActiveId(activeId === id ? null : id);
  }

  return (
    <main>
      <div className="container">
        <h1>Questions</h1>

        {questions.map((question) => (
          <div className="question" key={question.id}>
            <header className="question">
              <h5>{question.title}</h5>
              <button
                onClick={() => toggle(question.id)}
                type="button"
                className="question-btn"
              >
                {activeId === question.id ? "−" : "+"}
              </button>
            </header>

            {/* Solo muestra el texto si el ID activo coincide con el de la pregunta */}
            {activeId === question.id && <p>{question.info}</p>}
          </div>
        ))}
      </div>
    </main>
  );
};

export default App;
