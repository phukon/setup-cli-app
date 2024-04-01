import { cosmiconfigSync } from "cosmiconfig";
import fs from "fs";
import Ajv, { ErrorObject, JSONSchemaType } from "ajv";
import betterAjvErrors from "better-ajv-errors";
import createLogger from "../logger.js";

const ajv = new Ajv();
const configLoader = cosmiconfigSync("tool");
const logger = createLogger("config: mgr");

/*
Import assertion are experimental. Therfore I tried loading the JSON from the filesystem synchronously.

 ---Use this code beloew if you want to use import assertions---
  import schema from './schema.json' assert { type: 'json' };
*/

/* If you want to parse a schema from a file -->

const loadJSON = (path: string): any => {
  const fileContents = fs.readFileSync(path, 'utf-8');
  return JSON.parse(fileContents);
};
const schema = loadJSON('./schema.json');
*/

const schema: JSONSchemaType<Config> = {
  type: "object",
  properties: {
    port: {
      type: "number",
    },
  },
  required: ["port"],
  additionalProperties: false,
};

interface Config {
  port: number;
}

export async function getConfig(): Promise<Config> {
  const result = configLoader.search(process.cwd());

  if (!result) {
    logger.warning("Could not find configuration, using default");
    return { port: 1234 }; // Default configuration
  } else {
    const isValid = ajv.validate(schema, result.config);
    if (!isValid) {
      logger.warning("Invalid configuration was supplied");
      console.log();
      const errors: ErrorObject[] | null | undefined = ajv.errors;
      if (errors) {
        console.log(betterAjvErrors(schema, result.config, errors));
      }
      process.exit(1);
    }
    logger.log("Found configuration", result.config);
    return result.config as Config;
  }
}
