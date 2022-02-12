import React, { useContext } from 'react';
import { GlobalState } from '../../../GlobalState';

function Filter() {
    const state=useContext(GlobalState)
    const [categories]=state.categoriesAPI.categories
    const [category,setCategory]=state.productApi.category
    const [sort,setSort]=state.productApi.sort
    const [search,setSearch]=state.productApi.search

    const toCapitalize=(string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const handleCategory=e=>{
        setCategory(e.target.value)
    }

    return (
        <div className="filter_menu">
            <div className="filter-select">
                <span>Category: </span>
                <select name="category" value={category} onChange={handleCategory} >
                    <option value="">All</option>
                    {
                        categories.map(category=>(
                            <option value={"category="+category._id} 
                            key={category._id}>{toCapitalize(category.name)}</option>
                        ))
                    }
                </select>
            </div>
            
            <div className="input-field-search">
                <input type="text" value={search} placeholder=" " 
                onChange={e=>setSearch(e.target.value)} />
                <label className="lable-input-search" htmlFor="email">Find foods</label>
            </div>

            <div className="filter-select">
                <span>Sorted by: </span>
                <select name="sort" value={sort} onChange={e=>setSort(e.target.value)} >
                    <option value="sort=-createdAt">New</option>
                    <option value="sort=createdAt">Old</option>
                    <option value="sort=-sold">Selling</option>
                    <option value="sort=-price">Price: High-Low</option>
                    <option value="sort=price">Price: low-High</option>
                </select>
            </div>
        </div>
    );
}

export default Filter;