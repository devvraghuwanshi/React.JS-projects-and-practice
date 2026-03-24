# ⚛️ React useRef Hook - Complete Guide

## 📌 Introduction

The `useRef` hook is used to create a **mutable reference** that persists across renders without causing re-renders.

It is commonly used for:

* Accessing DOM elements
* Storing values without re-rendering
* Keeping previous values

---

## 🔹 What is useRef?

`useRef` is a React Hook that returns a **mutable object** with a `.current` property.

👉 This value persists across renders and does NOT trigger re-render when updated.

---

## 🔹 Syntax

```javascript id="7l1h2g"
const ref = useRef(initialValue);
```

### 🧠 Structure:

```javascript id="0v0r1f"
{
  current: initialValue
}
```

---

## 🔹 Basic Example

```javascript id="n4e8ks"
import { useRef } from "react";

export default function Example() {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current++;
    console.log(countRef.current);
  };

  return (
    <>
      <button onClick={handleClick}>Increase</button>
    </>
  );
}
```

👉 Updating `useRef` does NOT re-render UI

---

## 🔹 Accessing DOM Elements

```javascript id="q2k9mz"
import { useRef } from "react";

export default function InputFocus() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
```

---

## 🔹 Persisting Values Across Renders

```javascript id="n9q3pt"
import { useRef, useState } from "react";

export default function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  const handleClick = () => {
    prevCount.current = count;
    setCount(count + 1);
  };

  return (
    <>
      <h1>Current: {count}</h1>
      <h2>Previous: {prevCount.current}</h2>
      <button onClick={handleClick}>Increase</button>
    </>
  );
}
```

---

## 🔹 useRef vs useState

| Feature              | useRef            | useState |
| -------------------- | ----------------- | -------- |
| Causes re-render     | ❌ No              | ✅ Yes    |
| Stores mutable value | ✅ Yes             | ❌ No     |
| Used for UI updates  | ❌ No              | ✅ Yes    |
| Best for             | DOM & persistence | UI state |

---

## 🔹 Common Use Cases

### ✅ 1. Storing DOM References

* Input focus
* Scroll handling
* Measuring elements

### ✅ 2. Storing Timer IDs

```javascript id="w9f2h8"
const timerRef = useRef();

timerRef.current = setInterval(() => {
  console.log("Running...");
}, 1000);
```

---

### ✅ 3. Avoiding Re-renders

```javascript id="p3x8lv"
const renderCount = useRef(0);
renderCount.current++;
```

---

## 🔹 Important Rules

✔ Changing `.current` does NOT re-render
✔ Value persists between renders
✔ Do not use for UI state
✔ Can directly access DOM

---

## 🔹 Common Mistakes

### ❌ Expecting Re-render

```javascript id="4l2m9r"
ref.current = 10; // UI will NOT update
```

---

### ❌ Using Instead of State for UI

```javascript id="y6x2zw"
const countRef = useRef(0); // ❌ Not for UI display
```

---

## 🔹 When to Use useRef?

Use it when:

* You need DOM access
* You want to store values without re-render
* You need previous values
* You want to store mutable variables

---

## 🔹 Real-World Use Cases

* Auto focus input fields
* Stopwatch / timers
* Tracking previous props/state
* Integrating third-party libraries
* Managing animations

---

## 🔹 Pro Tips 💡

* Combine with `useEffect` for DOM manipulation
* Do not overuse instead of state
* Use for performance optimization
* Keep logic simple and clear

---

## 🔹 Advanced Example (Timer Control)

```javascript id="n8z1kp"
import { useRef, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  const start = () => {
    timerRef.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(timerRef.current);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  );
}
```

---

## 🚀 Conclusion

The `useRef` hook is a powerful tool for handling mutable values and DOM access without triggering re-renders. It is essential for performance optimization and advanced React patterns.

---

## 📚 Author

👨‍💻 Created by [Dev Raghuwanshi]

---

## ⭐ Support

If you found this helpful, give this repo a ⭐ and share it!

---
