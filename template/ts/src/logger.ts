import chalk from 'chalk';
import debug from 'debug';

interface Logger {
  log: (...args: any[]) => void;
  warning: (...args: any[]) => void;
  highlight: (...args: any[]) => void;
  debug: debug.Debugger;
}

export default function createLogger(name: string): Logger {
  return {
    log: (...args: any[]) => console.log(chalk.gray(...args)),
    warning: (...args: any[]) => console.log(chalk.yellow(...args)),
    highlight: (...args: any[]) => console.log(chalk.bgCyanBright(...args)),
    debug: debug(name)
  };
};
