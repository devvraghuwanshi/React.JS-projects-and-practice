# ⚛️ React JSX Practice

This repository contains my **React JSX practice examples** while learning React fundamentals.
The goal of this repository is to understand **JSX syntax, rules, expressions, components, and rendering techniques** in React.

---

## 📚 Topics Covered

* JSX Basics
* JSX Rules
* JavaScript Expressions in JSX
* JSX Fragments
* Inline Styling in JSX
* Conditional Rendering
* List Rendering using `map()`
* Event Handling
* React Components

---

## 📂 Example Concepts

### JSX Expressions

Using JavaScript inside JSX with curly braces `{}`.

```jsx
<h1>Sum is {10 + 20}</h1>
```

---

### Conditional Rendering

```jsx
{admin ? "User is Admin" : "Normal User"}
```

---

### List Rendering

```jsx
<ul>
  {fruits.map((fruit, index) => (
    <li key={index}>{fruit}</li>
  ))}
</ul>
```

---

### Inline Styling

```jsx
const style = {
  color: "white",
  backgroundColor: "black"
};

<h1 style={style}>Hello World</h1>
```

---

## 🧠 JSX Rules

1. JSX must return **one parent element**
2. All JSX tags must be **properly closed**
3. Use **className instead of class**
4. JavaScript must be written inside **{ }**
5. Attributes must use **camelCase**
6. Inline CSS must be a **JavaScript object**
7. Lists rendered using `.map()` must have a **unique key**
8. JSX supports **JavaScript expressions but not statements**
9. JSX is a **JavaScript syntax extension**

---

## 🛠️ Technologies Used

* React
* JavaScript (ES6+)
* JSX
* Vite / Create React App

---

## 📖 Purpose

This repository is created for:

* Practicing **React JSX concepts**
* Understanding **React component structure**
* Learning **best practices for JSX**

---

## 🚀 Future Improvements

* More React component examples
* State and Props practice
* Hooks examples
* Small React projects

---

## 👨‍💻 Author

**Dev Raghuwanshi**

Learning **React & Full Stack Development**.
