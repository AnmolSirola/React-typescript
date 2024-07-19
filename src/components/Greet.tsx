type GreetProps = {
    name: string;
    messageCount: number;
    isLoggedIn: boolean;
}

export const Greet = (props: GreetProps) => {
    return(
        <div> 
            <h2>
            {props.isLoggedIn 
                ? `Hello ${props.name} You have ${props.messageCount} message from your sidechicks` 
                : "Welcome Guest"}  
            </h2>
        </div>
    )
}    