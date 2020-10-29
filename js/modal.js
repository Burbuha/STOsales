function openModalView() {
  Swal.fire({
    title: "РћСЃС‚Р°РІСЊС‚Рµ РѕС‚Р·С‹РІ",
    html:
      '<div > <input type="text" id="username" class="swal2-input" placeholder="Р’РІРµРґРёС‚Рµ РёРјСЏ"></input>' +
      '<input  class="swal2-input" placeholder="Р’РІРµРґРёС‚Рµ СЃРѕРѕР±С‰РµРЅРёРµ"></input> <p>Р’С‹Р±РµСЂРёС‚Рµ С„РѕС‚Рѕ</p> <input type="file" ></input></div>',
    confirmButtonText: "РћС‚РїСЂР°РІРёС‚СЊ РѕС‚Р·С‹РІ",
  }).then(() => {
    Swal.fire(
      "РЎРїР°СЃРёР±Рѕ!",
      "Р’Р°С€ РѕС‚Р·С‹РІ Р±С‹Р» РѕС‚РїСЂР°РІР»РµРЅ.",
      "success"
    );
  });
}
