

export default function BoardView(props){
    return (
        <>
            제목 : {props.title} <br/>
            내용 : {props.content} <br/>
            작성자 : {props.writer} <br/>
            비밀번호 : {props.password} 
        </>


    );
}