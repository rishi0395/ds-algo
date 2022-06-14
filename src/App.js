import "./App.css";
import dsa from "./links";

function App() {
  return (
    <div>
      {dsa.map(({ question, url, moreInfo }, idx) => {
        return (
          <div
            key={idx}
            style={{
              padding: "10px 30px",
              borderStyle: "dashed",
              borderWidth: "2px",
              display: "flex",
            }}
          >
            <div style={{ paddingRight: "5px" }}>{idx + 1}</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <a target="_blank" href={url}>
                {question}
              </a>

              <div
                style={{
                  backgroundColor: "rgba(245,247,249,1.00)",
                  padding: "5px 0",
                }}
              >
                {moreInfo}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
