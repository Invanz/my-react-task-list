export function Header(props){
    const { name } = props;

    return (
    <nav>
        <div className="header">
            <h1>{ name }</h1>
        </div>
    </nav>
    );
};