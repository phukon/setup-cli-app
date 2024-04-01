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