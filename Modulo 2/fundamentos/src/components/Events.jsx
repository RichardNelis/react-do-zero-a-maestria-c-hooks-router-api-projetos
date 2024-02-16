const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Botão clicado");
    };

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        }
        else {
            return <h1>Também posso renderizar isso!</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>Botão função inline</button>
            </div>
            <div>
                <button onClick={() => {
                    if (true) {
                        console.log("Isso não devereia existir")
                    }
                }}>Botão função inline</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};


export default Events;
