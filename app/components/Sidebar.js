"use client";

import { useState } from "react";

export default function Sidebar({ user, logout }) {

const [open,setOpen] = useState(false);

return (

<>

{/* кнопка меню */}

<button
className="menuButton"
onClick={() => setOpen(true)}
>

<span className="material-symbols-rounded">
menu
</span>

</button>


{/* затемнення */}

{open && (
<div
className="overlay"
onClick={() => setOpen(false)}
/>
)}


{/* бокова панель */}

<div className={`sidebar ${open ? "open" : ""}`}>

{/* логотип */}

<div className="sidebarLogo">

<span className="material-symbols-rounded logoIcon">
auto_awesome
</span>

<span className="logoText">
BUTBIT
</span>

</div>


{/* профіль */}

<div className="sidebarProfile">

<div className="sidebarAvatar"></div>

<div className="sidebarUser">

<div className="sidebarName">
{user?.email}
</div>

<div className="sidebarSub">
мій профіль
</div>

</div>

</div>


{/* меню */}

<div className="sidebarMenu">

<div className="sidebarItem">

<span className="material-symbols-rounded">
person
</span>

<span>Профіль</span>

</div>


<div className="sidebarItem">

<span className="material-symbols-rounded">
videocam
</span>

<span>Мої відео</span>

</div>


<div className="sidebarItem">

<span className="material-symbols-rounded">
photo
</span>

<span>Фото</span>

</div>


<div className="sidebarItem">

<span className="material-symbols-rounded">
redeem
</span>

<span>Подарунки</span>

</div>


<div className="sidebarItem">

<span className="material-symbols-rounded">
groups
</span>

<span>Канали</span>

</div>


<div className="sidebarItem">

<span className="material-symbols-rounded">
chat
</span>

<span>Повідомлення</span>

</div>


<div className="sidebarItem">

<span className="material-symbols-rounded">
settings
</span>

<span>Налаштування</span>

</div>


<div
className="sidebarItem logout"
onClick={logout}
>

<span className="material-symbols-rounded">
logout
</span>

<span>Вийти</span>

</div>

</div>

</div>

</>

);

  }
