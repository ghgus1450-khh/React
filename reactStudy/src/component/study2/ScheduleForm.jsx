export default function ScheduleForm({ time, text, setTime, setText, onAdd }){
    return(
        <div style={{ display:"grid", gap:8, gridTemplateColumns:"140px 1fr auto" }}>
            <input type="time" value={time} onChange={ (e) => setTime(e.target.value)} />
            <input type="text" value={text} onChange={ (e) => setText(e.target.value)} placeholder="내용 입력"/>
            <button onClick={onAdd}>등록</button>
        </div>
    );
}