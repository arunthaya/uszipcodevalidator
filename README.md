# uszipcodevalidator
Checks to see if inputted zip code is a valid zip code out of the 43,500 valid zip codes. 

- The server reads a .txt file containing approximately 43,500 valid U.S zip codes

- All zip codes are pushed to a binary search tree

- The client then communicates to the server to check the validity of the entered zip code by searching the binary search tree.

Instructions on how to run: 
1. Go to https://nodejs.org/en/ and download Node.js. 
2. Install node.js with recommended settings
3. Visit this link: https://github.com/arunthaya/uszipcodevalidator
4. Hit the clone or download big green button, and just download as a zip
5. Extract zip folder and enter the folder until you see the following directory:

 files
 node_modules
 public
 .DS_Store
 package.json
 server

6. While holding down shift anywhere in the root folder click open command window here
7. Type the command:   npm install
8. After completion type the command: node server
9. Go to localhost:8080 in a browser of your choice. 
