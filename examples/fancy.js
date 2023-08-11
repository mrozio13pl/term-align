const align = require('..');
const chalk = require('chalk');
const stdout = process.stdout.write.bind(process.stdout);

// example elements
const jslogo = chalk.bgYellow.black('     \n  JS \r');
const greetings = chalk.cyanBright('Greetings! 🌟');
const separator = chalk.bgWhite.black(' | ');
const title = chalk.bold.underline.yellowBright('Put Text Anywhere in Terminal');
const subheading = chalk.gray('Lorem ipsum dolor sit amet.');

stdout(align(jslogo, { align: 'right', offset: '10%' }));
console.log(align(greetings, 'center'));
console.log(align(separator, 'center'));
console.log(align(title, 'center'));
console.log(align(subheading, 'center'));

// colorful pattern
const pattern = [
    `${chalk.bgRed('  ')}${chalk.bgGreen('  ')}${chalk.bgBlue('  ')}${chalk.bgMagentaBright('  ')}${chalk.bgYellow('  ')}`,
    `${chalk.bgGreen('  ')}${chalk.bgBlue('  ')}${chalk.bgMagentaBright('  ')}${chalk.bgYellow('  ')}${chalk.bgCyan('  ')}`,
    `${chalk.bgBlue('  ')}${chalk.bgMagentaBright('  ')}${chalk.bgYellow('  ')}${chalk.bgCyan('  ')}${chalk.bgRedBright('  ')}`,
    `${chalk.bgMagentaBright('  ')}${chalk.bgYellow('  ')}${chalk.bgCyan('  ')}${chalk.bgRedBright('  ')}${chalk.bgGreenBright('  ')}`,
    `${chalk.bgYellow('  ')}${chalk.bgCyan('  ')}${chalk.bgRedBright('  ')}${chalk.bgGreenBright('  ')}${chalk.bgBlueBright('  ')}`,
];

pattern.forEach((line, index) => {
    stdout('\n\r' + align(line, 'center'));
    if (index === 2) stdout('\r' +align(chalk.hex('#ACB6E5')('𝓬𝓸𝓸𝓵 𝓬𝓾𝓫𝓮 \u2192'), 'left', { offset: 5 }));
});

// footer
const footer = `
${chalk.bold('Use the')}${chalk.cyanBright(' term-align ')}${chalk.bold('library')}
${chalk.bold('to align any text in the terminal')}
${chalk.bold('based on its width.')}
\r`;
stdout(align(footer, 'center'));

// signature
stdout(align(chalk.redBright('• by mrozio13pl'), 'right'));
stdout('\n\n');