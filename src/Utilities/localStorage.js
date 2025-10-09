// get data from LS
import { toast } from "react-toastify"

const getId = () => {
    const id = localStorage.getItem('AppId')
    if (!id) {
        toast.error(' No data found in localStorage.')
        return [];
    }
    const parseId = JSON.parse(id)
    return parseId;
};

// set data in LS 

const setId = (id) => {

    const prevIds = getId() || [];

    if (prevIds.includes(id)) {
        return toast.error('You already install this app')
    }

    const allIds = [...prevIds, id];
    const allStringifyIds = JSON.stringify(allIds);

    localStorage.setItem('AppId', allStringifyIds);
    toast.success('App installed successfully!');
}

export { getId, setId }