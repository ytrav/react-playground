import * as React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import "./index.css";

// function App() {
//   return <Button variant="contained">Hello World</Button>;
// }

// ReactDOM.render(<App />, document.querySelector('#app'));

var index;

function But() {
  return <button>Helo</button>;
}

function dick() {
  document.getElementById("start").style.display = "none";
  if (index === "gae" || index !== "str") {
    document.getElementById("gae").style.display = "block";
    document.getElementById("str").style.display = "none";
  }
  // alert('Do you really?')
}

function puss() {
  // alert('Do you really?')
  document.getElementById("start").style.display = "none";
  if (index !== "gae" || index === "str") {
    document.getElementById("gae").style.display = "none";
    document.getElementById("str").style.display = "block";
  }
}

function CoolBut() {
  return (
    <div className="Butts">
      <Button
        sx={{
          margin: "10px",
          borderRadius: "10px",
          color: "#000",
          bgcolor: "#CAFFBF",
          "&:hover": {
            bgcolor: "#DDFFD6",
          },
        }}
        onClick={dick}
        variant="contained"
      >
        I like cocks
      </Button>
      <Button
        sx={{
          margin: "10px",
          borderRadius: "10px",
          color: "#000",
          bgcolor: "#CAFFBF",
          "&:hover": {
            bgcolor: "#DDFFD6",
          },
        }}
        onClick={puss}
        variant="contained"
      >
        I like pussy
      </Button>
      <div className="sheesh">
        <span id="start">Choose wisely.</span>
        <span id="gae">We respect that here</span>
        <span id="str">Dude, that's not cool</span>
        <div className="checks">
          <Checkbox sx={{
            color: "#96d289",
            '&.Mui-checked': {
              color: "#96d289",
            },
          }} defaultChecked label="I agree on donating my cum after I die."></Checkbox>
          <label>I agree on donating my cum after I die.</label>
        </div>
        
      </div>
    </div>
  );
}

class Page extends React.Component {
  render() {
    return <But />;
  }
}

class Counter extends React.Component {
  state = {
    value: 0,
  };
}

ReactDOM.render(<CoolBut />, document.getElementById("root"));
