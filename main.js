// # GESTIONE ESERCIZI

let sceltaTutor = 0;

for (; sceltaTutor !== 3; ) {
  //il tutor sceglie l'eserizio da vedere
  sceltaTutor = parseInt(
    prompt(`Ciao Tutor! quale esercizio vuoi vedere:
    
    1) Base (pesiBase = [2, 5, 1, 1, 7, 3, 12, 6, 9, 3])
    2) Bonus(pesiBonus = [2, "5", 1, 1, "7", null, 12, 6, 9, 3])

    3) Esci
    
    Inserisci il numero corrispondente alla scelta.`)
  );
  console.log(`sceltaTutor: ${sceltaTutor}`);

  //validazione input del tutor
  if (!sceltaTutor || sceltaTutor < 1 || sceltaTutor > 3) {
    const errMsg = `La scelta: "${sceltaTutor}" non è valida!\n\nRitenta. Grazie`;
    //istruzioni al tutor per ripetere scelta non andata a buon fine
    alert(errMsg);
  } else {
    let selExMsg = `Esercizio selezionato: 1) Base`;
    if (sceltaTutor === 2) {
      selExMsg = selExMsg.replace(`1) Base`, `2) Bonus`);
    }
    if (sceltaTutor === 3) {
      alert("CIAO! ci vediamo👋");
      throw new Error("Richiesta interruzione programma");
    }
    //informazione al tutor sull'esercizio che ha scelto di vedere
    alert(selExMsg);
  }

  let pesi = [];
  let output = "";

  //qui sceltaTutor può solo avere i valori: 1,2
  if (sceltaTutor === 1) {
    // # BASE
    console.log(`%cESERCIZIO BASE`, "color: yellow");
    let pesiBase = [2, 5, 1, 1, 7, 3, 12, 6, 9, 3];
    pesi = pesiBase;
    output += `ESERCIZIO BASE: \n\n`;
  }
  if (sceltaTutor === 2) {
    // # BONUS
    console.log(`%cESERCIZIO BONUS`, "color: yellowgreen");
    let pesiBonus = [2, "5", 1, 1, "7", null, 12, 6, 9, 3];
    pesi = pesiBonus;
    output += `ESERCIZIO BONUS: \n\n`;
  }

  console.log(`Pesi: ${pesi}`);
  output += `Pesi : ${pesi}`;

  // # GESTIONE RICHIESTE

  let richiesta = 0;

  richiesta = parseInt(
    prompt(`Operazione da svolgere:
    
    1) Peso Medio
    2) Peso Massimo
    3) Peso Minimo
    4) Numero di giocattoli
    
    Inserisci il numero corrispondente alla scelta.`)
  );
  console.log(`richiesta: ${richiesta}`);

  //validazione input
  if (!richiesta || richiesta < 1 || richiesta > 4) {
    const errMsg = `La scelta: "${richiesta}" non è valida!`;
    console.log(errMsg);
    alert(errMsg);
  } else {
    let selExMsg = `richiesta: 1) Peso Medio`;
    if (richiesta === 4) {
      selExMsg = selExMsg.replace(`1) Peso Medio`, `4) Numero di giocattoli`);
    }
    if (richiesta === 3) {
      selExMsg = selExMsg.replace(`1) Peso Medio`, `3) Peso Minimo`);
    }
    if (richiesta === 2) {
      selExMsg = selExMsg.replace(`1) Peso Medio`, `2) Peso Massimo`);
    }
    //informazione sulla richiesta effettuata
    alert(selExMsg);
    output += "\n\n" + selExMsg + "\n\n";
  }

  //includo nei conteggi solamente i valori validi
  let pesiValidi = [];
  for (let i = 0; i < pesi.length; i++) {
    const raw = pesi[i];
    if (raw !== null) {
      const num = Number(raw);
      if (Number.isFinite(num) && num >= 0) {
        pesiValidi.push(num);
      }
    }
  }

  let pesoMedio = 0;
  let pesoMax = 0;
  let pesoMin = pesiValidi[0];
  const numeroGiochi = pesiValidi.length;

  for (let i = 0; i < numeroGiochi; i++) {
    pesoMedio += pesiValidi[i];
    if (pesiValidi[i] > pesoMax) {
      pesoMax = pesiValidi[i];
    }
    if (pesiValidi[i] < pesoMin) {
      pesoMin = pesiValidi[i];
    }
  }
  pesoMedio = pesoMedio / numeroGiochi;

  //qui richiesta può solo avere i valori: 1,2,3,4
  if (richiesta === 1) {
    // # PESO MEDIO
    console.log(`%cPeso Medio`, "color: #DA582E");
    console.log(`Peso Medio: ${pesoMedio.toFixed(2)}`);
    output += `Peso Medio: ${pesoMedio.toFixed(2)}`;
  }
  if (richiesta === 2) {
    // # PESO MASSIMO
    console.log(`%cPeso Massimo`, "color: orange");
    console.log(`Peso Massimo: ${pesoMax}`);
    output += `Peso Massimo: ${pesoMax}`;
  }
  if (richiesta === 3) {
    // # PESO MINIMO
    console.log(`%cPeso Minimo`, "color: darkorange");
    console.log(`Peso Minimo: ${pesoMin}`);
    output += `Peso Minimo: ${pesoMin}`;
  }
  if (richiesta === 4) {
    // # NUMERO GIOCATTOLI
    console.log(`%cNumero Giocattoli`, "color: orangered");
    console.log(`Numero Giocattoli: ${numeroGiochi}`);
    output += `Numero Giocattoli: ${numeroGiochi}`;
  }

  //messaggio in uscita
  alert(output);
}
