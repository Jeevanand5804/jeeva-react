import React from 'react'

export function ScientistName() {
    const person = {
        name: "Hedy Lamarr's Todos",
        theme: {
            color: 'blue',
            fontStyle: 'italic'
        }
    };
    return <h2 style={person.theme } >{person.name}</h2>;
}

function ScientisImg(){
    const avatar = "https://i.imgur.com/yXOvdOSs.jpg";
    const description = "Hedy Lamarr's Todos";
    return <img className='avatar' src={avatar} alt={description} />
}
function Inventions() {
    return(
    <>
          <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
        </>
    )
}

function Item({ name, isPacked }) {

    return <li className="item">{isPacked ? name + "✔" : name + "❌"}</li>;
}

export function getImageUrl(person, size = "s") {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

function PackingList({ person, size }) {
  const pname = person.name;
  return (
    <section>
      <h1 style={{color:'black' ,fontStyle:'oblique'}}>Aklilu Lemma</h1>
      <img
        src={getImageUrl(person)}
        alt={pname}
        width={size}
        height={size}
      />
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

function Project(){
    return (
        
        <div className='p-2' style={{color:'blueviolet'}}>
            <ScientisImg />
            <h4>Inventions:</h4>
            <Inventions />
            <hr />
            <PackingList size={100} person={{ name: 'Aklilu Lemma', imageId: 'OKS67lh' }} />
           
        </div>
    )
}

export default Project