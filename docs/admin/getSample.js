module.exports = {
    get: {
        tags: ['Project'],
        description: "Get Users",
        operationId: "getAccount",
        responses: {
            '200': {
                description: "Users are found",
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