# Create an Account - Sign-Up Page

A simple, responsive sign-up page that allows users to create an account with password visibility toggle and form validation.

## Features

- **Form Fields:**
  - First Name
  - Last Name
  - Email Address
  - Password (with visibility toggle)
  - Terms and Conditions checkbox
- **Responsive Design:** Adjusts for mobile, tablet, and desktop views.
- **Form Validation:**
  - Ensures all fields are filled out before submission.
  - Requires agreement to terms and conditions before submitting.
- **Password Visibility Toggle:** Allows users to show/hide their password by clicking on an eye icon.

## Technologies Used

- **HTML5:** Used to create the page structure.
- **CSS3:** Used for styling, including responsive layouts.
- **JavaScript:** For handling form submission, password visibility toggle, and form validation.

## Installation

To view and interact with the project, simply clone the repository and open the `index.html` file in a web browser.

1. Clone the repository:
   ```bash
   git clone https://github.com/rhuanlucasdev/theodinproject-signupForm.git
   ```
2. Open the ```index.html``` file in your browser.

## How It Works

**Form Validation**

* The form will not submit unless all required fields are filled out.
* The user must agree to the terms and conditions by checking the checkbox.
* When the form is successfully submitted, an alert will be shown and the page will be redirected or reloaded.
  
**Password Visibility Toggle**

*Click the eye icon next to the password field to toggle visibility between plain text and password.

**Example Form**
```html
  <form>
    <input type="text" placeholder="First name" required>
    <input type="text" placeholder="Last name" required>
    <input type="email" placeholder="email@email.com" required>
    <input type="password" placeholder="Enter a password" required>
    <button type="button" class="showPassword">Show/Hide Password</button>
    <input type="checkbox" id="terms" required>
    <label for="terms">By checking this box, you agree to the Terms and Conditions.</label>
    <button type="submit">Create Account</button>
</form>
 ```
**Contribution**

Feel free to fork this repository and make improvements. If you want to contribute, just follow these steps:

1. Fork the repo
2. Create a new branch (git checkout -b feature-xyz)
3. Make your changes
4. Commit your changes (git commit -am 'Add feature xyz')
5. Push to your branch (git push origin feature-xyz)
6. Open a pull request to the main repository

Made with ❤️ by [Rhuan Lucas](https://github.com/rhuanlucasdev).
