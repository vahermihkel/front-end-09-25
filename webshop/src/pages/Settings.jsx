import { useState } from "react"

function Settings() {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "et");

  function updateLanguage(newLanguage) {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);  //   VÕTI   |    väärtus
  }

  return (
    <div>
      <button onClick={() => updateLanguage("et")}>Eesti</button>
      <button onClick={() => updateLanguage("en")}>English</button>
      <button onClick={() => updateLanguage("es")}>Espanol</button>
      <button onClick={() => updateLanguage("ru")}>Pycckij</button>
      <br /><br />

      {language === "et" && <div>Teavitused on eesti keeles</div>}
      {language === "en" && <div>Notifications are in English</div>}
      {language === "es" && <div>Las notificaciones estan en espanol</div>}
      {language === "ru" && <div>Yведомления на русском языке</div>}
    </div>
  )
}

export default Settings