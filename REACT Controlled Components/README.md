# ⚛️ React Controlled Components Practice

## 📌 Overview

This project demonstrates the concept of **controlled components in React**, where form elements are managed using React state as the single source of truth.

It includes examples of handling user input, updating state dynamically, and building predictable and maintainable form logic.

---

## 🚀 Features

* Controlled input fields using `useState`
* Real-time state updates with `onChange`
* Handling multiple form fields
* Checkbox and select input handling
* Clean and simple React code for beginners

---

## 🧠 What You Will Learn

* What are controlled components in React
* How to manage form data using state
* Handling events like `onChange`
* Managing multiple inputs efficiently
* Difference between controlled and uncontrolled components

---

## 🛠️ Tech Stack

* React (Functional Components)
* JavaScript (ES6+)
* HTML & CSS

---

## 📂 Project Structure

```
src/
 ├── App.js
 ├── ControlledInput.js
 ├── Form.js
 └── Checkbox.js
```

---

## 📸 Example Code

```jsx
import { useState } from "react";

export default function ControlledInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Your name is: {name}</p>
    </div>
  );
}
```

---

## ⚙️ Installation & Setup

1. Clone the repository

```
git clone https://github.com/devvraghuwanshi/React.JS-projects-and-practice
```

2. Navigate to project folder

```
cd REACT Controlled Components
```

3. Install dependencies

```
npm install
```

4. Run the app

```
npm start
```

---

## 🎯 Key Concept

> In controlled components, React state controls the form inputs, making it the single source of truth.

---

## 📌 Future Improvements

* Add form validation
* Create a full login/signup form
* Integrate with backend APIs

---

## 🤝 Contributing

Feel free to fork this repo and improve it. Pull requests are welcome!

---

## ⭐ Support

If you found this helpful, give it a ⭐ on GitHub!

---
