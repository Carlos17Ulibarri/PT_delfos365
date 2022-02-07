const express = require ('express')
const routes = express.Router()


routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

            conn.query('SELECT nom_alum, aps_alum, matricula, carrera, nom_mat, promedio, semestre FROM escuela.alumnos join escuela.alum_mat on am_id_alum = id_alumnos join escuela.materias on am_id_mat = id_materias', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.put('/:id',(req, res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.sen(err)
        conn.query('UPDATE alumnos set ? WHERE id_alumnos = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.json('Datos actualizados') 
        })
    })
})

routes.delete('/:id',(req, res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.sen(err)
        conn.query('DELETE FROM alumnos WHERE id_alumnos = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            
            res.json('Alumno borrado') 
        }) 
    })
})

module.exports = routes 