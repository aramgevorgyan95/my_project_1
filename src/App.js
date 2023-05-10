
// Das 2 i hamar

// import logo from './logo.svg';
// import './App.css';
// import MyForm from './components/MyFrom';
// import MyButton from './components/MyButton';
// import Myimg from './components/Myimg';
// import MyTables from './components/MyTables';


//Das3 usteit hooker
// import {useState} from "react";
// import MyCounter from "./components/MyCounter";





//import enelu tesaknery

// import {months} from './test.js'; sovorakan import enq ere months@
// import * as say from './test.js';  // sranov testi mej inch ka inport enq anum
// import {months as arr, testUser as user} from './test.js'; // es dzevn e henc konkret kyndrenq vory
// import months from './test.js'; //sorov menq defolt import kenenq

// console.log(months)



// console.log(arr);
// console.log(user);



// Tnain login registratia

// import MyLogin from "./components/MyLogin";
import MyList from "./components/MyList";



function App() {


  // Das 2 i hamar

  // let con = true // haytararum enq popoxakan vorpezi sranov voroshenq te vory tpvi

  // const arr = ['a', 'b', 'c', 'd', 'e']; //es masivov menqmap funkciayov tpecinq list masivi itemnerov


  //sik MyBotton i hamar e 

  // const onSave = (text) => {
  //   alert(text);
  // }

  // const onClose = (text) => {
  //   alert(text);
  // }

  //  Das 3 i hamar


  //   const [count, setCount] = useState(0);

  //   const plyus = () => {
  //      setCount(count + 1)
  //   }

  //   const minus = () => {
  //     setCount(count - 1)
  //  }


  // const [arr, setArr] = useState([1, 2, 3, 4, 5])

  // const plyus = () => {
  //   setArr([...arr, arr.at(-1) + 1])
  // }

  // Tnain login registratia





  return (
    <>
      <div>
        <p>React JS daser</p>
      </div>


      {/* Das 2 i hamar */}



      {/* nerkevi gracov menq ksenq te vory tpe aysinq ete mer popoxakany tru e ktpe MyForm @  con - y mer popoxakann e*/}
      {/* {con ? <MyForm /> : <MyButton title={'Save'} handleClick={onSave} test={true} />} */}

      {/* ays tarberakov e karox enq voroshel te vory tpvi {con} mer popoxakann e   */}
      {/* {con && <MyForm />} */}


      {/* <MyForm /> */}
      {/* <MyButton title={'Save'} handleClick={onSave} test={true} /> */}
      {/* <MyButton title={'Close'} handleClick={onClose} test={false} /> */}



      {/* erkar dzevy */}
      {/* {
        arr.map((item, index)=>{
          return(
            <div key={index.toString()}>
              <p>{item}</p>
            </div>
          )
        })
      } */}


      {/* nuyni karch dzevy */}
      {/* {
        arr.map((item, index) =><p key={index.toString()}>{item}</p>)
      } */}

      {/* <Myimg /> */}
      {/* <MyTables /> */}




      {/* Das 3 i hamar */}




      {/* <MyCounter count={count} plyus={plyus} minus={minus} /> */}

      {/* <button onClick={plyus}>+</button> */}

      {/* {
          arr.map((item, index) =><p key={index.toString()} style={{color: item % 10 ? 'black' : 'red'}}>{item}</p>)
        } */}




      {/* Tnain login registratia */}


        {/* <MyLogin /> */}
      <MyList />



    </>
  );
};

export default App;
