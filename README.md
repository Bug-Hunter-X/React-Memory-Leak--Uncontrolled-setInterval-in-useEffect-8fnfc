# React Memory Leak: Uncontrolled setInterval in useEffect

This repository demonstrates a common React memory leak caused by the improper use of `setInterval` within the `useEffect` hook.  The example component uses `setInterval` to update a counter every second. However, it fails to clear the interval when the component unmounts, resulting in a persistent interval that continues to run even after the component is no longer needed. This leads to a memory leak and potential performance issues.

## How to reproduce

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the count incrementing every second.
5. Try navigating away from the component (e.g., using React Router) or unmounting the component. The interval will continue to run in the background.

## Solution

The solution involves using the return value of `useEffect` to store a reference to the interval and clearing the interval using `clearInterval` in the cleanup function. This ensures that the interval is properly stopped when the component unmounts.