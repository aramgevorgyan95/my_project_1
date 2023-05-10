import'./style.css';

function MyForm () {
    return (
        <div className='forma'>
            <h1 className='reg'>Registration</h1>
            <label   htmlFor='login'>Login:</label><br></br>
            <input  type="login" id='login'/><br></br>
              

            <label  htmlFor='password'>Password:</label><br></br>
            <input  type="password" id='password'/><br></br><br></br>

            <label   htmlFor='checkbox'>Remember:</label>
            <input type="checkbox" id='checkbox'/><br></br><br></br>

            <button className='knopka'>Login</button>
        </div>
      
      
    );
  };

  export default MyForm;