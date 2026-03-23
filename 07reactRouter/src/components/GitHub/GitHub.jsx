import { useEffect, useState } from "react"

function GitHub() {
    const [data , setData] = useState(0)
    useEffect(()=>{
        fetch("https://api.github.com/users/hiteshchoudhary")
        .then(res=> res.json())
        .then((data)=>{
            setData(data)
        })
    },[])
  return (
    <>
    <div className="bg-gray-600 text-3xl p-4" >
        GitHub followers : {data.followers}
    </div>
    </>
  )
}
export default GitHub