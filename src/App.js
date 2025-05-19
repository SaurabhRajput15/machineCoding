import { useState } from 'react';
import Accordion from './components/accordion/Accordion';
import Counter from './components/counter/Counter';
import CustomBackgroundColor from './components/customBackground/CutomBackgroundColor';
import DarkLightMode from './components/darkLightMode/DarkLightMode';
import DataFetching from './components/fetchData/DataFetching';
import ImageSlider from './components/image-slider/ImageSlider';
import MachineCode from './components/machineCode/MachineCode';
import About from './components/multiLanguage/About';
import Pagination from './components/pagination/Pagination';
import PasswordGenerator from './components/passwordGenerator/PasswordGenerator';
import SearchFilter from './components/searchFilter/SearchFilter';
import ShowHidePassword from './components/ShowHide/ShowHidePassword';
import Stopwatch from './components/Stopwatch/Stopwatch';
import TicTacToe from './components/tic,tac,toe/TicTacToe';
import Todo from './components/todo/Todo';
import SearchUi from './components/search-ui/SearchUi';
import Body from './components/shimmerUi/Body';
import OtpInput from './components/otpInput/OtpInput';
import CounterTwo from './components/counter/CounterTwo';
import TodoList from './components/todo/TodoList';
import ChipsInput from './components/chips/ChipsInput';

function App() {
  const [lang, setLang] = useState("en")

  return (
    <div className="App">
     <div style={{textAlign:"left", padding: "10px", paddingTop:"10px", backgroundColor:"gray", border:"none"}}>
      <select value={lang} onChange={e => setLang(e.target.value)}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="el">Spanish</option>
        <option value="ru">Russian</option>
      </select>
     </div>
      {/*
       <DragDrop /> 
       <Calculator />
       <TicTacToe />  
       <Counter /> 
       <CustomBackgroundColor /> 
       <DarkLightMode /> 
       <DataFetching />   
       <Practice /> 
       <InfiniteScroll /> 
       <Stopwatch /> 
       <SearchFilter />   
       <Todo /> 
       <ShowHidePassword />   
       <TicTacToe /> 
       <Todo /> 
       <ImageSlider />     
       <ShowHidePassword /> 
       <Accordion /> 
       <Body /> //Shimmer Ui  
       <Pagination />    
       <PasswordGenerator /> 
       <OtpInput /> 
       <MachineCode /> 
       <About lang={lang}/> 
       <SearchUi /> 
       <CounterTwo /> 
       <TodoList /> */} 
       <ChipsInput />
       
    </div> 
  );
}

export default App;
