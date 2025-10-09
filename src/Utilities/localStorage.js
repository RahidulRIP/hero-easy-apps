// get data from LS
import { toast } from "react-toastify"

const getId = () => {
    const id = localStorage.getItem('AppId');
    const parseId = JSON.parse(id)
    return parseId || [];
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

// remove data from LS 

const removeId = (id) => {
    const prevIds = getId() || [];
    const updatedIds = prevIds.filter(data => data !== id);
    localStorage.setItem('AppId', JSON.stringify(updatedIds));
    toast.success('App uninstall successfully!');
}

export { getId, setId, removeId }