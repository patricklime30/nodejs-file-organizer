# File Organizer CLI

A lightweight Node.js command-line tool that automatically organizes files into categorized folders based on their file extensions.

Instead of manually sorting your Downloads folder, run one command and let the tool organize your files.

## Features

* 📁 Organizes files automatically
* 🖼️ Groups images, documents, videos, music, and applications
* 📂 Creates folders automatically
* ⚡ Simple command-line interface
* 🌍 Can be installed globally and used anywhere

## Installation
Create folder:
```bash
mkdir file-organizer

cd file-organizer
```

Clone the repository:

```bash
git clone https://github.com/patricklime30/nodejs-file-organizer.git .

```

Install globally:

```bash
npm install -g .
```

After installation, use the command:

```bash
organize <full-folder-path>
```

## Usage

Example:

```bash
organize C:\User\Downloads
```

Before:

```
Downloads/

photo.jpg
song.mp3
document.pdf
movie.mp4
```

After:

```
Downloads/

Images/
 └── photo.jpg

Music/
 └── song.mp3

Documents/
 └── document.pdf

Videos/
 └── movie.mp4
```

## Uninstall

Remove the global command:

```bash
npm uninstall -g file-organizer
```

## Development

Run without global installation:

```bash
node organizer.js <full-folder-path>
```

Example:

```bash
node organizer.js C:\Users\Downloads
```

## How It Works

1. Reads files from the target folder
2. Detects file extensions
3. Maps files to categories
4. Creates folders if needed
5. Moves files into their categories

## Built With

* Node.js
* File System (`fs`) module
* Path (`path`) module

## Future Improvements

* Preview mode before moving files
* Undo previous organization
* Custom category configuration
* Duplicate file detection
* File sorting by date

## License

MIT License
