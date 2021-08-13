import React, {useState , useEffect} from 'react'
import Astromatch_Inicial from './components/Inicial/Astromatch_Inicial';
import Astromatch_Matches from './components/Matches/Astromatch_Matches';

function App() {
  
const [ currentPage, setCurrentPage] = useState("Inicial")

  const changePage = (pageName) => {
     setCurrentPage(pageName) 
  }

 const choosePage = () => {
    switch (currentPage) {
      case "Inicial":
        return <Astromatch_Inicial mudarPagina={changePage}/>
      case "Matches":
        return <Astromatch_Matches mudarPagina={changePage}/>
    }
  } 

  return (
    <div>
        {choosePage()}
    </div>
  );
}

export default App;
