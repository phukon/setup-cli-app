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
    create-cli-app
  </div>
</div>
-->
![banner](https://github.com/phukon/create-cli-app/assets/60285613/138d9473-7f2b-4243-9cb2-4b82c72cf12a)

<h2 align="center">📦 Create CLI App</h2>

<p align="center">
    The easiest way to set up a modern CLI app by running one command.
    <br />
    <a href="#features"><strong>Features</strong></a> ·
    <a href="#%EF%B8%8F-usage"><strong>Usage</strong></a> ·
    <a href="#commands"><strong>Commands</strong></a> ·
</p>

<p align="center">
  <a href="https://github.com/phukon/clack/blob/main/LICENSE">
   <img alt="GitHub License" src="https://img.shields.io/github/license/phukon/create-cli-app">
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

1. Run <kbd>pnpm create-cli-app init</kbd>. Follow the instructions. This scaffolds your project.
2. Set your config and schema at src/config. (check schema.json)
3. To see debug logs. Set a `DEBUG` environment variable.
4. Run with args `create-cli-app --start` or `create-cli-app --build`

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
