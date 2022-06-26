const postgreSQL = require('../config/db')

const createUser = async (req, res) => {
    try {
        const { body } = req

        const id = body?.id
        const age = body?.age

        postgreSQL.query(`INSERT INTO test (id , age) VALUES (${id}, ${age})`).then((result) => {
            // console.log(result)
            return res.send({
                success: true,
                status: 201,
                message: 'User created successfully'
            })
        }).catch((err) => {
            // console.log("err", err)
            return res.send({
                success: false,
                status: 500,
                message: 'something went wrong'
            })
        })

    } catch (error) {
        // console.log("error", error)
        return res.send({
            success: false,
            status: 500,
            message: 'something went wrong'
        })
    }
}

module.exports = { createUser }