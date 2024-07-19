type NameProps ={
    name: {
        first: string;
        last: string;
    }
}

export const Person = (props: NameProps) => {
    return (
        <div>
            {props.name.first} {props.name.last}
        </div>
    )
} 