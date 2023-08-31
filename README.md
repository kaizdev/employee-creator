# Employee Creator - Full Stack

{add test badges here, all projects you build from here on out will have tests, therefore you should have github workflow badges at the top of your repositories: [Github Workflow Badges](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)}

## Demo & Snippets

-   Include hosted link
-   Include images of app if CLI or Client App

---

## Requirements / Purpose

-   MVP:
    -   Spring RESTful API and React Typescript frontend
    -   3 API end points (create employee, list of existing employees and delete employee)
-   Web app to create, list, modify and delete employees
-   Stack:
    -   Front end: Vite, React, TypeScript, Tailwind
        -   Front end dependencies include:
            -   @hookform/resolvers
            -   @phosphor-icons/react
            -   react-dom": "^18.2.0",
            -   react-hook-form": "^7.45.4",
            -   react-router-dom
            -   yup
    -   Back end: Java and Spring

---

## Build Steps

-   Build the project using `npm install` via terminal
-   After installation, run the front end using `npm run dev` and then press `o` or click the local link. this will run on localhost port 5173
-   The back end is started by running `EmployeecreatorApplication.java` in the `src/main/java/io/nology/employeecreator` folder. This will run on port 8080

---

## Design Goals / Approach

-   I wanted the design to be minimalistic and provide only the necessary information
-   This design was chosen as it is easy to use and user friendly

---

## Features

-   The project is a working full stack application to add, modify and delete employees from a database
-   Create new employee form is created through React Hook Form and Yup validation
-   Icons are from Phosphor icons

---

## Known issues

-   N/A

---

## Future Goals

-   Additional styling and visual uplift

---

## Change logs

-   Write a paragraph labelled with the date every day you work on the project to discuss what you've done for the day. Be specific about the changes that have happened for that day.

### 22/08/2023 - {Initial Commit and back end MVP}

-   Implemented the Spring back end with working CRUD
-   Added React / TS front end to get all employees
-   Added tailwind

### 30/08/2023 - {Added create new employee functionality for front end}

-   Implemented the create new employee form for the front end
-   Form validation added via yup resolver

### 31/08/2023 - {Added update functionality and styling to front end}

-   Implemented updating of employees form for the front end
-   Added button styling and icons

---

## What did you struggle with?

-   First repo that I have created using TypeScript for the front end
-   This was also the first project I have created using Tailwind for CSS (previously have used SCSS). Tailwind has a lot of new syntax to learn however I can see the potential efficiencies and use cases for Tailwind as it removes bespoke CSS code

---

## Licensing Details

-   Free for non-commercial use

---
