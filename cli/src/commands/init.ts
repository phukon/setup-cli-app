import fs from "fs-extra";
import path from "path";
import degit from "degit";
import input from "@inquirer/input";
import { Command } from "commander";
import ora from "ora";
import { BASE_URL } from "@/src/utils/config";
import { modifyPackageJson } from "@/src/utils/modifyPackageJson";

export const init = new Command()
  .name("init")
  .description("scaffolds a cli app")
  .action(async () => {
    try {
      let projectName = await input({ message: "Enter name of your project (press enter to skip)" });
      const spinner = ora(`Setting up your project...`).start();
      if (projectName.trim() === "") {
        projectName = "cli-app";
      }

      const emitter = degit(BASE_URL, {
        cache: false,
        force: true,
      });
      // emitter.on("info", (info) => {
      //   console.log(info.message);
      // });
      const newDirPath = path.join(process.cwd(), projectName);
      await fs.ensureDir(newDirPath);
      await emitter.clone(newDirPath);
      await modifyPackageJson(projectName)
      spinner.succeed(`Your cli-app project has been setup! Happy hacking!`);
    } catch {}
  });
