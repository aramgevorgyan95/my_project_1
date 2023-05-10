function MyButton({ title, handleClick, test }) {
    return (
        <div >
            <button onClick={() => {
                if (test) {
                    handleClick(title)
                }
            }}>{title}</button>
        </div>
    );
};

export default MyButton;