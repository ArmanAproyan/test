import { useEffect } from "react"
const Lesson = () => {

  useEffect(() => {
    console.log('rerender')
  },[]);
  


  return (
    <div>
   </div>
  )
}

export default Lesson
