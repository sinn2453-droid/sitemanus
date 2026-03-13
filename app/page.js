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
