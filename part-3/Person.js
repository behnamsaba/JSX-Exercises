const Person = ({ name , age , ... props }) => {
    let legalAge = age > 18 ? 'please go vote' : "you must be 18";
    let hobbies = props.hobbies.map(hobby => <li className="list-group-item">{hobby}</li>);

    return(
    <div className="card">
        <div className="card-body">
        <p className="text-primary">Learn some information about this person</p>
        <ul className="list-group">
            <li className="list-group-item">name: {name.slice(0,6)}</li>
            <li className="list-group-item">age : {age}</li>
        </ul>
        <h3>{legalAge}</h3>

        <ul className="list-group">
            {hobbies}     
        </ul>
        </div>

    </div>

)};