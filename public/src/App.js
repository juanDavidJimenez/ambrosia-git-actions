import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Usuarios from './usuarios/Usuarios';
import Navbar from './navegacion/Navbar'
import Conductor from './conductor/Conductor'
import Empleado from './empleado/Empleado'
import Vehiculo from './vehiculo/Vehiculo'
import PaginaPrincipal from './componentes/PaginaPrincipal'
import {PersonaServices} from './usuarios/PersonaService'

export  class App extends Component {
 
  render(){
      return (
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<PaginaPrincipal />} />
            <Route exact path='/usuario' element={<Usuarios />} />
            <Route exact path='/empleado' element={<Empleado />} />
            <Route exact path='/conductor' element={<Conductor />} />
            <Route exact path='/vehiculo' element={<Vehiculo />} />
          </Routes>
        </Router>
    )
  }
}
  


export default App;
/*
return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<PaginaPrincipal />} />
        <Route exact path='/usuario' element={<Usuarios />} />
        <Route exact path='/empleado' element={<Empleado />} />
        <Route exact path='/conductor' element={<Conductor />} />
        <Route exact path='/vehiculo' element={<Vehiculo />} />
      </Routes>
    </Router>
  )
*/