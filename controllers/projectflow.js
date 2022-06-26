const res = require('express/lib/response')
const postgreSQL = require('../config/db')
const {
    v4: uuidv4
} = require('uuid')


const shareProject = (req, res) => {
    try {
        const uid = uuidv4()
        let {
            body
        } = req
        let {
            id,
            user_id,
            project_id
        } = body
        let querries = `INSERT INTO public.share_project (id,project_id,user_id,created_id,updated_id) VALUES (${id},${project_id},${user_id},NOW(),NOW()) RETURNING id,project_id`

        postgreSQL.query(querries).then((success) => {
                return res.send({
                    success: true,
                    status: 200,
                    data: success?.rows
                })
            })
            .catch(error => {
                console.log(error,'error')
                return res.send({
                    success: false,
                    status: 500,
                    message: 'Some Thing Went Wrong',
                    error: error
                })
            })
    } catch (e) {
        console.log(e,'e')

        return res.send({
            success: false,
            status: 500,
            message: 'Server Error',
            error: e
        })
    }

}

module.exports = {
    shareProject
}