// # GESTIONE ESERCIZI

let sceltaTutor = 0;

for (; sceltaTutor !== 4; ) {
  //il tutor sceglie l'eserizio da vedere
  sceltaTutor = parseInt(
    prompt(`Ciao Tutor! quale esercizio vuoi vedere:
    
    1) Mail
    2) Dadi
    3) Dadi Bonus

    4) Esci
    
    Inserisci il numero corrispondente alla scelta.`)
  );
  console.log(`sceltaTutor: ${sceltaTutor}`);

  //validazione input del tutor
  if (!sceltaTutor || sceltaTutor < 1 || sceltaTutor > 4) {
    const errMsg = `La scelta: "${sceltaTutor}" non è valida!\n\nRitenta. Grazie`;
    //istruzioni al tutor per ripetere scelta non andata a buon fine
    alert(errMsg);
  } else {
    let selExMsg = `Esercizio selezionato: 1) Mail`;
    if (sceltaTutor === 3) {
      selExMsg = selExMsg.replace(`1) Mail`, `3) Dadi Bonus`);
    }
    if (sceltaTutor === 2) {
      selExMsg = selExMsg.replace(`1) Mail`, `2) Dadi`);
    }
    if (sceltaTutor === 4) {
      alert("CIAO! ci vediamo👋");
      throw new Error("Richiesta interruzione programma");
    }
    //informazione al tutor sull'esercizio che ha scelto di vedere
    alert(selExMsg);
  }

  //qui sceltaTutor può solo avere i valori: 1,2,3
  if (sceltaTutor === 1) {
    // # MAIL
    console.log(`%cESERCIZIO MAIL`, "color: yellow");
  }
  if (sceltaTutor === 2) {
    // # DADI
    console.log(`%cESERCIZIO DADI`, "color: yellowgreen");
  }
  if (sceltaTutor === 3) {
    // # DADI BONUS
  }
}
