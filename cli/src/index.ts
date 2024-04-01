#!/usr/bin/env node
import { init } from "@/src/commands/init"
import { Command } from "commander";

// import { getPackageInfo } from "@/src/utils/get-package-info";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  // const packageInfo = await getPackageInfo();

  const program = new Command()
    .name("setup-cli-app")
    .description("Set up a modern CLI app by running one command.")
    .version(
      "1.0.3",
      "-v, --version",
      "display the version number"
    )

  program.addCommand(init);

  program.parse();
}

main();
