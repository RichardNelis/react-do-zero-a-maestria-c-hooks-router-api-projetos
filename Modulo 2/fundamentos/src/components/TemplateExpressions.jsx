import MyComponent from "./MyComponent";

const TemplateExpression = () => {

    const name = "Richard";
    const data = {
        age: 27,
        job: "Programador"
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{4 + 4}</p>
            <p>{console.log("JSX React")}</p>
            <MyComponent />
        </div>
    );
};

export default TemplateExpression;
