<a name="readme-top"></a>

<div align="center">
  <a href="https://github.com/heysolomon/lendsqr-fe-test/">
    <img width="174" height="36" alt="Group" src="https://github.com/user-attachments/assets/0b4d18f4-1271-4ebb-bec1-8857da23672e" />
  </a>

  <h3 align="center">Lendsqr Test</h3>

  <p align="center">
   This is a front-end engineer test for a role at Lendsqr. The task is translating Figma designs(4 screens) into fully responsive websites. Lendsqr is the best loan management system for smart lenders. 
    <br />
    <a href="https://github.com/heysolomon/lendsqr-fe-test/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://solomon-victor-akuson-lendsqr-fe-test.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/heysolomon/lendsqr-fe-test/issues">Request Feature</a>
  </p>
</div>

<!-- Table of Contents -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#view">Viewing website on the web</a></li>
  </ol>
</details>

## Lendsqr

<img width="1424" height="844" alt="Screenshot 2026-02-06 at 6 04 48 PM" src="https://github.com/user-attachments/assets/3b65a1d2-1443-4662-ad33-00acd0c8f47b" />

### Built With

* [Next.js](https://nextjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [SCSS](https://sass-lang.com/)
* [Radix UI](https://www.radix-ui.com/)
* [React Hook Form](https://react-hook-form.com/)
* [React Query](https://tanstack.com/query/latest)
* [Zod](https://zod.dev/)
* [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
* [jest-axe](https://github.com/nickcolley/jest-axe) (Accessibility Testing)

<!-- Getting Started -->
## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* pnpm
  ```sh
  npm install -g pnpm
  ```
  or 

    ```sh
    npm install -g @pnpm/exe
    ```


### Installation & Setup

_Below are steps to follow in setting up the project._

1. Clone the repo
   ```sh
   git clone https://github.com/heysolomon/lendsqr-fe-test.git
   ```
2. Install PNPM packages
   ```sh
   pnpm install
   ```
3. Run
   ```sh
   pnpm run dev
   ```

### Running Tests

To run the automated tests, use:

```sh
pnpm test
```

For a full production build:

```sh
pnpm build
```
   
### How to view the pages done

_Below are steps to follow to view the live website._

1. visit
   ```sh
   https://solomon-victor-akuson-lendsqr-fe-test.vercel.app/
   ```
   <img width="1424" height="844" alt="Screenshot 2026-02-06 at 6 04 48 PM" src="https://github.com/user-attachments/assets/3b65a1d2-1443-4662-ad33-00acd0c8f47b" />

2. Fill the login credentials. Only client-side validation is done on them, so make sure you enter a valid email address and a password that's at least 6 characters long with the addition of special characters in them. Once you click on the submit button, you will be redirected to the ```/dashboard/users``` where it has a list of user records. It pulls from a mock API with 500 records.

<img width="1430" height="842" alt="Screenshot 2026-02-06 at 6 04 23 PM" src="https://github.com/user-attachments/assets/ccb089f4-e5b2-4f1b-a4e9-332983fd7337" />

3. Click on an organisation name from the listed records to be directed to the organisation details page.

<img width="1427" height="854" alt="Screenshot 2026-02-06 at 6 04 35 PM" src="https://github.com/user-attachments/assets/a746b445-a6cb-4de3-ab10-6424d921ce13" />


<p align="right">(<a href="#readme-top">back to top</a>)</p>
