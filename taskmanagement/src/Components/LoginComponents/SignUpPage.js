import { useNavigate } from 'react-router-dom';
import SignUpBG from './SignupBG.jpg';

function SignUpPage() 
{
    const navigate = useNavigate();

    function returnHomePg()
    {
        navigate('/login');
    }
    return (
        <div class = "flex flex-col w-screen h-screen bg-custom bg-cover bg-center  ">           
            
            <div>
                <button
                    onClick={returnHomePg} 
                    class="w-[175px] h-[50px] mt-4 rounded-lg bg-[#ffffff] text-[#2E6B98] ml-3">
                        Home
                </button>
            </div>

            <div class = "flex flex-row justify-center">    
                <p class = "flex text-4xl font-bold text-white">
                    Sign up
                </p>
            </div>            

            <div class = "flex flex-col bg-white h-[70%] w-[40%] items-center justify-center ml-[30%] border-solid border-[3px] mt-[4%] rounded-lg">
                <input placeholder='Enter Username' 
                type='text'
                class = "w-[350px] h-[50px]  rounded-lg border-solid border-[1px] border-gray-300 pl-5" />

                <input placeholder='Enter Email' 
                type='email'
                class = "w-[350px] h-[50px] mt-7 rounded-lg border-solid border-[1px] border-gray-300 pl-5" />

                <input placeholder='Password'
                type='password'
                class = "w-[350px] h-[50px] mt-7 rounded-lg border-solid border-[1px] border-gray-300 pl-5" />

                <input placeholder='Re-enter Password'
                type='password'
                class = "w-[350px] h-[50px] mt-7 rounded-lg border-solid border-[1px] border-gray-300 pl-5" />

                <button class = "w-[175px] h-[50px] mt-10 rounded-lg bg-[#2E6B98] text-[#ffffff]">
                    Sign Up               
                </button>
            </div>
        </div>
        
    );   
}
export default SignUpPage;