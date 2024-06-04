# Third todo-app

## Description of the project

This time I had to add local storage feature to this todo-app (what worth will this app have if it couldn't remember your to-dos!)

* For some reason, I was told that it may have something to do with the way Opera GX handles web headers, if you close and restore the tab it will not show correctly your last changes, although the app did save them (you can refresh the page and everything should be OK)

## I learnt

* What happens when you mutate the state and pass it as new state... -> nothing! You need to create a new reference of that object to React actually run any re-render: More in [useState reference](https://react.dev/reference/react/useState#updating-objects-and-arrays-in-state)

## What comes next

In [03-todo-app](../03-todo-app/) I'll be adding local storage functionality. So the data persists over  sessions!

> "It's not much, but it's honest work."
>
> _Some guy (probably)_
