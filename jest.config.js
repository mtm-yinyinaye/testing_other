/*eslint-env node*/
module.exports = {
  projects: ['<rootDir>/packages/*'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
}
