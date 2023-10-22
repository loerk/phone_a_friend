export default function SelectTime({ setTime }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <select
        style={{
          fontSize: '1.5rem',
          padding: '0.5rem',
          marginLeft: '1rem',
          border: '4px solid black',
          outline: 'none',
          background: 'transparent'
        }}
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="0:15">0:15</option>
        <option value="0:30">0:30</option>
        <option value="1:00">1:00</option>
      </select>
    </div>
  );
}
