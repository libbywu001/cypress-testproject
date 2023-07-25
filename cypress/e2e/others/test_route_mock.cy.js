// ***********************************************************
// 假设应用程序如下：
// app.js
//function fetchUsers() {
 //   return fetch('/api/users') // 这个端点用于获取用户列表
  //    .then((response) => response.json())
  //    .then((data) => data.users);
 // }
  
//  function renderUsers(users) {
//    const userListElement = document.getElementById('user-list');
//    userListElement.innerHTML = users.map((user) => `<li>${user.name}</li>`).join('');
//  }

// fetchUsers().then(renderUsers);  
// ***********************************************************
// 使用 Cypress 编写测试代码来使用 cy.route() 拦截该 API 调用，并提供不同的响应：
describe('用户列表测试', () => {
    beforeEach(() => {
      cy.server(); // 启动 Cypress 服务器用于拦截和模拟网络请求
      // 设置拦截 '/api/users' 端点的 GET 请求
      cy.route('GET', '/api/users', {
        users: [
          { id: 1, name: 'Alice' },
          { id: 2, name: 'Bob' },
          { id: 3, name: 'Charlie' },
        ],
      }).as('getUsers'); // 为该拦截的请求设置别名
    });
  
    it('正确展示用户列表', () => {
      cy.visit('/'); // 假设应用从 '/' 路径提供
  
      // 等待拦截的 GET 请求完成
      cy.wait('@getUsers');
  
      // 断言来验证用户列表是否正确地渲染在页面上
      cy.get('#user-list').find('li').should('have.length', 3);
      cy.contains('Alice');
      cy.contains('Bob');
      cy.contains('Charlie');
    });
  
    it('当服务器请求失败时显示错误消息', () => {
      // 更改拦截的请求响应，模拟一个失败的请求
      cy.route({
        method: 'GET',
        url: '/api/users',
        status: 500,
        response: {},
      }).as('getUsers');
  
      cy.visit('/'); // 假设应用从 '/' 路径提供
  
      // 等待拦截的 GET 请求完成
      cy.wait('@getUsers');
  
      // 断言来验证错误消息是否正确地展示在页面上
      cy.contains('获取用户失败。请稍后重试。');
    });
  });  