import React, {useState} from 'react';
import Header from './components/header'
import Main from './components/main';
import Sidebar from "./components/sidebar";

function App() {

    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <div>
            <Sidebar sidebarState={openSidebar} changeSidebarState={setOpenSidebar}/>
            <Header sidebarState={openSidebar} changeSidebarState={setOpenSidebar}/>
            <Main/>
        </div>
    );
}

export default App;
