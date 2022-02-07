import React, {Fragment, useState, useEffect} from 'react';
import BookList from './comp/alumL';
import Form from './comp/falum';


function App() {

  const [alum, setAlum] = useState ({
    nom_alum: '',
    aps_alum: '',
    matricula: 0,
    carrera: '',
    nom_mat: '',
    promedio: 0,
    semestre: 0
  })

  const [alums, setAlums] = useState ([])
  const [lUp, setlUp] = useState(false)

  useEffect (() => {
    const getalums = () =>{
      fetch ('http://localhost:9000/api')
      .then(res => res.json())
      .then(res => setAlums(res))
    }
    getalums()
    setlUp(false)
  }, [lUp]) 

  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-2'>
            <Form alum= {alum} setAlum= {setAlum}></Form>
          </div>
          <div className='col-6'>
            <h2 style={{textAlign: 'center'}}>Alumnos-Materias </h2>
            <BookList alum={alum} alums={alums} setlUp={setlUp}></BookList>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
