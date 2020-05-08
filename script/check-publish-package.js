/**
 * The script checks the files and directories structure, which are
 * generated by `npm pack` command.
 */
const tar = require('tar')
const util = require('util')
const fs = require('fs')
const rimraf = require('rimraf')

const stat = util.promisify(fs.stat);
const rimrafPromisified = util.promisify(rimraf);

/**
 * Default directory name where the package is unziped.
 *
 * @type {string}
 */
const UNPACKED_DIR_NAME = 'package'
/**
 * The list of file we check if they exists in the package.
 *
 * @type {string[]}
 */
const FILES_CHECKLIST = [
  'CHANGELOG.md',
  'README.md',
  'package.json',
  'commonjs/index.js',
  'commonjs/HyperFormula.js',
  'dist/hyperformula.js',
  'es/index.js',
  'es/HyperFormula.js',
  'typings/index.d.ts',
  'typings/HyperFormula.d.ts',
]

process.stdin.resume()
process.stdin.on('data', function(data) {
  if (!data) {
    throw Error('Missing STDIN stream');
  }

  const packageName = data.toString().replace(/\n/g, '');
  let errorCode = 0;

  tar.x({ file: packageName }).then(() => {
    return checkDirectoryTreeStructure()

  }).then(() => {
    console.log(`Publish package check: \u001b[0;32mOK\u001b[0m`)

  }).catch((err) => {
    errorCode = 1;
    console.log(`Publish package check: \u001b[0;31mERROR\u001b[0m (${err.message})`)

  }).finally(() => {
    return Promise.all([
      removePackage(packageName),
      removePackage(UNPACKED_DIR_NAME),
    ])

  }).catch((err) => {
    errorCode = 1;
    console.log(`Publish package check: Error while cleanup the stuff (${err.message})`)

  }).finally(() => {
    process.exit(errorCode)
  })
})
process.stdout.on('error', (err) => {
  if (err.code === 'EPIPE') {
    return process.exit()
  }

  process.emit('error', err)
})

async function checkDirectoryTreeStructure() {
  for (let i = 0; i < FILES_CHECKLIST.length; i++) {
    const stats = await stat(FILES_CHECKLIST[i])

    if (!stats || !stats.isFile()) {
      throw new Error(`No such file (${file}) in the checklist or it is not described as a regular file`);
    }
  }
}

async function removePackage(files) {
  return rimrafPromisified(files)
}