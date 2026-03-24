# ⚛️ React useContext Hook - Complete Guide

## 📌 Introduction

The `useContext` hook is used to access data from a **React Context** without passing props manually through every level (prop drilling).

It helps in sharing data like:

* User authentication
* Theme (dark/light mode)
* Language settings
* Global state

---

## 🔹 What is useContext?

`useContext` is a React Hook that allows you to **consume values from a Context** directly in a functional component.

👉 It eliminates the need for prop drilling.

---

## 🔹 Syntax

```javascript id="k3m2s1"
const value = useContext(MyContext);
```

---

## 🔹 Step-by-Step Usage

---

### ✅ Step 1: Create Context

```javascript id="x8d2fa"
import { createContext } from "react";

export const MyContext = createContext();
```

---

### ✅ Step 2: Provide Context

```javascript id="n9c7op"
import { MyContext } from "./MyContext";

export default function App() {
  return (
    <MyContext.Provider value="Hello World">
      <Child />
    </MyContext.Provider>
  );
}
```

---

### ✅ Step 3: Consume Context

```javascript id="r7g5zl"
import { useContext } from "react";
import { MyContext } from "./MyContext";

export default function Child() {
  const value = useContext(MyContext);

  return <h1>{value}</h1>;
}
```

---

## 🔹 Full Example (No Prop Drilling 🚀)

```javascript id="t4v8we"
// MyContext.js
import { createContext } from "react";
export const UserContext = createContext();

// App.js
import { UserContext } from "./MyContext";
import Child from "./Child";

export default function App() {
  return (
    <UserContext.Provider value={{ name: "Dev", age: 20 }}>
      <Child />
    </UserContext.Provider>
  );
}

// Child.js
import { useContext } from "react";
import { UserContext } from "./MyContext";

export default function Child() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
    </>
  );
}
```

---

## 🔹 Passing Functions via Context

```javascript id="q2l9vm"
<UserContext.Provider value={{ user, setUser }}>
```

👉 Allows updating global state from any component.

---

## 🔹 useContext with useReducer (Advanced 🔥)

```javascript id="u8y1kd"
const [state, dispatch] = useReducer(reducer, initialState);

<GlobalContext.Provider value={{ state, dispatch }}>
```

👉 Useful for global state management (Redux alternative)

---

## 🔹 Avoiding Prop Drilling

### ❌ Without useContext

```javascript id="a4z9ox"
<App user={user}>
  <Parent user={user}>
    <Child user={user} />
  </Parent>
</App>
```

### ✅ With useContext

```javascript id="c3w7mt"
<Child /> // directly access user
```

---

## 🔹 Important Rules

✔ Must wrap components with Provider
✔ Works only inside Provider tree
✔ Re-renders when context value changes
✔ Use multiple contexts for better structure

---

## 🔹 Common Mistakes

### ❌ Using Outside Provider

```javascript id="f1p8xr"
useContext(MyContext); // ❌ Error if no Provider
```

---

### ❌ Overusing Context

👉 Not for all state (can cause performance issues)

---

## 🔹 When to Use useContext?

Use it for:

* Global state
* Authentication
* Theme management
* App-wide settings

---

## 🔹 When NOT to Use?

❌ Frequently changing state (performance issue)
❌ Local component state
❌ Complex logic → useReducer or Redux

---

## 🔹 useContext vs Props

| Feature         | Props  | useContext |
| --------------- | ------ | ---------- |
| Passing data    | Manual | Automatic  |
| Deep components | ❌ Hard | ✅ Easy     |
| Reusability     | ✅ High | ⚠️ Medium  |

---

## 🔹 Real-World Use Cases

* Dark/Light mode toggle 🌙
* User login system 🔐
* Language translation 🌍
* Global cart state 🛒

---

## 🔹 Pro Tips 💡

* Combine with `useReducer` for scalable apps
* Split contexts to avoid unnecessary re-renders
* Keep context values minimal
* Memoize values if needed

---

## 🔹 Advanced Optimization (Memoization)

```javascript id="m7d2re"
const value = useMemo(() => ({ user, setUser }), [user]);
```

👉 Prevents unnecessary re-renders

---

## 🚀 Conclusion

The `useContext` hook is a powerful way to manage global state and avoid prop drilling in React applications. When used correctly, it simplifies data flow and improves code readability.

---

## 📚 Author

👨‍💻 Created by [Dev Raghuwanshi]

---

## ⭐ Support

If you found this helpful, give this repo a ⭐ and share it!

---
