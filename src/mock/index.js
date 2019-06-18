import Mock from 'mockjs'

const Random = Mock.Random

Mock.setup({
  timeout: 800 // 设置延迟响应，模拟向后端请求数据
})

// 登录
Mock.mock('/api/login', 'post', option => {
  let obj = {}
  option.body.split('&').map(item => {
    let arr = item.split('=')
    obj[arr[0]] = arr[1]
  })
  let { username, password } = obj
  return username === 'admin' && password === '123456'
    ? {
        code: 200,
        msg: '登陆成功！'
      }
    : {
        code: 400,
        msg: '账号密码不正确！'
      }
})

// 用户数据
const userData = () => {
  let users = new Array(10).fill('')
  users = users.map((item, id) => ({
    id: id + 1,
    date: Random.date('yyyy-MM-dd'),
    name: Random.cname(),
    address: Mock.mock('@county(true)'),
    phone: Mock.mock(/^1[0-9]{10}$/),
    status: Random.integer(0, 1)
  }))
  return users
}
Mock.mock('/api/users', 'get', userData)
