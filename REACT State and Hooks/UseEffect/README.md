# ⚛️ React useEffect Hook - Complete Guide

## 📌 Introduction

The `useEffect` hook is used to handle **side effects** in React functional components.

Side effects include:

* Fetching data from APIs
* DOM manipulation
* Timers (setTimeout / setInterval)
* Subscriptions

Before hooks, side effects were handled using lifecycle methods in class components like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

---

## 🔹 What is useEffect?

`useEffect` is a React Hook that allows you to perform side effects in functional components.

👉 It runs after the component renders.

---

## 🔹 Syntax

```javascript id="v4p3cx"
useEffect(() => {
  // side effect code

  return () => {
    // cleanup code (optional)
  };
}, [dependencies]);
```

---

## 🔹 Parameters Explained

### 1️⃣ Effect Function

```javascript id="8xg9dz"
() => {
  // your logic here
}
```

### 2️⃣ Cleanup Function (Optional)

```javascript id="lq6yzt"
return () => {
  // cleanup logic
}
```

👉 Runs when:

* Component unmounts
* Before next effect runs

---

### 3️⃣ Dependency Array

```javascript id="9x0v2m"
[dependencies]
```

Controls **when the effect runs**.

---

## 🔹 Different useEffect Cases

---

### ✅ 1. Runs on Every Render

```javascript id="yo7d0b"
useEffect(() => {
  console.log("Runs on every render");
});
```

👉 No dependency array

---

### ✅ 2. Runs Only Once (Component Mount)

```javascript id="c5d9xt"
useEffect(() => {
  console.log("Runs only once");
}, []);
```

👉 Empty dependency array

---

### ✅ 3. Runs When Dependency Changes

```javascript id="j2szlp"
useEffect(() => {
  console.log("Count changed:", count);
}, [count]);
```

---

## 🔹 Basic Example

```javascript id="v4uvy6"
import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered or count changed");
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}
```

---

## 🔹 API Fetch Example

```javascript id="szr9r1"
import { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
}
```

---

## 🔹 Cleanup Example (Important 🚨)

```javascript id="g6h5sr"
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

👉 Prevents memory leaks

---

## 🔹 useEffect with Multiple Dependencies

```javascript id="h4n8tz"
useEffect(() => {
  console.log("Name or Age changed");
}, [name, age]);
```

---

## 🔹 Important Rules

✔ Always define dependencies correctly
✔ Avoid infinite loops
✔ Cleanup side effects when needed
✔ Do not use for pure calculations

---

## 🔹 Common Mistakes

### ❌ Missing Dependency

```javascript id="6r3d1o"
useEffect(() => {
  console.log(count);
}, []);
```

👉 `count` should be in dependency array

---

### ❌ Infinite Loop

```javascript id="b2r8z9"
useEffect(() => {
  setCount(count + 1);
}, [count]);
```

---

### ❌ Async Directly in useEffect

```javascript id="2z2lcm"
useEffect(async () => {
  // ❌ Wrong
});
```

### ✅ Correct Way

```javascript id="z0m4kf"
useEffect(() => {
  const fetchData = async () => {
    // async code
  };
  fetchData();
}, []);
```

---

## 🔹 When to Use useEffect?

Use it for:

* API calls
* Event listeners
* Timers
* Updating document title
* Subscriptions

---

## 🔹 useEffect vs useLayoutEffect

| Feature           | useEffect  | useLayoutEffect |
| ----------------- | ---------- | --------------- |
| Runs after paint  | ✅ Yes      | ❌ No            |
| Runs before paint | ❌ No       | ✅ Yes           |
| Use case          | Most cases | DOM measurement |

---

## 🔹 Real-World Use Cases

* Fetching data from APIs
* Form validation
* Animations
* Syncing with localStorage
* Listening to window events

---

## 🔹 Pro Tips 💡

* Split multiple effects instead of writing one big effect
* Keep effects focused and clean
* Use cleanup to avoid bugs
* Always think about dependencies

---

## 🚀 Conclusion

The `useEffect` hook is essential for handling side effects in React. Mastering it will help you build dynamic and real-world applications efficiently.

---

## 📚 Author

👨‍💻 Created by [Dev Raghuwanshi]

---

## ⭐ Support

If you found this helpful, give this repo a ⭐ and share it!

---
