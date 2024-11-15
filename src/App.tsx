import './App.css';
import Header from './components/ui/Header/Header';
import Widget from './components/Widget/Widget';

function App() {
  return (
    <>
      <Header title="Task Management" />
      <main className="container">
        <Widget />
      </main>
    </>
  );
}

export default App;
