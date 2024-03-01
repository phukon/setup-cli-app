# 📦 Create CLI App

The easiest way to start a modern cli app.

It supercharges your development workflow, allowing you to quickly scaffold resources for your cli application with best practices in mind.

## 🏎️ Usage TLDR [work in progress]

1. Click <kbd>Use this template</kbd> to create a new repo.
2. Set your config and schema at src/config. (check schema.json)
3. To see debug logs. Set a `DEBUG` environment variable.
4. Run with args `create-cli-app --start` or `create-cli-app --build`

## Commands [work in progress]

All commands are run from the root of the project, from a terminal:

| Command        | Action                |
| :------------- | :-------------------- |
| `pnpm install` | Installs dependencies |

## Features

- **Efficient CLI Setup**: Start building your CLI app within minutes with a well-structured template and easy-to-use commands.
- **Scoped Debug Logs**: Debug logs are scoped to their names: bin, config:mgr and commands:start.
- **Modular Architecture**: Built with a modular architecture, allowing for easy customization and extension as your project grows.
- **Configuration Management**: Manage your application configurations effortlessly. Customize your app's behavior by modifying the configuration settings.
- **Error Handling**: Robust error handling mechanisms ensure smooth execution and graceful recovery from unexpected errors.

**Under the Hood:**

- **`arg`:** Handles command-line arguments intuitively.
- **`cosmiconfig`:** Simplifies configuration management from various sources, including the current directory, user's home directory, and project-specific locations.
- **`Ajv`:** Ensures robust data validation with JSON schema support.
- **`better-ajv-errors`:** Provides clear and actionable error messages when encountering configuration issues.
- **`chalk`:** Enhances the user experience with colorful command-line output.
