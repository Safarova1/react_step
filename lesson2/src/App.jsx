import Authentication from "./components/Authentication";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import "./index.css";

function App() {
  return (
    <>
      <Header title="hello" />
      <Authentication />
      <Counter />
      <Card>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
        adipisci. Qui atque modi accusantium animi voluptates ullam quis
        explicabo dolorum.
      </Card>
      <Card>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
        adipisci. Qui atque modi accusantium animi voluptates ullam quis
        explicabo dolorum.
      </Card>
      <Header />
      <Card>
        <h2>Card Title</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </Card>
      <div
        onScroll={(e) => {
          console.log("e :>> ", e);
        }}
        onClick={(event) => {
          console.log("clicked on div", event);
        }}
      >
        hello
      </div>
    </>
  );
}

export default App;
