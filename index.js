#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();
const addingComponent = require('./src/cli/adding-component');
const initialProject = require('./src/cli/initial-project');

program
  .name(require('./package.json').name)
  .description(require('./package.json').description)
  .version(require('./package.json').version);

program
  .command('init')
  .description('Initializing the Project')
  .action(() => {
    initialProject();
  });

program
  .command('add')
  .description('Adding a block or element from a library')
  .argument('<string>', 'block or element name')
  .action((str) => {
    addingComponent(str);
  });

program.parse();
