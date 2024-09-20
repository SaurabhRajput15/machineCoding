import './App.css';
import Accordian from './components/Accordian';
import Calculator from './components/Calculator';
import Carousel from './components/Carousel';
import Counter from './components/Counter';
import CustomBackgroundColor from './components/CustomBackgroundColor';
import DarkLightMode from './components/DarkLightMode';
import DataFetching from './components/DataFetching';
import DragDrop from './components/DragDrop';
import MachineCode from './components/MachineCode';
import PasswordGenerator from './components/PasswordGenerator';
import SearchFilter from './components/SearchFilter';
import Stopwatch from './components/Stopwatch';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
       {/* <Counter />
       <CustomBackgroundColor />
       <Stopwatch />
       <DarkLightMode />
       <SearchFilter />
       <DataFetching />
       <Carousel />
       <PasswordGenerator />
       <DragDrop /> 
       <TodoList />
       <Accordian />
       <Calculator />*/}
       <MachineCode />
    </div> 
  );
}

export default App;
