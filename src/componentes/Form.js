import 'react-datepicker/dist/react-datepicker.min.css'
import React from 'react'
import './Form.css'
import swal from 'sweetalert'
import DatePicker from 'react-datepicker'

export default class Form extends React.Component {
    state = {
        state: new Date(),
        peso: ""
    }
    onSubmit = () => {
        const { fecha, peso } = this.state;
        console.log(fecha, peso);
        if (!peso || isNaN(peso) ||  peso <= 0) {
            swal('Lectura invalida', 'El registro de peso deber ser valido', 'error')
        } else {
            this.props.onAceptar(this.state)
            swal({
                title: "Buen trabajo!",
                text: "Datos guardados!",
                icon: "success",
                button: "Ok!",
            });
        }
    };
    cambioFecha = fecha => {
        this.setState({ fecha });
    };
    cambiarPeso = evt => {
        this.setState({
            peso: evt.target.value
        })
    };
    render() {
        return (
            <form>
                <div className={`form-group scale-transition scale-out ${this.props.visible ? "scale-in":""} shadow p-3 mb-5  rounded  btn-info`}>
                    <label for="formGroupExampleInput" htmlFor="fecha">
                        Fecha:
                            <DatePicker
                            selected={this.state.fecha}
                            onChange={this.cambioFecha}
                        />
                    </label>
                    <br />
                    <label>
                        Peso:
                        <input
                            type="text"
                            name="peso"
                            value={this.state.peso}
                            onChange={this.cambiarPeso}
                            id="peso"
                        />
                    </label>
                    <br />
                    <input className="btn-success rounded enviar" type="button"  onClick={this.onSubmit} value="Agregar" />
                    <input className="btn-success rounded enviar" type="button"  onClick={()=>this.props.onCerrar()} value="Cerrar" />
                </div>
            </form>

        )
    }
}