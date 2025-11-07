

export default function StudentList(props){
    return(
        <>
            <h3>학생명단</h3>
            <ul>
                {
                    props.names.map(
                        (name)=> (
                          <li>{name}</li>  
                        )
                    )
                }
            </ul>
        </>
    );
}