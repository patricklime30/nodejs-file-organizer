#!/usr/bin/env node
// first line means use Node.js to execute this file.

const fs = require("fs");
const path = require("path");

// check 3 argument from cli as folder location
const folder = process.argv[2];

// read all files inside the folder
const files = fs.readdirSync(folder);

const types = {
    Images: [".jpg", ".png", ".jpeg"],
    Music: [".mp3", ".wav", ".m3u"],
    Documents: [".pdf", ".doc", ".docx", ".txt"],
    Videos: [".mp4"]
};

function getCategory(extension){

    for(let category in types){

        if(types[category].includes(extension)){
            return category;
        }

    }

    return "Others";
}

function createFolder(folder){

    if(!fs.existsSync(folder)){
        fs.mkdirSync(folder);
    }

}

files.forEach(file => {

    const extension = path.extname(file);

    const category = getCategory(extension);

    // check url old file
    const oldPath = path.join(folder, file);

    // create the folder for new location
    const newFolder = path.join(folder, category);

    createFolder(newFolder);

    // check url new file
    const newPath = path.join(newFolder, file);

    //copy the file from old path to new path
    fs.renameSync(oldPath, newPath);

    console.log(file + " moved to " + category);

});