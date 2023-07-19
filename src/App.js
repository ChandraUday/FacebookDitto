import Feed from "./Feed";
import Header from "./Header";
import Rightsidebar from "./Rightsidebar";
import Sidebar from "./Sidebar";
import "./index.css";
import Login from "./Login";
import { useStateValue } from "./StateProvider";


function App() {

  const [{user},dispatch]=useStateValue();
  
 
  return (
    <>
     {
    !user? (<Login/>) : (
      <div className="App">
           <Header/>
           <div className="app_body">
             <Sidebar/>
              <Feed/>
              <Rightsidebar/>
           </div>
       </div>

    )
  }
       
    </>
  );
  
}

export default App;
