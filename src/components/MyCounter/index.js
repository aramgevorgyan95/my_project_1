function MyCounter({count, plyus, minus}) {
    return (
        <div >
           <div>{count}</div>
           <button onClick={plyus}>+ Plyus</button>
           <button onClick={minus}>Minus -</button>
        </div>
    );
};

export default MyCounter;