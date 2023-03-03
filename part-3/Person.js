const Person = ({ name , age , ... props }) => {
    let legalAge = age > 18 ? 'please go vote' : "you must be 18";
    let hobbies = props.hobbies.map(hobby => <li class="list-group-item">{hobby}</li>);

    return(
    <div class="card">
        <div class="card-body">
        <p class="text-primary">Learn some information about this person</p>
        <ul class="list-group">
            <li class="list-group-item">name: {name.slice(0,6)}</li>
            <li class="list-group-item">age : {age}</li>
        </ul>
        <h3>{legalAge}</h3>

        <ul class="list-group">
            {hobbies}     
        </ul>
        </div>

    </div>

)};