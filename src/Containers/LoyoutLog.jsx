import  SectionLog from "../Components/SectionLog"
import Navbar from "../Components/Navbar";


function LoyoutLog({children}){

  return(
    <>
      <Navbar></Navbar>
        {children}
      <SectionLog></SectionLog>
    </>
  )
}

export default LoyoutLog;