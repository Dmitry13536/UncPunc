import { createContext, useState } from "react";

const MonsterContext = createContext();

const GlobalList={
    1:['']
}

export const MonsterProvider = ({children}) => {
    const [current, setCurrent] = useState(null);
    const [level, setLevel] = useState(1);
    const [HP, setHP] = useState(10);

    const nextMonster = () => {
        
    }
}