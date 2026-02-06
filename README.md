<a name="readme-top"></a>

<div align="center">
  <a href="https://github.com/heysolomon/lendsqr-fe-test/">
    <img src="https://github.com/heysolomon/lendsqr-fe-test/assets/59674245/f685e10d-b65a-4607-8b95-84fd143028b0" alt="Logo" width="200" height="">
  </a>

  <h3 align="center">Lendsqr Test</h3>

  <p align="center">
   This is a front-end developer test for a role at Lendsqr. The task is translating Figma designs(4 screens) into fully responsive websites. Lendsqr is the best loan management system for smart lenders. 
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

![lendsqr](https://github.com/heysolomon/lendsqr-fe-test/assets/59674245/41c1dcc8-a3c0-4933-aa97-2e11663d9ccf)

### Built With

* [Next.js](https://nextjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [SCSS](https://sass-lang.com/)
* [Radix UI](https://www.radix-ui.com/)
* [React Hook Form](https://react-hook-form.com/)
* [React query](https://tanstack.com/query/latest)
* [Zod](https://zod.dev/)

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
   
### How to view the pages done

_Below are steps to follow to view the live website._

1. visit
   ```sh
   https://solomon-victor-akuson-lendsqr-fe-test.vercel.app/
   ```
   ![Login page](https://github.com/heysolomon/lendsqr-fe-test/assets/59674245/8f9febfa-acd3-4949-b8ad-aab322c3818c)

2. Fill the login credentials. Only client-side validation is done on them, so make sure you enter a valid email address and a password that's at least 6 characters long with the addition of special characters in them. Once you click on the submit button, you will be redirected to the ```/dashboard/users``` where it has a list of user records. It pulls from a mock API with 500 records.
![dashboard](https://github.com/heysolomon/lendsqr-fe-test/assets/59674245/fe64615a-b86f-46b2-aa33-bb8c85b771c1)

3. Click on an organisation name from the listed records to be directed to the organisation details page.
   ![user details page](https://github.com/heysolomon/lendsqr-fe-test/assets/59674245/a8b5f174-13b8-4089-92bf-2ce7ad60e9bd)


<p align="right">(<a href="#readme-top">back to top</a>)</p>
