
const express = require('express')
const db = require('../db')
const utils = require('../utils')
const router = express.Router()

//Add new Student
router.post('/', (request, response) => {
    const { roll_no, name, Class, division, dateofbirth, parent_mobile_no } =
      request.body
  
    const statement = `INSERT INTO student
                          (roll_no,name,Class,division,dateofbirth,parent_mobile_no)
                          VALUES (?,?,?,?,?,?)`
  
    db.pool.query(
      statement,
      [roll_no, name, Class, division, dateofbirth, parent_mobile_no],
      (error, result) => {
        response.send(utils.createResult(error, result))
      }
    )
  })

  //get student by roll no
  router.get('/:roll_no',(request, response) => {
      const { roll_no } = request.params
      const statement= `select roll_no , name, class, division ,dateofbirth, parent_mobile_no
                        from student where roll_no=?`
      db.pool.query(student, [roll_no], (error,student) => {
          response.send(utils.createResult(error,student))
      })                  
  })

  //update student info
  router.get('/:roll_no',(request, response) => {
    const { roll_no } = request.params
    const {Class, division} = request.body
    
    const statement = `update student set class=?,
                        division =?
                        where roll_no =?;`
    db.pool.query(statement, [Class, division, roll_no], (error,student) => {
        response.send(utils.createResult(error, student))   
    })                    

    })

    //delete student
    router.delete('/:roll_no', (request, response) => {
        const { roll_no } = request.params
      
        const statement = `DELETE FROM student WHERE roll_no=?;`
      
        db.pool.query(statement, [roll_no], (error, student) => {
          response.send(utils.createResult(error, student))
        })
      })

    // Fetch all students of particular class
    router.get('/:roll_no', (request, response) => {
        const { roll_no } = request.params
        const statement = `select * from student where class =?`
        db.pool.query(statement, [Cls], (error, student) => {
            response.send(utils.createResult(error, student))
          })
    }) 
       
