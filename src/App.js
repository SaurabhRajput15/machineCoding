import './App.css';
import Accordion from './components/accordion/Accordion';
import Calculator from './components/Calculator';
import Carousel from './components/Carousel';
import Counter from './components/counter/Counter';
import CustomBackgroundColor from './components/customBackground/CutomBackgroundColor';
import DarkLightMode from './components/darkLightMode/DarkLightMode';
import DragDrop from './components/DragDrop';
import DataFetching from './components/fetchData/DataFetching';
import MachineCode from './components/MachineCode';
import PasswordGenerator from './components/passwordGenerator/PasswordGenerator';
import SearchFilter from './components/searchFilter/SearchFilter';
import Stopwatch from './components/Stopwatch/Stopwatch';
import Todo from './components/todo/Todo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      {/*
       <Carousel />
       <DragDrop /> 
       <TodoList />
       <Calculator />
       <TicTacToe />  
       <Counter /> 
       <Stopwatch /> 
       <CustomBackgroundColor /> 
       <DarkLightMode /> 
       <Accordion /> 
       <PasswordGenerator /> 
       <DataFetching /> 
       <Todo />  
       <SearchFilter />  */}

       <MachineCode />
       

    </div> 
  );
}

export default App;
