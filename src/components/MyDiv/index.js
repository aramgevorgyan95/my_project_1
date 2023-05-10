import "./style.css"

function MyDiv() {

    let mknikiSharj = (event) => {
        {mecdiv.style.left}  event.pageX + 'px';
        {mecdiv.style.top}  event.pageY + 'px';
    }
    
    document.addEventListener('mousemove', mknikiSharj);

    return (
      <div id="mecdiv"></div>
    );
  };
  
  export default MyDiv;