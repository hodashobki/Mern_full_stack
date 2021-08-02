const { id } = props;
const [person, setPerson] = useState();
const [loaded, setLoaded] = useState(false);
useEffect(() => {
    axios.get('http://localhost:8000/api/person/' + id)
        .then(res => {
            setPerson(res.data);
            setLoaded(true);
        })
}, [])
const updatePerson = person => {
    axios.put('http://localhost:8000/api/person/' + id, person)
        .then(res => console.log(res));
}

//In our return
{loaded && (
    <PersonForm
        onSubmitProp={updatePerson}
        initialFirstName={person.firstName}
        initialLastName={person.lastName}
    />
)}