import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // https://docs.cypress.io/api/commands/task#Usage
      // in test
      // cy.task('log', 'This will be output to the terminal')
      on("task", {
        log(message) {
          console.log(message);

          return null;
        },
      });
    },
  },

  component: {
    devServer: {
      framework: "cypress-ct-lit",
      bundler: "vite",
    },
  },
});
