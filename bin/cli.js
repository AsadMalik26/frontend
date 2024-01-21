#!/usr/bin/env node

const { execSync } = require('child_process');

const runCommand = command => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to execute ${command}`, error)
    return false;
  }
  return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/AsadMalik26/frontend.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if(!checkedOut) process.exit(-1);
console.log(`Repo Cloned`);

console.log(`Installing dependancies for ${repoName}`);

console.log(`You can also install dependacies manually (if failed), using the following commands`);
console.log(`cd ${repoName} && npm install`);

const installedDeps = runCommand(installDepsCommand);
if(!installedDeps) process.exit(-1);

console.log(`Congratulations! You are ready. Follow the following commands to start`);
console.log(`cd ${repoName} && npm start`);
