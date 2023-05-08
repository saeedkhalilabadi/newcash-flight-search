import React from "react";
import './index.css'

export default function Menu({ data = [],visible=false, onSelect = () => { } }) {

    return (<div className={`backMenu ${visible?'visible':null}`}>
        {data?.length === 0 ?
            <div >No cities found</div>
            : data?.map(item => <div key={item.id} className="menu-item" onClick={()=>onSelect(item)}>
                {item.name}
            </div>)}
    </div>)

}