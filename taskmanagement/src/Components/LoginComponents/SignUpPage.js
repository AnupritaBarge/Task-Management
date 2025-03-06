import { useNavigate } from 'react-router-dom';
import Logo from '../HomePageComponents/TMLogo.png';
import { useState } from 'react';

function SignUpPage() 
{
    const [enteredusername, setusername] = useState('');
    const [enteredpassword, setpassword] = useState('');

    const navigate = useNavigate();

    function returnHomePg()
    {
        navigate('/login');
    }

    const SignUp = async() => {
        console.log(enteredusername);
        console.log(enteredpassword);

        const user = {
            username : enteredusername,
            password : enteredpassword,
        }

        const response = await fetch('http://localhost:4000/users',
            {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            }
        );

        if(response.ok){

            alert('successful');
        }
        else
        {
            alert('Error');
        }
    }

    const handleusername = (event) => {
        setusername(event.target.value);
    }

    const handlepassword = (event) => {
        setpassword(event.target.value);
    }

    return (
        <div class = "flex flex-col w-screen h-screen bg-custom bg-cover bg-center  ">           
            
            <div>
                <img
                    src={Logo}
                    onClick={returnHomePg} 
                    class="w-[90px] h-[70px] mt-2 rounded-lg ml-6"/>                       
            </div>

            <div class = "flex flex-row justify-center">    
                <p class = "flex text-4xl font-bold text-white">
                    Sign up
                </p>
            </div>            

            <div class = "flex flex-col bg-white h-[70%] w-[40%] items-center justify-center ml-[30%] border-solid border-[3px] mt-[4%] rounded-lg">
                <input 
                    value={enteredusername}
                    onChange={handleusername}
                    placeholder='Enter Username' 
                    type='text'
                    class = "w-[350px] h-[50px]  rounded-lg border-solid border-[1px] border-gray-300 pl-5" />

                <input 
                    placeholder='Enter Email' 
                    type='email'
                    class = "w-[350px] h-[50px] mt-7 rounded-lg border-solid border-[1px] border-gray-300 pl-5" />

                <input 
                    value={enteredpassword}
                    onChange={handlepassword}
                    placeholder='Password'
                    type='password'
                    class = "w-[350px] h-[50px] mt-7 rounded-lg border-solid border-[1px] border-gray-300 pl-5" />

                <input 
                    placeholder='Re-enter Password'
                    type='password'
                    class = "w-[350px] h-[50px] mt-7 rounded-lg border-solid border-[1px] border-gray-300 pl-5" />

                <button 
                    onClick={SignUp}
                    class = "w-[175px] h-[50px] mt-10 rounded-lg bg-[#2E6B98] text-[#ffffff]">
                    Sign Up               
                </button>
            </div>
        </div>
        
    );   
}
export default SignUpPage;