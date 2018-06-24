# yf-concat
a quick and dirty way to concatenate pages into single text files

1) Generate a json file called directory-list.json with an array of all the names of your Hathi directories. I did this on the command line with ls > directory-list.json and then just used find/replace to wrap them in quotation marks and commas as needed. I left my json file as an example of how it should look.

2) Copy all the files from the repo plus your new json file into your folder with all the Hathi directories.

3) Assuming you have Node.js installed, run npm install.

4) Change the paths in index.js to your own locations.

5) Run node index
