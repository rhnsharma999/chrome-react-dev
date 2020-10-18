const chalk = require("chalk");

module.exports = (errors, warnings) => {
  errors.forEach((error) => {
    console.log(chalk.bgRedBright.black(`Error occurred in ${error.loc}`));
    console.log(chalk.red(error.message));
    console.log(chalk.red(error.details));
  });

  warnings.forEach((warning) => {
    console.log(chalk.bgYellowBright.black(`Warnings while bundling`));
    console.log(chalk.yellowBright(warning.message));
  });
};
