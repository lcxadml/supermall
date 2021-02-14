import axios from "axios"
export function request(config){
  
 
      const instant1 = axios.create({
            baseURL:"http://152.136.185.210:7878/api/m5",
            timeout:5000
        })
    
        instant1.interceptors.response.use(res=>{
          return res.data
        },err=>{
          console.log(err);
        });
      return  instant1(config)
   
}