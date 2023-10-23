export default function SelectTime({ setTime }) {
  return (
    <select
      style={{
        fontSize: '1.5rem',
        padding: '0.5rem',
        marginLeft: '1rem',
        color: 'rgb(61, 61, 61)',
        border: '4px solid rgb(61, 61, 61)',
        borderRadius: '10px',
        outline: 'none',
        background: 'transparent'
      }}
      onChange={(e) => setTime(e.target.value * 60)}
    >
      <option value="15">15</option>
      <option value="30">30</option>
      <option value="60">60</option>
    </select>
  );
}
