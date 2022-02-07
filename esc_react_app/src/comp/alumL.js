import { getActiveElement } from '@testing-library/user-event/dist/utils';
import React from 'react';

const alumL = ({alums, setlUp, alum}) => {

    const handleDeletealum = id =>{
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setlUp(true)
    }

    const handleDeletemat = id =>{
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setlUp(true)
    }

    let{nom_alum, aps_alum, matricula, carrera, nom_mat, promedio, semestre} = alum
    const handleUpalum = id =>{
        matricula = parseInt(matricula, 10)

        if (nom_alum === '' || aps_alum === '' || matricula <= 0 || carrera === ''){
            alert('Todos los campos deben estar llenos')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(alum)
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setlUp(true)
    }

    const handleUpmat = id =>{
        promedio = parseInt(promedio, 10)
        semestre = parseInt(semestre, 10)

        if (nom_mat === '' || promedio <= 0 || semestre <= 0){
            alert('Todos los campos deben estar llenos')
            return
        }

        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(alum)
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setlUp(true)
    }

    return ( 
       <table className='table'>
           <thead>
                <tr>
                    <th>Nombre(s) </th>
                    <th>Apellidos </th>
                    <th>Matricula </th>
                    <th>Carrera </th>
                    <th>Materia </th>
                    <th>Promedio </th>
                    <th>Semestre </th>
                </tr>
           </thead>
           <tbody>
               {alums.map(alum => (
                    <tr key={alum.id_alumnos} >
                        <td>{alum.nom_alum} </td>
                        <td>{alum.aps_alum} </td>
                        <td>{alum.matricula} </td>
                        <td>{alum.carrera} </td>
                        <td>{alum.nom_mat} </td>
                        <td>{alum.promedio} </td>
                        <td>{alum.semestre} </td>
                        <td>
                        <div className='mb-3'>
                                <button  onClick={() => handleUpalum(alum.id_alumnos)} className='btn btn-success'>Editar Alumno</button>
                            </div>
                        </td>
                        <td>
                            <div className='mb-3'>
                                <button onClick={() => handleUpmat(alum.id_materias)} className='btn btn-success'>Editar Materia</button>
                            </div>
                        </td>
                        <td>
                            <div className='mb-3'>
                                <button onClick={() => handleDeletealum(alum.id_alumnos)} className='btn btn-danger'>Borrar Alumno</button>
                            </div>
                        </td>
                        <td>
                        <div className='mb-3'>
                                <button onClick={() => handleDeletemat(alum.id_materias)} className='btn btn-danger'>Borrar Materia</button>
                            </div>
                        </td>
                    </tr>
               ))}
               
                
           </tbody>

       </table>
    );
}
 
export default alumL;