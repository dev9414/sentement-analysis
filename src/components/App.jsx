import React from 'react';
import Header from './Header';
import Instruction from './Instruction'
import Language from './Language'
import Analyse from './Analyse'
import Emoji from './Emoji'

const t="Try our free demo now by typing a sentence or choose from the options in the drop-down menu";

function App(){
    return <div>
            <Header />
            <Instruction text={t}/>
            <Language />
            <Analyse />
            <Emoji />
           </div>;
}

export default App;