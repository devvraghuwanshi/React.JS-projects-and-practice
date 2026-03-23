# React Props (Advanced)

This project explores advanced concepts of **props in React**, including destructuring, default props, children props, and passing functions.

## 📌 Topics Covered

* Props destructuring
* Default props
* Passing functions as props
* Children props
* Conditional rendering using props

## 🚀 Features

* Clean and optimized component structure
* Reusable and dynamic components
* Handling complex data via props

## 📂 Example Code

### 🔹 Destructuring Props

```jsx
function User({ name, age }) {
  return <p>{name} is {age} years old</p>;
}
```

---

### 🔹 Default Props

```jsx
function Button({ text = "Click Me" }) {
  return <button>{text}</button>;
}
```

---

### 🔹 Passing Function as Props

```jsx
function Parent() {
  const showMessage = () => {
    alert("Hello from Parent!");
  };

  return <Child handleClick={showMessage} />;
}

function Child({ handleClick }) {
  return <button onClick={handleClick}>Click</button>;
}
```

---

### 🔹 Children Props

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

// Usage
<Card>
  <h2>This is inside Card</h2>
</Card>
```

---

## 🧠 Key Concepts

* Props destructuring improves readability
* Default props prevent undefined values
* Functions can be passed as props for interaction
* `children` allows flexible component composition

## 🎯 Learning Outcome

After this project, you will be able to:

* Build scalable and reusable components
* Handle dynamic and complex data
* Use advanced React patterns with props

## 💡 Best Practices

* Keep components small and focused
* Use destructuring for clean code
* Validate props using PropTypes (optional)

---

⭐ This project is part of my React learning journey!
