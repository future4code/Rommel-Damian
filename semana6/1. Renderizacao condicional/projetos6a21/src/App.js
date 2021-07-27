import React from 'react';
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Finaliza from './components/Finaliza';



class App extends React.Component {

  state = {
    etapa : 1
  }

  renderizaEtapa = () =>{

    switch(this.state.etapa){
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Finaliza />;
    }

  }

  irParaProximaEtapa = () =>{
    switch(this.state.etapa){
    case 1:
      this.setState({etapa : this.state.etapa + 1})
    case 2:
      this.setState({etapa : this.state.etapa + 1})
    case 3:
      this.setState({etapa : this.state.etapa + 1})
    case 4:
      this.setState({etapa : this.state.etapa + 1})      
  }
  }

  


  render() {
  return (
    <div className="App">           
       {this.renderizaEtapa()}
       <br/>
      {this.state.etapa === 4 ?
        "" : <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>}
    </div>
  );
}
}

export default App;
