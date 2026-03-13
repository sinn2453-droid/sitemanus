"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Home() {

const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {

supabase.auth.getUser().then(({ data }) => {
setUser(data.user);
setLoading(false);
});

const { data: listener } = supabase.auth.onAuthStateChange(
(event, session) => {
setUser(session?.user ?? null);
}
);

return () => {
listener.subscription.unsubscribe();
};

}, []);


const loginWithGoogle = async () => {

await supabase.auth.signInWithOAuth({
provider: "google"
});

};


const logout = async () => {

await supabase.auth.signOut();

};


if (loading) {

return (

<div className="center">

<div className="glass card">

<h2>SiteManus</h2>
<p>Завантаження...</p>

</div>

</div>

);

}


if (!user) {

return (

<div className="center">

<div className="glass card">

<h1>SiteManus</h1>

<p>
Платформа для публікації фото,
відео та пошуку цікавого контенту.
</p>

<p>
Діліться своїми моментами,
досліджуйте нові ідеї
та знаходьте натхнення.
</p>

<button className="googleButton" onClick={loginWithGoogle}>

<img
src="https://www.svgrepo.com/show/475656/google-color.svg"
width="20"
/>

Увійти через Google

</button>

</div>

</div>

);

}


return (

<div style={{ paddingBottom:"120px" }}>


<div className="header">

{user.user_metadata?.avatar_url ? (

<img
src={user.user_metadata.avatar_url}
className="avatar"
/>

) : (

<div className="avatar"></div>

)}

<h2>Мій профіль</h2>

<p>{user.email}</p>

</div>


<div className="card">

<h3>Публікацій ще немає</h3>

<p>
Опублікуйте фото або відео,
щоб поділитися своїми моментами
</p>

</div>


<div style={{ textAlign:"center" }}>

<button className="button">

<span className="material-symbols-rounded">
add
</span>

Додати публікацію

</button>

</div>


<div style={{ textAlign:"center", marginTop:"20px" }}>

<button onClick={logout}>
Вийти
</button>

</div>


<nav className="navbar glass">

<span className="material-symbols-rounded">
home
</span>

<span className="material-symbols-rounded">
search
</span>

<span className="material-symbols-rounded">
add
</span>

<span className="material-symbols-rounded">
chat
</span>

<span className="material-symbols-rounded">
person
</span>

</nav>


</div>

);

  }
