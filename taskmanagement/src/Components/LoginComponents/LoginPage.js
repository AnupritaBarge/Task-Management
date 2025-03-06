import { useNavigate } from 'react-router-dom';
import LoginImage from './LoginImage.png';
import { useEffect, useState } from 'react';

export default function LoginPage() {
    
    const [enteredusername, setusername] = useState('');
    const [enteredpassword, setpassword] = useState('');
    const [APIusers, setusers] = useState([]);         //stores user data from API

    // username = 'abc';
    // setusername('abc');

    const navigate = useNavigate();

    // function handleButtonClick = () =>{
    //     navigate('/home');
    // };

    useEffect(() => {
        const fetchUsers = async() => {

            const response = await fetch('http://localhost:4000/users');        //fetches data from API
            const data = await response.json();             //converts the received data into JSON
            console.log(data);
            setusers(data);         //populated the data in users
        }
        fetchUsers();        
    },[]);

    //console.log(users);

    function Login() {    
        console.log(enteredusername);
        console.log(enteredpassword);
        console.log(APIusers);

        const userexists = APIusers.find(APIuser => APIuser.username === enteredusername);
        console.log(userexists);
        if(enteredusername === userexists.username && enteredpassword === userexists.password)
        {
            navigate('/home');
        // alert("Login Successful");
        }
        else
        {
            alert("Invalid username or password");
        }
    }

    const handleUnameChange = (event) => {
        setusername(event.target.value);
        console.log(enteredusername);
    };

    const handlePassChange = (event) => {
        setpassword(event.target.value);
        console.log(enteredpassword);
    }
    return(
        <div class="flex h-screen w-screen flex-col">
            <div class="flex text-[40px] h-[15%] w-screen items-center justify-center">
                <h1 class="m-3 font-semibold text-[#2E6B98]">Task Management System</h1>
            </div>
            
            <div class="flex h-[85%] w-screen">

                <div class="w-[50%]">
                    <img class="h-[673px] w-[573px] object-contain ml-28" src={LoginImage}/>           
                </div>

                {/*.....................................................Login...................................................... */}
                <div class=" flex flex-col w-[30%] h-[90%] bg-white mt-10 items-center pt-16 ml-20 border-solid  border-[3px]">
                    <h1 class=" text-[30px] font-semibold text-[#2E6B98]">Login</h1>

                    <input 
                        value={enteredusername}
                        onChange={handleUnameChange}
                        class="w-[350px] h-[50px] mt-14 rounded-lg border-solid border-[1px] border-gray-400 pl-5" placeholder='Username'/>

                    <input 
                        value={enteredpassword}
                        onChange={handlePassChange}
                        type='password'
                        class="w-[350px] h-[50px] mt-10 rounded-lg border-solid border-[1px] border-gray-400 pl-5" placeholder='Password'/>

                    <button 
                        onClick={Login}
                        class="w-[175px] h-[50px] mt-10 rounded-lg bg-[#2E6B98] text-white">
                        Login
                    </button>  

                    <span class="flex mt-5 font-semibold">
                        <p>New User?</p> <a href = "/signup" class="text-[#2E6B98] hover:underline ml-2">Request Access</a>
                    </span>         
                    <button class="w-[350px] h-[50px] mt-5 rounded-lg bg-[#E6E3E3] text-[#2E6B98] font-semibold">Login as Administrator</button>

                </div>
            </div>
        </div>
    );        
}