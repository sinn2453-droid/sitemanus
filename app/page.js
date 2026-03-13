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
provider: "google",
});

};



const logout = async () => {
await supabase.auth.signOut();
};



if (loading) {

return (

<div className="loginScreen">

<div className="glass loginCard">

<p>Завантаження...</p>

</div>

</div>

);

}



if (!user) {

return (

<div className="loginScreen">

<div className="glass loginCard">

<div className="logo">

<span className="material-symbols-rounded logoIcon">
auto_awesome
</span>

<h1 className="logoText">
BUTBIT
</h1>

</div>


<p className="tagline">

BUTBIT — це сучасна соціальна мережа,
де люди діляться моментами життя,
створюють короткі відео, публікують фото
та знаходять однодумців з усього світу.

</p>


<div className="features">

<div className="feature">

<span className="material-symbols-rounded">
videocam
</span>

<span>
Публікуйте короткі відео та фото
</span>

</div>


<div className="feature">

<span className="material-symbols-rounded">
favorite
</span>

<span>
Ставте лайки та підтримуйте авторів
</span>

</div>


<div className="feature">

<span className="material-symbols-rounded">
redeem
</span>

<span>
Даруйте цифрові подарунки
</span>

</div>


<div className="feature">

<span className="material-symbols-rounded">
groups
</span>

<span>
Знаходьте друзів та однодумців
</span>

</div>


<div className="feature">

<span className="material-symbols-rounded">
explore
</span>

<span>
Відкривайте новий цікавий контент
</span>

</div>

</div>


<button
className="googleGlassButton"
onClick={loginWithGoogle}
>

<img
src="https://www.svgrepo.com/show/475656/google-color.svg"
width="22"
/>

Увійти через Google

</button>

</div>

</div>

);

}



return (

<div style={{ paddingBottom:"120px", paddingTop:"40px" }}>


<div className="glass card">

<div style={{ textAlign:"center" }}>

<div className="avatar"></div>

<h2>Мій профіль</h2>

<p>{user.email}</p>

</div>

</div>



<div className="glass card">

<h3>Публікацій ще немає</h3>

<p>

Опублікуйте фото або відео,
щоб поділитися своїми моментами

</p>

</div>



<div style={{ textAlign:"center" }}>

<button className="rainbowButton">

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



<div className="navbar">

<span className="material-symbols-rounded navIcon">
home
</span>

<span className="material-symbols-rounded navIcon">
search
</span>

<div className="addButton">

<span className="material-symbols-rounded">
add
</span>

</div>

<span className="material-symbols-rounded navIcon">
chat
</span>

<span className="material-symbols-rounded navIcon">
person
</span>

</div>

</div>

);

  }
