// cypress/integration/todo/tests.spec.ts

import * as actions from './actions.cy';
import * as selectors from './selectors.cy';

describe('Todo List App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000'); // Change the URL if your app is running on a different port
    });

    it('Adds and removes a task', () => {
        actions.addTask('Buy groceries');
        cy.get(selectors.taskItem('Buy groceries')).should('exist');

        actions.removeTask('Buy groceries');
        cy.get(selectors.taskItem('Buy groceries')).should('not.exist');
    });

    it('Saves tasks in local storage', () => {
        actions.addTask('Complete assignment');
        cy.reload(); // Reload the page to simulate a fresh visit
        cy.get(selectors.taskItem('Complete assignment')).should('exist');
    });
});
