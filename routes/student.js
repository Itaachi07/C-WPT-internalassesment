const express = require('express')
const db = require('../db')
const utils = require('../utils')
const router = express.Router()
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