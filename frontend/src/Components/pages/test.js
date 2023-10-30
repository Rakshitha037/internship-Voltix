// import { useEffect, useState } from "react"

// export default function Test(){
//     const [authUser,setAuthUser]=useState(null)
//     useEffect(()=>{
//         const token=localStorage.getItem('token')
//         if(token){
//             const aUser=async ()=>{
//                 try{
//                 const response = await fetch('http://localhost:3001/users?token='+token,{
//                     headers:{
//                         'Authorization':`Bearer ${token}`
//                     }
//                 })
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch user data');
//                   }
        
//                   const data = await response.json();
//                   setAuthUser(data);
//                   console.log(data);
//                   const isProper=await authUser?.user?.role
//                   if(isProper==='superadmin'){
//                     alert("ff")
//                   }
//                 }catch (error) {
//                     console.error(error);
//                   }
//             }
//             aUser()
//         }


//         console.log(authUser,'jjjj')
//         if(!authUser){
//             // window.location.href='/'
//         }

//     },[])
//     return(
//         <div>
//             helo
//         </div>
//     )
// }