import { constants, promises as fs } from "fs";
import path from "path";

const folderPath = "folder";

async function createIfNotExists(folderPath: string, fileName: string) {
  return fs
    .access(folderPath, constants.F_OK | constants.W_OK | constants.R_OK)
    .then(() => {
      console.log("Folder exists");
    })
    .catch((err) => {
      if (err.code === "ENOENT") {
        console.log("Create folder");
        return fs.mkdir(folderPath);
      }
      return Promise.reject(err);
    })
    .then(() => {
      return fs.access(
        path.join(folderPath, fileName),
        constants.F_OK | constants.W_OK | constants.R_OK
      );
    })
    .then(() => {
      console.log("File Exists");
    })
    .catch((err) => {
      if (err.code === "ENOENT") {
        console.log("Create file");
        return fs
          .open(path.join(folderPath, fileName), "w")
          .then((fd) => fd.close());
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

createIfNotExists(folderPath, "text.txt");
