import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {v1 as uuid} from "uuid";


function useFlip(initialFlipState = true) {
    const [isFlipped, setFlipped] = useState(initialFlipState);

    const flip = () => {
        setFlipped(isUp => !isUp);
    };

    return [isFlipped, flip];
}

const useAxios = (url) => {
    const [data, setData] = useState([]);

    const addData = async () => {
        const response = await axios.get(url);
        setData(data => [...data, { ...response.data, id: uuid() }]);
    };

    return [data, addData]
};

export { useAxios, useFlip };