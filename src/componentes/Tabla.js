import React from 'react';
import moment from 'moment';


export default ({ registros }) => {
    const renderFila = (registro) => {
        return (
            <tr key={registro[0]}>
                <td>{moment(registro[0]).format('LLLL')}</td>
                <td>{registro[1]}</td>
            </tr>
        )
    }
    return (
        <table className="table table-striped shadow p-3 mb-5  rounded  table-dark">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Fecha</th>
                    <th scope="col">Peso (lbs)</th>
                </tr>
            </thead>
            <tbody>
                {registros.map(registro => renderFila(registro))}
            </tbody>
        </table>

    );

};