import React, { useContext } from 'react';
import { GlobalState } from '../../../GlobalState';

function LoadMore() {
    const state=useContext(GlobalState)
    const [page,setPage]=state.productApi.page
    const [result]=state.productApi.result

    return (
        <div className="load-more">
            {
                result<page*9?"":<button onClick={()=>setPage(page+1)}>see more</button>
            }
        </div>
    );
}

export default LoadMore;