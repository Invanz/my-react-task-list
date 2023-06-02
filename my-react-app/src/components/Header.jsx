export default function Header(props){
    const { name } = props;

    return (
    <nav>
        <div>
            <h1>{ name }</h1>
        </div>
    </nav>
    );
};