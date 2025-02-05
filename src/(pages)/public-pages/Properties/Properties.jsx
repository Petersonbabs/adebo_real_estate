import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"

const Properties = () => {
  const [searchParams] = useSearchParams()
  const searchTerm = searchParams.get("search")
  console.log(searchTerm);

  useEffect(()=>{
    if(searchTerm){
      serachProperties()
    }
  },[])

  const serachProperties = ()=>{
    try {
      
      // api/v1/properties?search=${searchTerm}
    } catch (error) {
      
    }
  }
 
  return (
    <div  style={{
      paddingTop: "4rem"}}>
        propery=ties
      </div>
  )
}

export default Properties