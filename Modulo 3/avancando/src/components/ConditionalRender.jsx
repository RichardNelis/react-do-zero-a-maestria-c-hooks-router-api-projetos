import React, { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(false);

    const [name, setName] = useState("Richard")

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora x é false</p>}
            <h1>If ternário</h1>
            {name === "Richard" ? (
                <div>
                    <p>O nome é Richard</p>
                </div>
            ) : (
                <div>
                    <p>O nome não é Richard</p>
                </div>
            )}
            <button onClick={() => setName("Bia")}>Qual é o nome?</button>
        </div>
    )
}

export default ConditionalRender
