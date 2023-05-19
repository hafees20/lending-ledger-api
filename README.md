# lending-ledger-api <br> ![Project Status](https://img.shields.io/badge/status-prototype-orange)

## Table of Contents

- [Project Overview](#project-overview)
- [Key Feautures](#key-features)
- [Developement Environment](#steps-to-set-up-a-development-environment)
- [Running the project](#steps-to-run-the-project)
- [Environment Variables](#environment-variables-needed)

***
## Project Overview
This sample project allows users to manage a `lending ledger` using `Google Sheet` as database and a `RESTful API` to interact with the data. Simply this is an api with `Create` , `Read` and `Delete` operation logic.

***
## Key Features
* Adding a new ledger entry
* Retrieve the list of all ledger entries
* Retrieve a specific ledger entry by its ID
* Delete a specific ledger entry by its ID
***
## Steps to set up a development environment
1. Clone this project repository.
2. Install node.js and npm if not installed.
3. Open the terminal and go to the project folder.
4. Type `npm install` to install the dependancies.
5. Create a .env file and set the environment variables needed.
6. Now type `npm run dev` and run the dev server.
***

## Steps to run the project
1. Clone the repository.
2. Install node.js and npm.
3. Navigate to project folder using terminal.
4. `npm install` to install required dependancies.
5. Set the env variables needed.
6. Run the project using `npm start`.
***

## Environment Variables Needed

- PORT
- SHEET_ID

#### ( Google Service Account Credential Variables )
- TYPE
- PROJECT_ID
- PRIVATE_KEY_ID
- PRIVATE_KEY
- CLIENT_EMAIL
- CLIENT_ID
- AUTH_URI
- TOKEN_URI
- AUTH_PROVIDER_X509_CERT_URL
- CLIENT_X509_CERT_URL
***
