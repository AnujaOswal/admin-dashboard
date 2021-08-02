import React from 'react'
import TabPane from './TabPane'
import NavBar from './NavBar'
import DashBoard from './DashBoard'
import ContentDashBoard from './ContentDashBoard'
import Footer from './Footer'
import Projects from './ContentData/Projects.js'
import { useState } from 'react'

function MainScreen() {
    const [tab, setTab] = useState("");

    return (
        <div className="main">
             {/* left Content Tab */}
            <div className="l-tab"  >        
            <TabPane/>
            </div>
                {/* Right Content Tab */}
                 <div className="r-tab">
                    {/* Navbar on Top */}
                     <NavBar tab={tab} setTab={setTab}/>

                    {/*AFter NavBar Page Header */}
                    <h2 className="DashboardHeader">Dashboard</h2>

                    <DashBoard/>

                    {/* Content component */}
                     <ContentDashBoard />
                   

                    {/* Footer */}
                     <Footer/>
            </div>
            
        </div>
    )
}

export default MainScreen
