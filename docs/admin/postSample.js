module.exports = {
    post: {
        tags: ['Project'],
        description: "Create Users",
        operationId: "createUser",
        parameters: [
            {
                name: "id",
                in: "#/components/schemas/id",
                schema: {
                    $ref: "#/components/schemas/id"
                },
                required: true,
                description: "Enter id"
            },
            {
                name: "age",
                in: "#/components/schemas/age",
                schema: {
                    $ref: "#/components/schemas/age"
                },
                required: true,
                description: "Enter age"
            }
        ],
        responses: {
            '200': {
                description: "User added",
            },
            '404': {
                description: "Account is not found",
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Error',
                            example: {
                                message: "We can't find the Account",
                                internal_code: "Invalid id"
                            }
                        }
                    }
                }
            }
        }
    }
}