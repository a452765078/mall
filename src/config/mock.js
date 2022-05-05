import Mock from 'mockjs'
Mock.mock('/api/mockjs', {
    "status": 0,
    "data": {
        "id|1-3": 12,
        "username": "@cname"
    }
})