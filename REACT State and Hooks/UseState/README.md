# ⚛️ React useState Hook - Complete Guide

## 📌 Introduction

The `useState` hook is one of the most fundamental hooks in React. It allows functional components to manage and update state.

Before hooks, state was only available in class components. With `useState`, we can now use state in functional components easily.

---

## 🔹 What is useState?

`useState` is a React Hook that lets you add state to functional components.

👉 It returns:

* Current state value
* A function to update that state

---

## 🔹 Syntax

```javascript
const [state, setState] = useState(initialValue);
```

### 🧠 Explanation:

* `state` → current value
* `setState` → function to update value
* `initialValue` → starting value of state

---

## 🔹 Basic Example

```javascript
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}
```

---

## 🔹 Updating State

### ✅ Direct Update

```javascript
setCount(count + 1);
```

### ✅ Functional Update (Recommended)

```javascript
setCount(prevCount => prevCount + 1);
```

👉 Use functional update when state depends on previous value.

---

## 🔹 Multiple State Variables

```javascript
const [name, setName] = useState("");
const [age, setAge] = useState(18);
```

---

## 🔹 State with Objects

```javascript
const [user, setUser] = useState({
  name: "",
  age: 0
});
```

### ✅ Updating Object State

```javascript
setUser({
  ...user,
  name: "Dev"
});
```

⚠️ Always use spread operator to avoid overwriting other values.

---

## 🔹 State with Arrays

```javascript
const [items, setItems] = useState([]);
```

### ✅ Adding Item

```javascript
setItems([...items, "New Item"]);
```

### ✅ Removing Item

```javascript
setItems(items.filter(item => item !== "New Item"));
```

---

## 🔹 Controlled Components Example

```javascript
import { useState } from "react";

export default function Form() {
  const [input, setInput] = useState("");

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>{input}</p>
    </>
  );
}
```

---

## 🔹 Important Rules

✔ Always call hooks at the top level
✔ Do not call inside loops or conditions
✔ State updates are asynchronous
✔ Do not mutate state directly

---

## 🔹 Common Mistakes

### ❌ Wrong (Mutating state)

```javascript
count++;
setCount(count);
```

### ✅ Correct

```javascript
setCount(count + 1);
```

---

## 🔹 When to Use useState?

Use `useState` when:

* You need simple state
* Managing form inputs
* Toggling UI elements
* Handling user interaction

---

## 🔹 useState vs useReducer

| Feature       | useState  | useReducer |
| ------------- | --------- | ---------- |
| Simple state  | ✅ Best    | ❌ Overkill |
| Complex logic | ❌ Hard    | ✅ Better   |
| Large apps    | ❌ Limited | ✅ Scalable |

---

## 🔹 Real-World Use Cases

* Form handling
* Toggle buttons (dark mode)
* Counters
* Dynamic lists
* Input validation

---

## 🔹 Advanced Tip

You can initialize state lazily:

```javascript
const [value, setValue] = useState(() => {
  return expensiveCalculation();
});
```

👉 Useful for performance optimization.

---

## 🚀 Conclusion

The `useState` hook is essential for managing state in React functional components. It is simple, powerful, and widely used in almost every React application.

---

## 📚 Author

👨‍💻 Created by [Dev Raghuwanshi]

---

## ⭐ Support

If you found this helpful, give this repo a ⭐ and share it!

---
