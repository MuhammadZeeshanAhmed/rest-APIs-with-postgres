
module.exports = {
    components:{
        schemas:{
            id:{
                type:'integer',
                description:"An id of a todo",
                example: 123
            },
            age:{
                type:'integer',
                description:"Enter age",
                example: 12345
            },
            email:{
                type:'string',
                description:"An Email of a User",
                example: "admin@mach3bi.com"
            },
            limit:{
                type:'string',
                description:"Limit to Fetch Accounts",
                example: "10"
            },
            page:{
                type:'string',
                description:"Records For Each Page",
                example: "1"
            },
            userID:{
                type:'string',
                description:"An ID of a User",
                example: "0d378738-02e8-42cc-99a2-ed55f8293b2c"
            },
            Todo:{
                type:'object',
                properties:{
                    id:{
                        type:'number',
                        description:"id of user",
                        example: 110
                    },
                    age:{
                        type:'number',
                        description: 'age of user',
                        example: 699
                    },
                    
                }
            },
            TodoInput:{
                type:'object',
                properties:{
                    title:{
                        type:'string',
                        description:"Todo's title",
                        example:"Coding in JavaScript"
                    },
                    completed:{
                        type:"boolean",
                        description:"The status of the todo",
                        example:false
                    }
                }
            },
            Error:{
                type:'object',
                properties:{
                    message:{
                        type:'string'
                    },
                    internal_code:{
                        type:'string'
                    }
                }
            }
        }
    }
}