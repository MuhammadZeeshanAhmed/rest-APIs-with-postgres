const getSample = require('./getSample');
const postSample = require('./postSample');

module.exports = {
    paths: {
        '/apis/get/get-user': {
            ...getSample
        },
        '/apis/post/create-user': {
            ...postSample
        }
        // '/post': {
        //     ...
        // }
    }
}