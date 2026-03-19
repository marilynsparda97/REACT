export function Counter({ count }) {
  const counterStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333'
  };

  return (
    <div>
      <span style={counterStyle}>{count}</span>
    </div>
  );
}