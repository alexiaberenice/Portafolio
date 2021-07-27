import React from 'react';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from "../components/Info";
import AcercaDe from "../components/AcercaDe";
import Education from '../components/Education';
import Projects from '../components/Projects';
import Certificate from '../components/Certificate';
import Skills from '../components/Skills';

const App = () => {
    return (
        <Main>
            <Sidebar>
                <AcercaDe/>
            </Sidebar>
            <Info>
                <Education />
                <Projects />
                <Certificate />
                <Skills/>
            </Info>
        </Main>
    );
}
    
export default App;