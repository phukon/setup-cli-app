import fs from 'fs';

export const modifyPackageJson = (projectName: string) => {
  const packageJsonPath = `${projectName}/package.json`;
  try {
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
      packageJson.name = projectName

      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
      // console.log("package.json updated successfully!");
    } else {
      console.log("\npackage.json does not exist. Skipping modification.");
    }
  } catch (error) {
    console.error("Error modifying package.json:", error);
    process.exit(1);
  }
};
