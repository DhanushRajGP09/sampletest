import logo from "./logo.svg";
import "./App.css";
import plus from "../../testfun/src/images/Pluse (1).png";
import minus from "../../testfun/src/images/minus (1).png";

function App() {
  const arrdata = ["abcd", "efg", "ijk"];

  const fillarr = [];
  const imagearr = [];
  const handleOther = (index) => {
    fillarr.push(`test${index}`);
    for (let i = 0; i < fillarr.length; i++) {
      if (fillarr[i] !== `test${index}`) {
        document.getElementById(`${fillarr[i]}`).style.display = "none";
      }
    }
    handleImage(index);
  };
  const handleImage = (index) => {
    imagearr.push(`icon${index}`);
    for (let i = 0; i < fillarr.length; i++) {
      if (imagearr[i] !== `icon${index}`) {
        document.getElementById(`${imagearr[i]}`).src = plus;
      }
    }
  };

  return (
    <div className="App">
      {arrdata.map((data, index) => {
        return (
          <>
            <div className="testComponent">
              <img
                src={plus}
                id={`icon${index}`}
                onClick={() => {
                  if (
                    document.getElementById(`test${index}`).style.display ==
                    "none"
                  ) {
                    document.getElementById(`test${index}`).style.display =
                      "flex";
                    document.getElementById(`icon${index}`).src = minus;
                  } else {
                    document.getElementById(`test${index}`).style.display =
                      "none";
                    document.getElementById(`icon${index}`).src = plus;
                  }

                  handleOther(index);
                }}
              ></img>

              <div className="innertest" id={`test${index}`}>
                {data}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default App;
