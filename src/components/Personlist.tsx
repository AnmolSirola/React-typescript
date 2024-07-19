type PersonlistProps = {
    names: {
        first: string;
        last: string;
    }[]
}


export const Personlist = (props:PersonlistProps) => {
    return(
        <div>
            {/* <h2> Bruce Wayne </h2>
            <h2> Clark Kent </h2>
            <h2> Diana W</h2> */}
            {props.names.map(name => {
                return(
                     <h2>{name.first} 
                     {name.last}
                     </h2>
                )     
            })}
        </div>
    )
}