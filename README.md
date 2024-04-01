<!--
<div
  style={{
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundImage: 'linear-gradient(to bottom, #dbf4ff, #fff1f1)',
    fontSize: 60,
    letterSpacing: -2,
    fontWeight: 700,
    textAlign: 'center',
  }}
>
  <span style={{ fontSize: '100px' }}>🎈</span> {/* Increased font size for the emoji */}
  <div>
    setup-cli-app
  </div>
</div>
-->
<a href="https://github.com/phukon/setup-cli-app">
  <img src="https://github.com/phukon/setup-cli-app/assets/60285613/e5269230-ad4a-42fd-89dd-c59cc949008b"/>
</a>


<h2 align="center">📦 Setup CLI App</h2>

<p align="center">
    The easiest way to set up a modern CLI app by running one command.
    <br />
    <a href="#features"><strong>Features</strong></a> ·
    <a href="#%EF%B8%8F-usage"><strong>Usage</strong></a> ·
    <a href="#commands"><strong>Commands</strong></a> ·
</p>

<p align="center">
  <a href="https://github.com/phukon/setup-cli-app/blob/main/LICENSE">
   <img alt="GitHub License" src="https://img.shields.io/github/license/phukon/setup-cli-app">
  </a>
</p>

<br/>

The easiest way to start a modern cli app. It supercharges your development workflow, allowing you to quickly scaffold resources for your cli application with best practices in mind.

## Features

- **Efficient CLI Setup**: Start building your CLI app within minutes with a well-structured template and easy-to-use commands.
- **Scoped Debug Logs**: Debug logs are scoped to their names: bin, config:mgr and commands:start.
- **Modular Architecture**: Built with a modular architecture, allowing for easy customization and extension as your project grows.
- **Configuration Management**: Manage your application configurations effortlessly. Customize your app's behavior by modifying the configuration settings.
- **Error Handling**: Robust error handling mechanisms ensure smooth execution and graceful recovery from unexpected errors.
- **Build scripts**: Integrated build scripts for easy development workflow management.
  - `clean`: Removes the 'dist' directory.
  - `prebuild`: Executes 'clean' script before the build.
  - `build`: Builds the application using 'tsup'.
  - `preversion`: Executes 'build' script before versioning.
  - `postversion`: Pushes tags to the repository after versioning.

## 🏎️ Usage

1. Run <kbd>pnpm setup-cli-app init</kbd>. Follow the instructions. This scaffolds your project.
2. Set your config and schema at src/config. (check schema.json)<br/>
Upon building this TypeScript project, priority is given to configurations specified within the `package.json` file. Consequently, removing configurations from `package.json` will prompt the tool to adopt the new settings from the <kbd>tool.config.js</kbd> file.

> It looks for a config file in the dir of the user who installs/uses it.
```
{
  // Default configuration
  "properties": {
    "port": {
      "type": "number"
    }
  }
}
```

Therefore, the user, who installs or utilizes the CLI tool, must include the following property within their `package.json`:

```
// package.json
"tool": {
  "port": 9999
}
```

In the event that it is not specified in `package.json`, the user must provide a separate file named <kbd>tool.config.js</kbd>.

3. To see debug logs. Set a `DEBUG` environment variable.
4. On bumping the package version. The project is build automatically and tags are pushed to remote repo.<br/>Or build manually with `pnpm build`
5. Run with args `setup-cli-app --start`.

## Commands

All commands are run from the root of the project, from a terminal:

| Command        | Action                |
| :------------- | :-------------------- |
| `pnpm install` | Installs dependencies |


**Under the Hood:**

- **`arg`:** Handles command-line arguments intuitively.
- **`cosmiconfig`:** Simplifies configuration management from various sources, including the current directory, user's home directory, and project-specific locations.
- **`Ajv`:** Ensures robust data validation with JSON schema support.
- **`better-ajv-errors`:** Provides clear and actionable error messages when encountering configuration issues.
- **`chalk`:** Enhances the user experience with colorful command-line output.
- **`tsup`:** Efficient and fast TypeScript module bundler for building your CLI app.
- **`rimraf`:** Cross-platform utility to remove files and directories, commonly used for cleaning build artifacts before rebuilding.
