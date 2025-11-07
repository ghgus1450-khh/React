import { Link } from "react-router-dom";
import StudentList from "./StudentList";

export default function Student(){
    const stdName = ["이순신","장보고","박문수"];

    return(
        <>
            <Link to="/" className="home">HOME</Link>
            <StudentList names={stdName} />
        </>
    );
}