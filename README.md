# Intro component with sign up form solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](design/desktop-design.jpg)

### Links

- GitHub URL: [GitHub Repository](https://github.com/Atrin-Abbasian/intro-component-with-signup-form)
- Live Site URL: [GitHub Pages](https://atrin-abbasian.github.io/intro-component-with-signup-form)

## My process

### Built with

- Semantic HTML5 markup
- CSS3 custom properties
- JavaScript (ES6)
- Bootstrap 4
- Flexbox

### What I learned

This project, despite being simple and small, taught me good and small points. Tips that will help me a lot in the future. It was a good experience overall.

```html
<div class="col-xs-10 col-lg-6 mx-auto">
   <p class="side-info text-center"><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
     <form class="form" id="form">
        <div class="form-group">
          <input type="text" class="form-control submit-form" id="first-name" placeholder="First Name">
          <i class="fas fa-check-circle success-icon"></i>
          <img src="images/icon-error.svg" alt="error" class="error-icon">
          <span class="message"></span>
        </div>
      </form>
</div>
```
```css
.success .submit-form {
    border: 2px solid #2ECC71;
}

.error-message .submit-form {
    border: 2px solid #FF7979;
}

.success .success-icon {
    visibility: visible;
}

.error-message .error-icon {
    visibility: visible;
}

.error-message .message {
    color: #FF7979;
    visibility: visible;
}

.error-message ::placeholder {
    color: #FF7979;
}
```
```js
if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be empty');
    } else if (passwordValue.length < 8) {
        setErrorFor(password, 'Your password must be at least 8 characters');
    } else if (passwordValue.search(/[a-z]/i) < 0) {
        setErrorFor(password, 'Your password must contain at least one letter');
    } else if (passwordValue.search(/[0-9]/) < 0) {
        setErrorFor(password, 'Your password must contain at least one digit');
    } else {
        setSuccessFor(password);
    }
```

## Author

- Website - [My Website](https://www.atrindev.ir)
- Linkedin - [My Linkedin](https://www.linkedin.com/in/atrindev)
