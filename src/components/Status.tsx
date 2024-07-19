type StatusProps = {
    status: string
}

export const Status = (props: StatusProps) =>{

    let message
    if (props.status == "loading"){
        message = "Loading..."
    }else if (props.status == "Success"){
        message = "Data Fetched"
    }



    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
}