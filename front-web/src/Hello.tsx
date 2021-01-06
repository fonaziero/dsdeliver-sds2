import { useEffect } from "react";

type Props = {
    mensage: string;
}

function Hello({ mensage }: Props) {

    useEffect(() => {
        console.log("Iniciou !");
        
    }, []);

    return (
        <h1> Componente { mensage }</h1>
    )
}

export default Hello;