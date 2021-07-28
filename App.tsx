import React, {FC} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {Tabs} from "./src/navigation/Tabs";


const App: FC = () => {
    return (
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
    );
};


export default App;