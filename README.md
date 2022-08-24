# Spending calculator

## Overview

<ul>
   <li> A spending calculator to track a users purchases and display them based on the selected purchase category and necessity status. </li>
   <li>The application consists of a single landing page. The top of the page displays a purchase input form where users input the details of their purchase. They need to input a name, an amount, select a category and then check the box if it's considered a necessary purchase or not. </li>
   <li>After a user submits a purchase using the form it is displayed below in the <b>All Purchases</b> section and its added purchase total is reflected in the <b>Total purchases amount</b>. Depending on other user inputs depends on how the input item is further displayed.</li>
   <li> If a user selects the purchase was a necessary purchase, the item card will be displayed with a <b>Necessary Purchase</b> tag and its total will get added to the <b>Necessary purchases amount</b>. If it was not selected as a necessary purchase, the item card will be displayed with a <b>Wants Purchase</b> tag and its total will be added to the <b> Wants purchases total</b>. </li>
   <li>Depending on what category the user selects will determine where its information is specifically displayed. For example, if a user selects the category “Housing” while entering a purchase, the purchase will be included in the “Housing Purchases” section and the purchase amount will be added to the housing purchases total. </li>
   <li>There's a lot of throwaway code in here ATM I used this project to learn TypeScript</li>
 
</ul>

## Preview

[See live application](https://6305aac866ca152a76d61936--precious-pixie-9c2bf8.netlify.app/)

Purchase input form with all submitted purchases displayed directly below along with displayed purchase totals.

![Alt text](./public/money-1.png?raw=true)

Purchases sorted into their purchase categories along with the purchase category totals.
![Alt text](./public/money-2.png?raw=true)

## Getting Started

### 1. Clone the repository and install the dependencies using NPM.

```
git clone https://github.com/melxincognito/where-did-my-money-go-typescript.git
cd where-did-my-money-go
npm i
```

### 2. Run the app locally

```
npm start
```

### 3. Run all automated tests

```
npm test
```

### 4. View application locally

Open your browser to <b>localhost:3000</b> to view the application locally

## Dependencies

Dependencies List:

<ul>
<li>typescript 4.7.4</li>
<li>react 18.2.0</li>
<li>react-scripts </li>
<li>react-router-dom</li>
<li>react-dom</li>
<li>@types/react-dom </li>
<li>@types/react </li>
<li>@types/node</li>
<li>@types/jest</li>
<li>@testing-library/user-event</li>
<li>@testing-library/react </li>
<li>@testing-library/jest-dom</li>
<li>nanoid</li>
<li>@mui/material </li>
<li>@emotion/react </li>
<li>@emotion/styled </li>
<li>@mui/system </li>
<li>@mui/icons-material </li>

</ul>
