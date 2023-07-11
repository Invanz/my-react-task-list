export function Task (props){
    const { currentTask, currentDescription } = props;

    return (
    <div className="task">
        <div>
            <input type="radio" />
            <label htmlFor="">{ currentTask } </label>
            <button>✏️</button>
            <button>🗑️</button>
        </div>
        <p>{ currentDescription }</p>
    </div>
    );
};