export default function Card(props){
    return(
        <>
        <div>
            <h1>Nombre: {props.name}</h1>
            <img src={props.imagen} alt="no se pudo descargar imagen"></img>
        </div>
        </>
    )
}