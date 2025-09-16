import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Put in Dishwasher" />
      <Task title="Tidy" deadline="Today" description="Clean around" />
      <Task title="Laundry" deadline="Tomorrow" description="Fold laundry and put away">
        </Task>
        </div>
  );
}

export default App;
