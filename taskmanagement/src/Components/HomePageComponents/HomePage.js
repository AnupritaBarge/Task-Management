import { useNavigate } from 'react-router-dom';
import Tasks from './Tasks';


export default function HomePage() {

    const navigate = useNavigate();

    function returnHP(){

        navigate('/login');
    }
    
    return (
        <div class = "flex h-screen w-full flex-col">
            {/* ............................................Navigation Bar.................................................. */}
            <div class = "flex h-[10%] flex-row  bg-slate-100">
                <button
                    onClick={returnHP}
                    class="w-[175px] h-[50px] mt-4 rounded-lg bg-[#2E6B98] text-white  ml-3">
                    Return to Login
                </button>

            </div>
            <div class = "flex flex-row flex-1 overflow-auto">

            {/* ............................................'Planned' Block.................................................  */}

                <div class = "flex flex-col w-[19%] border-s-black bg-white m-3 flex-grow">
                    <div class = "flex flex-col h-[7%] text-center bg-[#d7e9f5] py-2">
                        <p class = "text-center ">Planned</p>                                                
                    </div>
                    <div class = "flex flex-col flex-1 ">
                        <Tasks/>
                        <Tasks/>                                        
                        <Tasks/>                                        
                        <Tasks/>                                        
                        <Tasks/>
                        <Tasks/>
                        <Tasks/>
                        <Tasks/>
                        <Tasks/>
                    </div>                                                  
                </div> 

                {/* ............................................'Approved' Block................................................. */}

                <div class = "flex flex-col w-[19%] min-h-full bg-white m-3 flex-grow">
                    <div class = "flex flex-col h-[7%] text-center bg-[#d7e9f5] py-2">
                        <p class = "text-center ">Planned</p>                                                
                    </div>
                    <div class = "flex flex-col flex-1 ">
                        <Tasks/>
                        <Tasks/>                                        
                        <Tasks/>                                        
                        <Tasks/>                                        
                        <Tasks/>
                    </div>                                                  
                </div> 

                {/* ............................................'Commited' Block................................................. */}

                <div class = "flex flex-col w-[19%] bg-white m-3 ">
                    <div class = "flex flex-col h-[6%] text-center bg-[#d7e9f5]">
                        <p class = "text-center mt-1.5 mb-1.5">Commited</p>                                                
                    </div>

                   <Tasks/>
                   <Tasks/>                                    
                </div>

                {/* ............................................'Commitec-Developed' Block................................................. */}

                <div class = "flex flex-col w-[19%] bg-white m-3 ">
                    <div class = "flex flex-col h-[6%] text-center bg-[#d7e9f5]">
                        <p class = "text-center mt-1.5 mb-1.5">Commited-Developed</p>                                              
                    </div>

                    <Tasks/>
                    <Tasks/>
                    <Tasks/>
                    <Tasks/>                                        


                </div>

                {/* ............................................'Done' Block................................................. */}

                <div class = "flex flex-col w-[19%] bg-white m-3 ">
                    <div class = "flex flex-col h-[6%] text-center bg-[#d7e9f5]">
                        <p class = "text-center mt-1.5 mb-1.5">Done</p>                                               
                    </div>

                    <Tasks/>
                    <Tasks/>                                     
                </div>

            </div>            
        </div>
       
    );
}
