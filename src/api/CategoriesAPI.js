import axios from 'axios';
import { useEffect, useState } from 'react';

function Categories() {
    const [categories,setCategories]=useState([])
    const [callback,setCallback]=useState(false)

    useEffect(()=>{
        const getCategories= async ()=>{
            const res=await axios.get('http://localhost:5000/api/category')
            setCategories(res.data.categories)
        }
        getCategories()

    },[callback])
    return {
        categories:[categories,setCategories],
        callback:[callback,setCallback]
    };
}

export default Categories;