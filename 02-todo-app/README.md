# Basic todo-app

## Description of the project

If you checked out previous todo-app, it's pretty similar the functionality except for (as said in the README) this has the ability to check each task.

I decided to go on and give it a new color palette to each different project to not get bored in the process, who knows...

The "check state" of a task is stored in a state, so in case we wan't to store the task in, for example, a local storage, crossed out tasks will remain that way. (was kinda a pain the head to figure it out but it worked)

## I learnt

- What happens when you mutate the state and pass it as new state... -> nothing! You need to create a new reference of that object to React actually run any re-render: More in [useState reference](https://react.dev/reference/react/useState#updating-objects-and-arrays-in-state)

## What comes next

In [03-todo-app](../03-todo-app/) I'll be adding local storage functionality. So the data persists over  sessions!

> "It's not much, but it's honest work."
>
> _Some guy (probably)_
