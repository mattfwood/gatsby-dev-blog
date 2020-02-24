---
slug: "red-flags-in-react"
title: "Red Flags in React"
date: "2020-02-20"
draft: true
spoiler: "Patterns to avoid while building React components"
tags:
  - "React"
  - "Programming"

---

# 1. Storing State in Two Places

There may be a small number of edge cases to this rule, but 99% of the time if you find yourself storing state in two places, you probably need to lift state to avoid potential bugs.

Here's an example:

```jsx
const Input = ({ value, ...props }) => {
  const [inputValue, setInputValue] = useState(value);
  return (
    <input
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
        onChange(e.target.value);
      }}
    />
  )
}

const Form = () => {
  const [name, setName] = useState('');

  return (
    <form>
      <Input value={name} onChange={e => setName(e.target.value)} />
    </form>
  )
}
```

Here you can probably see some places where bugs could be introduced. For example, if you wanted to "clear" a form after it's been submitted, you would not be able to clear the form from the `<Form />` component.

Also, if someone saw this component they would assume that the `value` prop controls the state, but it actually only controls the _initial_ state of the component, so someone else could get stuck thinking there's a bug when they update the `<Input />` component's value but it doesn't change the value that's displayed.

# 2. Using props as "initial" state instead of passing them down to the component
