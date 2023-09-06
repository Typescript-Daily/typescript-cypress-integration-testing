// cypress/integration/todo/selectors.ts

export const inputField = 'input';
export const addButton = 'button:contains("Add")';
export const taskItem = (task: string) => `li:contains("${task}")`;
export const removeButton = 'button:contains("Remove")';
