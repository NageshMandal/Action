const fs = require('fs').promises;
const path = require('path');

class ActionFs {
    constructor(config) {
        this.supportedActions = ['create', 'get', 'update', 'delete', 'copy', 'move'];
    }

    isSupportedAction(action) {
        return this.supportedActions.includes(action);
    }

    checkIfCalledThroughActionEntity(config) {
        if (!config || config.calledThroughActionEntity !== true) {
            throw new Error('Operation must be called through ActionEntity');
        }
    }

    async create(params) {
        const { content, type, path: filePath } = params


        // this.checkIfCalledThroughActionEntity(config);
        if (type === "file") {
            try {
                await ActionFs.createDirectoryStructure(filePath);


                if (!(await ActionFs.fileExists(filePath))) {
                    await fs.writeFile(filePath, content);
                    return {
                        status: "success",
                        data: `File created at ${filePath}`
                    }
                } else {
                    throw new Error(`Error file is already present`);
                }
            } catch (error) {
                throw error; // Throw the error back
            }
        } else if (type === "folder") {
            try {
                await fs.mkdir(filePath, { recursive: true });
                return {
                    status: "success",
                    data: `Directory created at ${filePath}`
                };
            } catch (error) {
                throw error; // Throw the error back
            }
        } else {
            throw new Error(`Error "options" should contain property "type" file or folder`);
        }
    }

    async get(data, config) {
        const { path: filePath, type } = config;

        if (type === "file") {
            try {
                const content = await fs.readFile(filePath, 'utf-8');
                return {
                    status: "success",
                    data: content
                };
            } catch (error) {
                throw error; // Throw the error back
            }
        } else if (type === "folder") {
            try {
                const files = await fs.readdir(filePath);

                return {
                    status: "success",
                    data: files
                };
            } catch (error) {
                throw error; // Throw the error back
            }
        } else {
            throw new Error(`Error "options" should contain property "type" file or folder`);
        }
    }

    async update(data, config) {
        const { content } = data;
        const { path: filePath, type } = config;

        if (type === "file") {
            try {
                if (await this.fileExists(filePath)) {
                    await fs.writeFile(filePath, content);
                    return {
                        status: "success",
                        data: `File updated at ${filePath}`
                    };
                } else {
                    return {
                        status: "error",
                        error: `File not found at ${filePath}.`
                    };
                }
            } catch (error) {
                throw error; // Throw the error back
            }
        } else {
            throw new Error(`Error "options" should contain property "type" file `);
        }
    }

    async delete(data, config) {
        const { path: filePath, type } = config;

        if (type === "file") {
            try {
                await fs.unlink(filePath);
                return {
                    status: "success",
                    data: "File is successfully deleted from path " + filePath
                };
            } catch (error) {
                throw error; // Throw the error back
            }
        } else if (type === "folder") {
            try {
                await fs.rm(filePath, { recursive: true });
                return {
                    status: "success",
                    data: `Directory deleted at ${filePath}`
                };
            } catch (error) {
                throw error; // Throw the error back
            }
        } else {
            throw new Error(`Error "options" should contain property "type" file or folder`);
        }
    }

    async copy(data, config) {
        const { type } = data;
        let { sourcePath, destinationPath } = config;

        if (type === "file") {
            try {
                if (destinationPath.charAt(destinationPath.length - 1) !== '/') {
                    destinationPath = destinationPath + "/";
                }
                this.createDirectoryStructure(destinationPath);
                let des = destinationPath + path.basename(sourcePath);
                const content = await fs.readFile(sourcePath);
                await fs.writeFile(des, content);
                return {
                    status: "success",
                    data: `File copied from ${sourcePath} to ${destinationPath}`
                };
            } catch (error) {
                throw error; // Throw the error back
            }
        } else if (type === "folder") {
            try {
                const files = await fs.readdir(sourcePath);
                await this.createDirectoryStructure(destinationPath);
                for (const file of files) {
                    const sourceFilePath = path.join(sourcePath, file);
                    const isDirectory = (await fs.stat(sourceFilePath)).isDirectory();
                    if (isDirectory) {
                        await this.copy({ type: "folder" }, { sourcePath: sourceFilePath, destinationPath: path.join(destinationPath, file) });
                    } else {
                        await this.copy({ type: "file" }, { sourcePath: sourceFilePath, destinationPath });
                    }
                }
                return {
                    status: "success",
                    data: `Directory copied from ${sourcePath} to ${destinationPath}`
                };
            } catch (error) {
                throw error; // Throw the error back
            }
        }
    }

    async move(data, config) {
        let { type } = data;
        let { sourcePath, destinationPath } = config;
        try {
            if (type === "file" || type === "folder") {
                await this.copy(data, config);
                await this.delete(data, { path: sourcePath });
                return {
                    status: "success",
                    data: `Directory/file move from ${sourcePath} to ${destinationPath}`
                };
            } else {
                throw new Error(`Error "options" should contain property "type" file or folder`);
            }
        } catch (error) {
            throw error; // Throw the error back
        }
    }

    static async fileExists(path) {
        try {
            await fs.access(path);
            return true;
        } catch (error) {
            return false;
        }
    }

    static async createDirectoryStructure(filePath) {
        var regex = /\/.*\./;

        let directory = filePath;
        console.log(filePath);
        if (regex.test(filePath)) {
            directory = ActionFs.trimAfterLastSlash(filePath);
        }
        console.log(directory);
        try {
            await fs.mkdir(directory, { recursive: true });
            console.log(`Directory structure created at ${directory}`);
        } catch (error) {
            console.error(`Error creating directory structure at ${directory}: ${error.message}`);
            throw error; // Throw the error back
        }
    }

    static trimAfterLastSlash(str) {
        var lastSlashIndex = str.lastIndexOf('/');
        if (lastSlashIndex !== -1) {
            return str.substring(0, lastSlashIndex + 1); // Include the last slash
        } else {
            return str;
        }
    }
}

module.exports = ActionFs;
