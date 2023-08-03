//********************************
//页面导航和操作：
//cy.visit(url): 访问指定的URL。
//cy.get(selector): 选择DOM元素。
//cy.contains(text): 在页面中查找包含特定文本的元素。
//cy.click(): 点击元素。
//cy.type(text): 在输入框中输入文本。
//cy.clear(): 清除输入框中的文本。

//断言和验证：
//cy.should('exist'): 断言元素是否存在。
//cy.should('be.visible'): 断言元素是否可见。
//cy.should('contain', text): 断言元素是否包含指定文本。
//cy.should('have.attr', 'attributeName', 'attributeValue'): 断言元素是否具有指定的属性及其值。

//等待：
//cy.wait(milliseconds): 等待指定的时间（毫秒）。
//cy.wait(alias): 等待一个命名的异步命令完成，通常用于等待拦截的网络请求完成。

//交互和断言网络请求：
//cy.intercept(method, url, response): 拦截网络请求并返回模拟的响应。
//cy.request(method, url, body): 发起一个实际的网络请求。
//cy.route(method, url, response): 与cy.intercept()类似，用于拦截网络请求。
//cy.expect(requestAlias).to.have.property('response'): 断言拦截的网络请求的响应。

//嵌套命令：
//cy.get(selector).within((element) => {...}): 在选择的DOM元素内执行嵌套命令。
//***************************