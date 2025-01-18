import AllRoutes from "./config/AllRoutes"
import { StarknetProvider } from './constants/starknet-provider'


function App() {
  

  return (
   
      <div>
        <StarknetProvider>
       <AllRoutes/>
       </StarknetProvider>
  
      </div>
  )
}

export default App
