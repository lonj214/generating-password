# Password Generator

## Description

- My motication for this project was to learn how to use JavaScript effectively, so I could build a password generator. This project requires many JavaScript skills. These skills are things I  wanted to improve on, and learn how to use effectively.
- I built this project so users could have a password generated for them by inputing their preferences. 
- This gives users a password that is safe to use, and that will keep other people from hacking their accounts. This allows the user to choose the length and what characters they want to include in their password. 
- During this project I learned how to use array's, strings, for loops, if/else statements, console.logs, constants, and JavaScript functions.

## Installation

- I began by downloading the zipped starter code.
- I then created my own GitHub repository named 'password-generator'.
- I added the starter code to my GitHub repo.
- I cloned my GitHub repo into my local terminal and began to work on the JavaScript file in VS Code.
- I started with my 'const' that has all the possibilites for the password. Including the length, special characters, lower case letters, upper case letters, and numbers.
- I created a minimum of 8 and a maximum of 128 characters long. I made a function for this that will prompt users about how many characters they would like. I set up an alert that will notify users if they do not meet the minimum and maximum requirements of the password length. In the box it will return with "Please try again".
- If the user puts in characters that are not a number it will alert them with 'Needs to be a number'. I did this by using 'isNaN'. So, if the user does this the box will return with "Please try again".
- I created a series of prompts that will ask the user if they would like to use special characters, upper case, lower case, and numbers in their password. These are all nested in a function called generatePassword. The prompts are in 'if' statements that will console log as true or false. If the user confirms the statment it will be true, or if the user cancel's the statement it will log as false.
- I created a 'for loop' that will take what the user's input for their preferences and generate a password.
- This was all done by creating a function for the 'generateBtn'.


## Usage

- When users click the 'Generate Password' button. The first prompt will appear. It asks the user 'How many characters would you like your password to contain?'. They must enter a valid number that is no less than 8 characters long and no more than 128 characters long.
- If the user does not meet the length requirement an alert will notify them. If they enter a number less than 8, the alert will read 'Must be at least 8 characters long.' If they enter a number higher than 128 the alert will read 'Cannot be longer than 128 characters.'
- The user will need to confirm this by clicking 'OK'. They will then need to click the 'Generate Password' button again.
- In the box it will say "Please try again".
- If the user tries to type in for example 'cat' into the userChoice box it will alert them "Needs to be a number", and in the box state "Please try again".
- They will be prompted again to enter the length of their password.
- Once the user has entered a valid length they will see the follow up prompt that says "Click 'OK' to confirm including special characters". If the user would like to include special characters in their password they will click 'OK', or 'Cancel' if they don't want to include them.
- The next prompt will ask 'Click 'OK' to confirm including numeric characters'. If the user would like to include numbers in their password they will click 'OK', or 'Cancel' if they don't want to include them.
- Followed by, 'Click 'OK' to confirm including lowercase characters'. If the user would like to include lower case letters in their password they will click 'OK', or 'Cancel' if they don't want to include them.
- Lastly, 'Click 'OK' to confirm including uppercase characters'. If the user would like to include upper case letters in their password they will click 'OK', or 'Cancel' if they don't want to include them.
- Inside of the box the user will be presented with a password that meets all of the requirements they input.

## License

MIT license

## Deployment

The application is not deployed at live URL.
The application is loading with errors.
I am going to office hours to ask why it is not loading properly from my GitHub pages.

[link](https://lonj214.github.io/generating-password/)


## Screenshots

![screenshot](./assets/password-1.png)
![screenshot](./assets/password-2.png)
![screenshot](./assets/password-3.png)
![screenshot](./assets/password-4.png)
![screenshot](./assets/password-5.png)
![screenshot](./assets/password-6.png)
![screenshot](./assets/password-7.png)
![screenshot](./assets/password-8.png)
![screenshot](./assets/password-9.png)
![screenshot](./assets/password-10.png)
![screenshot](./assets/password-11.png)
![screenshot](./assets/password-12.png)