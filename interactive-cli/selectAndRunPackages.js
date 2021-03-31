const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');
const concurrently = require('concurrently');


(async () => {
  const packagesPath = path.join(__dirname, 'packages');
  const allDirectories = fs.readdirSync(packagesPath);

  try {
    const answers = await inquirer.prompt([
      {
        name: 'selectedPackages',
        type: 'checkbox',
        message: 'Select which packages you want to run in dev mode (everything else will be taken from prod build)',
        choices: ['shell-app', ...allDirectories],
        default: ['shell-app'],
      }
    ]);

    const npmCommands = answers.selectedPackages.map(packageName => {
      const command = packageName === 'shell-app' ? 'npm run debug' : `npm run debug:${packageName}`;
      return {
        command,
        name: packageName,
        prefixColor: `#${Math.floor(Math.random()*16777215).toString(16)}`,
      };
    });

    const result = await concurrently(npmCommands);

    console.log('Process has been finished successfully');
    console.log(result);
  } catch (e) {
    console.error(e);
  }
})()
