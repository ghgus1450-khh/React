


export default function ScheduleList({items}){
    if(items.length === 0)
        return <p>등록된 일정이없습니다.</p>;
    return(
        <ul style={{padding:0}}>
            {
                items.map(
                    ( {id, time, text} ) => (
                        <li key={id} style={{ marginBottom:6}}>
                            <strong style={{ width: 70, display: "inline-block"}}>{time}</strong>
                            <span >{text}</span>
                        </li>
                    )
                )
            }
        </ul>
    );
}