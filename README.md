a

### COSC2758 Further Web Programming - Final Assignment

Student id: s3698211

Student name: To Hoang Khoi

### To run the application:

1. Open the root folder.
2. Run "npm install" to install on the dependencies.
3. Run "npm start" to launch the application. The application will run at "http://localhost:3000/"

---

### Task A:

Github repository link: https://github.com/rmit-fwp-s2-2021/s3692811-a3

### Task B:

The code for the portfolio cards mapping can be found in "Home.js". The code for each individual portfolio card can be found inside "PortFolioCard.js".

The data is hardcoded and stored in "data.js".

The image is downloaded from free source website called "https://unsplash.com/s/photos/avatar" and store in "public/images" folder.

### Task C:

Implemented within the "search" function in "Home.js".

### Task D:

The useEffect in custom hook are used to clear the input of the search bar after the search action is made.

To test this Task, go to the "custom_hook/useInput.js" and uncomment the code from line 11 - 13. Then go to "Home.js" and comment the code from line 18 - 23.

### Task E:

(\*\*\*Make sure the changes in task D are reverted before testing the feature in this Task.)

Implemented in "Home.js".

A useEffect hook is used to automatically search when there is a correct key pair value in localStorage (i.e: "input" : "Nikolai").

### Task F:

Tests are written inside "Home.test.js".

Test 1: Test the custom hook used for the search functions to control the input value inside the search bar.

Test 2: Test if the data is stored inside the localStorage correctly.
