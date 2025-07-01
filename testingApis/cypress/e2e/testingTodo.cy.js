const ListaTareas= [
    'Preparar el desayuno',
    'Codear',
    'Hacer ejercicio',
];
describe('Testing Todo App MVC Angular', () => {
    beforeEach(() => {
        cy.visit('https://todomvc.com/examples/angular/dist/browser/#/all');
        ListaTareas.forEach(Tarea => {
            cy.get('.new-todo').type(`${Tarea}{enter}`);
        });
    });




    it('should load the Todo MVC application and verify tasks are created', () => {
        cy.get('.todoapp').should('be.visible');
        cy.get('.todo-list li').each((listItem, index) => {
            cy.wrap(listItem).should('have.text', ListaTareas[index]);
        });
    });

    it('Marcar Como tarea completada', () => {
        cy.get('.todo-list li').first().find('.toggle').click();  
    });
    it('Eliminar una tarea', () => {
        cy.get('.todo-list li').first().find('.destroy').invoke('show').click();
        //cy.get('.todo-list li').should('have.length', ListaTareas.length - 1);
    });





});