// Do these initial things To create a React app.

1.make index.html file by boiler plate and add one div in body and give its id after that inside the body write a script tag in div. <script type="module" src="index.js"></script>  .
2.create an index.js file  in which create root through reactdom and  render app.js .
3.create a App.js file and make functional component inside it;

// To create a React app
# commands.
>> npm init or npm init -y
after that install dependencies by commands 
>>npm install -D parcel

.. Also make a gitignore file which ignores the file at time of pushing to git.

After that you bring react in your project by writing command 
>> npm install react react-dom 

# now you can run your app by command << npx parcel index.html but for making it easy add 
start script in package.json which is "start": "parcel index.html"

# now u can run your web by command
>> npm start or npm run start.


If u r unable to create react app from parcel then go through this  below link 
>>link 
https://parceljs.org/recipes/react/


# For routing path , i mean going on a path go to a specific page do routing .
install from command
>> npm i react-router-dom.

Use Link tag to link to a page from specfic path
<Link to="path">link here</Link>


# install tailwind css with parcel by following commands.
>> npm install -D tailwindcss postcss
>> npx tailwindcss init   

# after that Create a .postcssrc file in your project root
and copy the below code.

{
  "plugins": {
    "tailwindcss": {}
  }
}

#after that do this in tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

# after that create index.css file and add 

@tailwind base;
@tailwind components;
@tailwind utilities;

# after that go to index.html file and add inside head 

<link href="./index.css" type="text/css" rel="stylesheet">

>> If U r unable to understand follow this link.

https://tailwindcss.com/docs/guides/parcel


*******************************************************************************************
If tailwind intelligience is not showing classname then write classname with double quote classname=""
*******************************************************************************************
particle js react
npm install react-particles
npm install tsparticles-slim