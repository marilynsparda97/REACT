export function Login() {
  const [password, setPassword] = useState("");

  return (
    <form>
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button 
        style={{ backgroundColor: password.length < 8 ? 'red' : 'green', color: 'white' }}
      >
        Login
      </button>
    </form>
  );
}