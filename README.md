# ALX Frontend JavaScript

This repository contains exercises and small projects for practicing modern JavaScript and TypeScript tooling.

- Focus area: 0x04-TypeScript
- Build tooling: Webpack 4, TypeScript 3.x, ts-loader, webpack-dev-server

## Repository structure

- 0x04-TypeScript/
  - task_0/
    - package.json, tsconfig.json, webpack.config.js, .eslintrc.js
    - js/main.ts
  - task_1/
    - package.json, tsconfig.json, webpack.config.js
    - js/main.ts

## Prerequisites

- Node.js and npm installed
- From each task directory, run npm install before building or starting the dev server

## Task 0: Students table (TypeScript + Webpack)

Files
- 0x04-TypeScript/task_0/package.json
- 0x04-TypeScript/task_0/tsconfig.json
- 0x04-TypeScript/task_0/webpack.config.js
- 0x04-TypeScript/task_0/.eslintrc.js
- 0x04-TypeScript/task_0/js/main.ts

What it does
- Defines a Student interface
- Renders a table with students' first names and locations using vanilla JavaScript

How to run
- Install dependencies
```bash path=null start=null
cd 0x04-TypeScript/task_0
npm install
```
- Start dev server (opens in your browser)
```bash path=null start=null
npm run start-dev
```
- Or build a production bundle
```bash path=null start=null
npm run build
```
Expect "No type errors found." from the TypeScript checker when building.

## Task 1: Teacher interface (TypeScript types)

Files
- 0x04-TypeScript/task_1/package.json
- 0x04-TypeScript/task_1/tsconfig.json
- 0x04-TypeScript/task_1/webpack.config.js
- 0x04-TypeScript/task_1/js/main.ts

What it does
- Declares a Teacher interface with readonly firstName/lastName, required fullTimeEmployee and location, optional yearsOfExperience, and an index signature for additional attributes (e.g., contract)
- Creates an example teacher object and logs it

How to run
- Install dependencies
```bash path=null start=null
cd 0x04-TypeScript/task_1
npm install
```
- Start dev server
```bash path=null start=null
npm run start-dev
```
- Or build
```bash path=null start=null
npm run build
```

## Troubleshooting
- If the dev server doesn’t open automatically, navigate to http://localhost:8080
- If you see type errors, open the referenced file and line to resolve them; rebuilding should then report "No type errors found."
- Each task has its own package.json; install dependencies per task directory.

## License
ISC
