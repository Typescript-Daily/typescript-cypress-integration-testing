// cypress/integration/todo/actions.ts

export const addTask = (task: string) => {
    cy.get('input').type(task);
    cy.get('button').contains('Add').click();
};

export const removeTask = (task: string) => {
    cy.contains(task).within(() => {
        cy.get('button').contains('Remove').click();
    });
};
