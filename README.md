# Arts ICT

## landingpage for genertic purpose

### Run Commands

"Run" scripts work after initial setup
run tailwind
``` bash
npm run tailwind
```

run webpack build
``` bash
npm run build
```

run prettier
``` bash
npm run prettier
```

First visit Arts-ICT project and clone the next folders and files:
> - build
> - src
> - README.md



---

### initial setup

Perform 4 steps to start a working TailwindCSS with Node.JS
execute these commands in the terminal prompt within your project:

# Step 1 - npm and tailwind

Install or update npm in your project:

```bash
npm install 
```

To correctly build stuff you have to initialize a package.json:

```bash
npm init 
```

To start using TailwindCSS install it in your project
install tailwind css
```bash
npm install -D tailwindcss
```

To correctly build stuff you have to initialize a tailwind.config:
init tailwind
``` bash
npx tailwindcss init
```

# Step 2 - webpack and husky
install webpack
``` bash
npm install --save-dev webpack webpack-cli
```

After installing Webpack and Webpack CLI, you can initialize your Webpack configuration using the following command:

```bash
npx webpack-cli init
```

This command will launch a setup wizard that guides you through creating a webpack.config.js file for your project.
Using npm scripts and husky for Git Hooks
``` bash
npm install husky --save-dev
```

# Step 3 - enable scripts
Add a `scripts` field to your `package.json` to `run` the commands:
add it between the open { and closing } "curly-bracers",
in the example you see it added between some fields with values.

``` EXAMPLE 
{
  "some field": "some value",
  "some field": "some value",
  "some field": "some value",
  "some field": "some value",

  "scripts": {
    "tailwind": "npx tailwindcss -i ./src/input.css -o ./build/css/style.css --watch",
    "prettier": "npx prettier --write **/*.html",
    "build": "npx webpack --mode production --config webpack.config.js --watch",
    "dev": "webpack --mode development",
    "test": "test"
  },
  
  "some field": "some value",
  "some field": "some value",
  "some field": "some value",
}

```
Add a scripts field to your package.json to run the commands:  
Just copy-paste this code snippet
``` scripts
  "scripts": {
    "tailwind": "npx tailwindcss -i ./src/input.css -o ./build/css/style.css --watch",
    "prettier": "npx prettier --write **/*.html",
    "build": "npx webpack --mode production --config webpack.config.js --watch",
    "dev": "webpack --mode development",
    "test": "test"
  },
```
Also add this husky field to enable the GIT-hook, so you don't have to remeber to run the webpack build command before pushing
Add a husky field to your package.json to run the webpack command before every push:
```scripts
{
  "husky": {
    "hooks": {
      "pre-push": "npx webpack --config webpack.config.js"
    }
  }
}

```

# Step 4 - Start Tailwind and Webpack

These commands have to be run seperatly in different terminal windows. But if you did step 4, 
you can scroll to the top of this readme and click `play` with your alias commands to run scripts
Start the Tailwind CLI build process
``` bash
npx tailwindcss -i ./src/input.css -o ./src/style.css --watch
```
run webpack
``` bash
npx webpack --config webpack.config.js --watch
```



---

# sitemap
## sitemap is for google's search engines, it makes the website more easy to find and index for robots
Install sitemap
``` bash
npm i sitemap
```
Create a file in the same folder that holds your index.html
In the file, write down the url('s) you are using for the webpage
Once you've confirmed that listofurls.txt exists in your current directory
Navigate there in the terminal or start a prompt in that folder then run:
``` base example
 npx sitemap --gzip --index --index-base-url https://example.com/path/to/sitemaps/ < listofurls.txt > sitemap-index.xml.gz
```
```project example
npx sitemap --gzip --index --index-base-url https://lumberlake.onrender.com/sitemaps/ < listofurls.txt > sitemap-index.xml.gz
```
```bash
npx sitemap --gzip --index --index-base-url https://PutYourUrlHere/sitemaps/ < listofurls.txt > sitemap-index.xml.gz
```
This will create a sitemap index

---

# Robots

## Create the robots.txt File

create a robots.txt file in the root directory of your project.
This is the same directory where your website’s index.html file is located.
inside robots.txt
```echo
User-agent: *
Disallow:

Sitemap: http://www.yourdomain.com/sitemaps/sitemap.xml

```

---
## A Terminal Script to rename images in a folder:
#!/bin/bash

```
counter=22
directory="/Users/tristan/Workspaces/Developer/demo-images/test"
for file in "$directory"/*.jpg; do
newfile=$(printf "%s/%d.jpg" "$directory" "$counter")
mv "$file" "$newfile"
((counter++))
done
echo "Renaming complete."
```

### Set the initial filename counter. in this case naming starts with 22
```
counter=22
```
#### Specify the directory containing the images.

#### Replace "/path/to/images" with the actual path to your folder.

#### directory="/path/to/images"
```
directory="/Users/tristan/Workspaces/Developer/demo-images/test"
```
#### Loop through each JPEG file in the directory.
```
for file in "$directory"/*.jpg; do
```
#### Construct the new filename.
```
newfile=$(printf "%s/%d.jpg" "$directory" "$counter")
```
#### Rename the file.
```
mv "$file" "$newfile"
```
#### Increment the counter.
```
((counter++))
done
```
```
echo "Renaming complete."
```
---

# troubleshooting

## Webpack

If you have trouble with webpack, remove it and try new install afterwards:

```bash 
rm -rf node_modules &&
rm package-lock.json &&
npm install --save-dev webpack webpack-cli
```
---

# GIT commands

## if GIT somehow gets mixed up, between thge editor and GitHub desktop, run these commands in your terminal

This will discard all unstaged changes
``` bash 
git reset --hard HEAD
```


In this command, adjust "branchname" to have your branchname
``` bash 
git rebase origin/branch &&
git rebase origin/feature/branchname
```