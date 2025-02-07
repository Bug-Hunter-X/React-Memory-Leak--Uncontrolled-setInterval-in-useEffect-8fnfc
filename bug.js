```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval. The return value is not used to clear the interval.
    setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); 
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```