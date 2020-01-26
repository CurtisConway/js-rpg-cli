import Commander from 'commander';
import JRM from 'js-rpg-maker';

const program = new Commander.Command();
program.version('0.0.1');

program
    .option('-s, --start', 'Start the game.');

program.parse(process.argv);

if(program.start) {
    console.log(JRM);
}

if(process.argv.length < 3) {
    program.help();
}