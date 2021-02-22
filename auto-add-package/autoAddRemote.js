const path = require('path');
const fs = require('fs');

const EXCLUDED_DIRECTORIES = ['.DS_Store'];

function autoAddRemotes({ packagesFolder = 'packages', manifestFileName = 'remote_manifest.json' } = {}) {
  const packagesPath = path.join(__dirname, packagesFolder);

  const allDirectories = fs.readdirSync(packagesPath);
  const availablePackages = allDirectories.filter(directory => !(EXCLUDED_DIRECTORIES.includes(directory)))


  return availablePackages.reduce((acc, packageName) => {
    const packageManifestPath = path.join(__dirname, packagesFolder, packageName, manifestFileName);
    const manifestRawData = fs.readFileSync(packageManifestPath);
    const manifestContent = JSON.parse(manifestRawData)

    const { name, remoteEntryName, port, host } = manifestContent;

    const remoteUrl = `${name}@//${host}:${port}/${remoteEntryName}`;

    return {
      ...acc,
      [name]: remoteUrl
    };
  }, {});
}

module.exports = autoAddRemotes;