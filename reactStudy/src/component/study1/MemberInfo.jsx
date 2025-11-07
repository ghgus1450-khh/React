export default function MemberInfo( {user : {userId, age}} ){
    return (
        <>
            아이디 : {userId} <br/>
            나이 : {age} 
        </>
    );
}