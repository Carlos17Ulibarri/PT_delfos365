import React from 'react';

const form = (alum, setAlum) => {

    const handleChange = e => {
        setAlum({
            ...alum, 
          [e.target.name]: e.target.value
        })
    }

    let{nom_alum, aps_alum, matricula, carrera, nom_mat, promedio, semestre} = alum    
    return (
        <form>
            <div className='mb-3'>
                <label htmlFor='nombre(s)' className='form-label'>Nombre(s)</label>
                <input value={nom_alum} name='nom_alum' onChange={handleChange} type='text' id='nombres(s)' className='form-control'></input>
            </div>
            <div className='mb-3'>
                <label htmlFor='apellidos' className='form-label'>Apellido</label>
                <input value={aps_alum} name='aps_alum' onChange={handleChange} type='text' id='apellidos' className='form-control'></input>
            </div>
            <div className='mb-3'>
                <label htmlFor='matricula' className='form-label'>Matricula</label>
                <input value={matricula} name='matricula' onChange={handleChange} type='number' id='matricula' className='form-control'></input>
            </div>
            <div className='mb-3'>
                <label htmlFor='carrera' className='form-label'>Carrera</label>
                <input value={carrera} name='carrera' onChange={handleChange} type='text' id='carrera' className='form-control'></input>
            </div>
            <div className='mb-3'>
                <label htmlFor='materia' className='form-label'>Materia</label>
                <input value={nom_mat} name='materia' onChange={handleChange} type='text' id='materia' className='form-control'></input>
            </div>
            <div className='mb-3'>
                <label htmlFor='promedio' className='form-label'>Promedio</label>
                <input value={promedio} name='promedio' onChange={handleChange} type='number' id='promedio' className='form-control'></input>
            </div>
            <div className='mb-3'>
                <label htmlFor='semestre' className='form-label'>Semestre</label>
                <input value={semestre} name='semestre' onChange={handleChange} type='number' id='semestre' className='form-control'></input>
            </div>
        </form>
    );
}

export default form;