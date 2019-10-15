import React, { Component } from 'react'
import BarraTitulo from './componentes/BarraTitulo'
import moment from 'moment'
import Grafica from './componentes/Grafica'
import Tabla from './componentes/Tabla'
import { white } from 'ansi-colors'
import Form from './componentes/Form'


moment.locale('es')
class App extends Component {
  state = {
    registros:[],
    modal:false
  };
  
  componentDidMount(){
    if(localStorage.getItem('registros')){
      const registros = JSON.parse(localStorage.getItem('registros'))
      this.setState({
        registros
      })
    }
  }
  aceptarRegistro=({fecha,peso})=>{
    const nuevoregistro=[+fecha,+peso]
    console.log(nuevoregistro);
    const newstateregistros=[...this.state.registros,nuevoregistro]
    localStorage.setItem('registros',JSON.stringify(newstateregistros))
    this.setState({
      registros:newstateregistros
    });
  }
  onCerrarForm=()=>{
    this.setState({
      modal:false
    })
  }
  reiniciarRegistros=()=>{
    localStorage.clear()
    this.setState({
      registros:[]
    });
  }
  render() {
    const btnAdd = {
      position:"absolute",
      top:"90%", 
      right:"2%",
      width:"5%",
      height:"9%"
    }
    return (    
      <div>
        <Form visible={this.state.modal}
        onAceptar={this.aceptarRegistro} onCerrar={this.onCerrarForm}
        />
        <BarraTitulo />
        <main>
          <div className="align-baseline">
            <h2>Registro Diario de Peso</h2>
          </div>
          <div className="row">
            <div className=" col  s6">
              <Grafica registros={this.state.registros} />
              <button type="button" className="btn btn-danger rounded" onClick={this.reiniciarRegistros}>Eliminar Registro</button>
            </div>
            <div className=" col  s6">
              <Tabla registros={this.state.registros} />
            </div>
          </div>
          <button type="button" className="btn btn-danger rounded-circle boton" style={btnAdd} 
           onClick={()=>this.setState({modal:true})}>
            <svg style={{color:white, width:10}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus"
            class="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 
            0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67
            0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg></button>
        </main>
      </div>
    )
  }
}
export default App;
