'use strict';
import * as fs from 'fs';

const moveFile = (
  input,
  output
) => {
  const initialPath = `src/${input}`;
  let resultOutput = output;

  fs.readFile(initialPath, 'utf-8', (error, fileData) => {
    if (error) {
      console.log(error);
      return;
    }

    if (!output.includes('.')) {
      resultOutput = `${output}/${input}`;
    }

    fs.writeFile(`src/${resultOutput}`, fileData, (error) => {
      if (error) {
        console.log(error);
        return;
      }
    });

    fs.rm(initialPath, (error) => {
      if (error) {
        console.log(error);
        return;
      };
    });
  });
}

moveFile('1.txt');
