#!/usr/bin/env node
import arg from "arg";
import chalk from "chalk";
import { start } from "@/src/commands/start";
import { getConfig } from "@/src/config/config-mgr";
import createLogger from "@/src/logger";

const logger = createLogger("bin");

async function main() {
  try {
    const args = arg({
      "--start": Boolean,
      //  '--build': Boolean, Add your own arguments
    });

    logger.debug("Received args", args);

    if (args["--start"]) {
      const config = await getConfig();
      start(config);
    }
  } catch (e) {
    logger.warning((e as Error).message);
    console.log();
    usage();
  }
}

function usage() {
  console.log(`${chalk.whiteBright("tool [CMD]")}
  ${chalk.greenBright("--start")}\tStarts the app
  ${chalk.greenBright("--build")}\tBuilds the app`);
}

main();
