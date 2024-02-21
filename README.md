## What is it?

A proof-of-concept showing Twilio Flex being integrated into [Electron](https://www.electronjs.org/).

## Why? What are the advantages?

  1. You are under control and can allow any CRMs to be loaded within Flex, including those that, by default, don't allow it.
  2. It is safer as you won't have the risk of having bad actors like a malicious Chrome Extension.
  3. Chrome can have ad blockers interfering with your Analytics tool you might have.
  4. Your company might have different Chrome Policies per country, making it dificult to operate globally. Flex Electron offers an isolated approach to avoid conflicts with the various local market Chrome policies.

## Hot to run it locally:

  - use node v20
  - `npm install`
  - `npm start`

## How to compile an executable:

  - use node v20
  - `npm install`
  - `npm run package`
  - `npm run make`
  - go to folder `/out` and execute it.

## Screenshot

The below shows Google being loaded within an iFrame - which would otherwise not be possible in a normal browser.

<img width="910" alt="image" src="https://github.com/bruno222/flex-electron/assets/1012787/4adb246e-f545-44b0-a919-50c57bbebe6f">
