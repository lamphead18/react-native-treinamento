import React from "react";
import { Button } from "react-native";

export default () => {

    function execute() {
        console.warn("Exec")
    };

    return (
        <Button title="Execute" onPress={execute}/>
    );
};