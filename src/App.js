import './App.css';
import {getData,getData1} from "./es6/Promise";

function App() {
      // getData();
      getData1().then(data => console.log(data)).catch(err => console.log(err));

    return (
    <div className="App">
    </div>
  );
}

export default App;
