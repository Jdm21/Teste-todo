describe('testando lista todo', ()=>{
  it("carregar site todo", () =>{
      cy.visit('https://phpauloreis.github.io/todo-list-alpine-js/')
  })
  
  it('caso o usuario tente cadastrar com o campo em branco nao deve cadastrar', ()=>{
      cy.get('#todo_title').type(' ')
      cy.get('.bg-white > .col-auto > .btn').click()
      cy.contains('[x-text="todo.task"]').should('not.exist')
      cy.get('.mb-3').should('include.text', '0')
  })

   
  it('caso o usuario clique no botao excluir, deve excluir uma atividade ', ()=>{
      cy.get('.text-end > .btn').click() 
      cy.contains('[x-text="todo.task"]').should('not.exist')
      cy.get('.mb-3').should('include.text', '0')
  }) 


  it('caso o usuario cadastre com dados invalidos no campo deve cadastrar e criar mais uma atividade', ()=>{
      cy.get('#todo_title').type('registro teste')
      cy.get('.bg-white > .col-auto > .btn').click()
      cy.get('[x-text="todo.task"]').should('include.text', 'registro teste')
      cy.get('.mb-3').should('include.text', '1')
  })

})