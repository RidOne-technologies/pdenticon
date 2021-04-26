'use strict'
const cpFile = require('cp-file');

(async () => {
  await cpFile('src/index.d.ts', 'dist/typings/index.d.ts')
    .then(() => {
      console.log('😎  Typings file copied')
    })
    .catch((err) => {
      console.log(`⚠️  ⚠️  ⚠️ \n
       index.d.ts file couldn't be copied to dist folder\n 
      You will need to copy it manually into the root of dist/typings folder\n 
      for types definitions in an eventual Typescript based project\n
      ⚠️  ⚠️  ⚠️ `)
    })
})();