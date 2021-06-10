const path = require('path');
const fs = require('fs');
const { garson, prompts } = require('garson');
const concurrently = require('concurrently');

const packagesPath = path.join(__dirname, 'packages');
const allDirectories = fs.readdirSync(packagesPath);

module.exports = garson()
  .prompt(
  'selectedPackages',
  prompts.multiChoices({
    message:
      'Select which packages you want to run in dev mode (everything else will be taken from prod build)',
    items: [
      { label: 'shell-app', value: 'shell-app', isSelected: true },
      ...allDirectories.map((dir) => ({ label: dir, value: dir })),
    ],
  })
  )
  .action(({ selectedPackages }) => {
    runPackages(selectedPackages);
  });

async function runPackages(selectedPackages) {
  try {
    const npmCommands = selectedPackages.map((packageName) => {
      const command =
        packageName === 'shell-app'
        ? 'npm run debug'
        : `npm run debug:${packageName}`;
      return {
        command,
        name: packageName,
        prefixColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      };
    });

    const result = await concurrently(npmCommands);

    console.log('Process has been finished successfully');
    console.log(result);
  } catch (e) {
    console.error(e);
  }
}
