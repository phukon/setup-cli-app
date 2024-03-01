# 📦 Create CLI App

The easiest way to start a modern cli app.

It supercharges your development workflow, allowing you to quickly scaffold resources for your cli application with best practices in mind.

## 🏎️ Usage TLDR [work in progress]

1. Click <kbd>Use this template</kbd> to create a new repo.
2. Set your config and schema (optional) at src/config.
3. Run with args `create-cli-app --start` or `create-cli-app --build`


## Commands [work in progress]

All commands are run from the root of the project, from a terminal:

| Command                 | Action                                           |
| :---------------------- | :----------------------------------------------- |
| `pnpm install`          | Installs dependencies                            |

## Features

- **Efficient CLI Setup**: Start building your CLI app within minutes with a well-structured template and easy-to-use commands.
- **Modular Architecture**: Built with a modular architecture, allowing for easy customization and extension as your project grows.
- **Command Handling**: Handle commands effortlessly using the intuitive command-line interface. Execute various commands to perform different tasks seamlessly.
- **Configuration Management**: Manage your application configurations effortlessly. Customize your app's behavior by modifying the configuration settings.
- **Error Handling**: Robust error handling mechanisms ensure smooth execution and graceful recovery from unexpected errors.
- **Logging Support**: Comprehensive logging support with customizable logging levels to keep track of application activities and troubleshoot issues effectively.

**Under the Hood:**

- **`arg`:** Handles command-line arguments intuitively.
- **`cosmiconfig`:** Simplifies configuration management from various sources, including the current directory, user's home directory, and project-specific locations.
- **`Ajv`:** Ensures robust data validation with JSON schema support.
- **`better-ajv-errors`:** Provides clear and actionable error messages when encountering configuration issues.
- **`chalk`:** Enhances the user experience with colorful command-line output.