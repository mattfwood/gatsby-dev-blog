---
layout: post
title: A Farewell To Render Props
date: '2019-01-29'
spoiler: Welcoming Our New Hook Overlords
draft: true
tags:
  - React
---

If you haven't heard, React Hooks are [coming soon™](https://github.com/facebook/react/pull/14679).

There's already a [running joke](https://twitter.com/acdlite/status/1088509971015262208) that render props are a thing of the past. And frankly, maybe it's for the best.

In fact, one of the key motivations for introducing hooks was avoiding all of the "render prop" nesting that can happen when you try to share logic too aggressively. Which was discouraging, because sharing reusable logic _feels_ like a core value of React.

So where did they go wrong?

## Misleading Hierarchies
Take this snippet from a hypothetical React app using `react-apollo` to fetch data:

```javascript
<Query>
  {({ data, loading, error }) => (
    <Mutation>
      {updateData => (
        <div>
          {!loading && (
            <input initialValue={data.value} />
          )}
          <button onClick={updateData}></button>
        </div>
      )}
    </Mutation>
  )}
</Query>
```

This example has been simplified, but you get the idea.

What ends up feeling misleading here is that `<Query />` and `<Mutation />` are not actually rendering any markup to the page. In this snippet, `<div>` is technically the outermost component, but it needs _8_ spaces of indentation before it can render, and it creates a false sense of hierarchy.

You can use tools like react-adopt to combine them together, but it's not an intuitive solution to what feels like should be a built-in React feature.

## More (Render) Props, More Problems

<!-- How can we access stateful logic without having to declare whole new components for them? -->

