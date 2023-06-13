import React,{Component} from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DynamicTable from "./DynamicTable";


class App extends Component{
  render(){ 
  return (
    <DynamicTable />
  );
  }
}
export default App;