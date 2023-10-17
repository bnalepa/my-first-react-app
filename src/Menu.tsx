import React from 'react';
import Album from "./pages/Album"

function Menu()
{
    return(
        <div>
        <b>Menu:</b><br/>
        <a href = "/">Index</a><br/>
        <a href = "/pages/Album">Album</a><br/>
        <a href = "Contact">Kontakt</a><br/>
        </div>
        
    );

}

export default Menu;