export function Header() {

    return (
        <>
            <nav>
                <div className="header">
                    <h1>TODO APP</h1>
                </div>
            </nav>
            <div className="newTask">
                <h3>Nueva tarea:</h3>
                <form onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <input placeholder="Título" type="text" onInput={(e) => e.target.value}/>
                    <br />
                    <input placeholder="Descripción" type="text" onInput={(e) => e.target.value} />
                    <button type="submit">➕</button>
                </form>
            </div></>
    );
};