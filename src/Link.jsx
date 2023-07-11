import Person from "./Person";

const Link = ({people}) => {
    return (
        <div>
             {people.map((person) => {
                // return <Person key = {person.id} {...person} />
                return (
                    <article className="person">
                     <img src= {person.image} alt= {person.name} className="img" />
                     <div>
                         <h4>{person.name}</h4>
                         <p>{person.age} years old</p>
                     </div>
                    </article>
                 )
       })}
        </div>
    )
}


export default Link;