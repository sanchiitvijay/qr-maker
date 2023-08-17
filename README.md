# qr-maker


<br>

**This is a simple QR code maker website built using EJS, CSS, JavaScript, and Node.js. It allows users to generate QR codes for the provided content.**

<br>

![Screenshot of a website.](/assests/logo/img1.png)
![Screenshot of a website.](/assests/logo/img2.png)

<br>

## Installation

1. Make sure you have Node.js and npm installed on your system.
2. Clone this repository to your local machine.
```
gh repo clone sanchiitvijay/qr-maker
```
3. Navigate to the project directory using your terminal.
```
cd qr_maker
```
4. Install the required npm modules (express, ejs, body-parser) by running:
```
npm install
```

<br>

## Usage

- Start the application using the following command:
```
node index.js
```
- Open your web browser and go to **http://localhost:3000** to access the to-do list application.
- Enter the URL link for which you want to generate a QR code and click the "Generate" button.
- The generated QR code will be displayed on the website along with the URL.

<br>


## Technologies Used

- EJS: Embedded JavaScript templates for rendering dynamic content.
- CSS: Styling for the user interface.
- Node.js: JavaScript runtime for building server-side applications.
- Bootstrap: Front-end framework for responsive and sleek design.
- qr-maker api: To create qr code using URL
- Javascript: JavaScript is used to add interactivity, dynamic behavior, and enhanced user experiences to websites

<br>

## Dependencies

- body-parser: Node.js body parsing middleware.
- ejs: Embedded JavaScript templates for rendering dynamic content.
- express: Fast, unopinionated, minimalist web framework for Node.js.
- fs: Node.js built-in file system module for reading and writing files.
- qr-image: Node.js library for generating QR codes.

<br>

## File Structure

- app.js: Main application file that sets up the server and routes.
- views/: Contains EJS templates for rendering web pages.
- assests/: Static assets such as CSS files and client-side JavaScript.
- package.json: JSON file to store the task data.