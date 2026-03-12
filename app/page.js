export default function Home() {
  return (
    <div>

      <div className="header">
        <div className="avatar"></div>
        <h2>Мій профіль</h2>
      </div>

      <div className="card">
        <h3>Публікацій ще немає</h3>
        <p>Опублікуйте фото або відео</p>
      </div>

      <div style={{textAlign:"center"}}>
        <button className="button">Додати публікацію</button>
      </div>

      <div className="navbar">
        <div>Чати</div>
        <div>Контакти</div>
        <div>Налаштування</div>
        <div>Профіль</div>
      </div>

    </div>
  );
}
