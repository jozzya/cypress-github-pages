[![Generate Cypress Github Page](https://github.com/jozzya/cypress-github-pages/actions/workflows/cypress-github-pages-report.yml/badge.svg)](https://github.com/jozzya/cypress-github-pages/actions/workflows/cypress-github-pages-report.yml)
[![Cypress Dashboard](https://github.com/jozzya/cypress-github-pages/actions/workflows/cypress-dashboard.yml/badge.svg?branch=main)](https://github.com/jozzya/cypress-github-pages/actions/workflows/cypress-dashboard.yml)
[![Cypress Remote Dashboard Status](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/v8vg4q&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/v8vg4q/runs)

# Cypress functional testing 

## Pre-requisites

npm

## Installation

Run `npm install` to bring in the cypress dependencies.

To install Cypress recorder run

`npm install -g @cypress/chrome-recorder`

To convert Chrome tests into Cypress tests run

`npx @cypress/chrome-recorder cypress/chrome-recordings/*.json -o=cypress/e2e/chrome-recordings`

## How to run

`npx cypress open` - This will open up the electron browser.

## Video documentation of Cypress

https://youtu.be/QP1I982XYtg

## Recommended IDE

When writing the tests, I recommend using Visual Studio - https://code.visualstudio.com/Download
Support for Cypress is provided out of the box.

## Remote dashboard

https://dashboard.cypress.io/projects/v8vg4q/

## Github Pages

https://jozzya.github.io/cypress-github-pages/
