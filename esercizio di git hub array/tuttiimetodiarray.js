const studenti = [
    { nome: "Alice", voto: 95},
    { nome: "Bob", voto: 88 },
    { nome: "Carol", voto: 76 },
    { nome: "David", voto: 92 },
    { nome: "Eve", voto: 84 },
  ];

  //Utilizza forEach per stampare i nomi degli studenti.

  studenti.forEach(studente =>{
    console.log(studente.nome)});

  //Utilizza find per trovare uno studente con un voto superiore a 90.

  const votoalto=studenti.find(studente => studente.voto > 90);
  console.log("studenti con un voto superiore a 90:");
  console.log(votoalto);

//Utilizza reduce per calcolare la media dei voti degli studenti.

const sommaVoti=studenti.reduce((voti,studente) => voti+studente.voto,0)
const votimedi=sommaVoti/studenti.length;
console.log ("i voti medi degli studenti sono:",votimedi)

//Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.

const maiuscolo= studenti.map(studente => studente.nome.toUpperCase());
console.log("i nomi in maiuscolo degli studenti:");
console.log(maiuscolo)

//Utilizza filter per trovare gli studenti con voti superiori a 85.

const votisuperiori=studenti.filter(studente=>studente.voto>85);
console.log ("i studenti con voto superiore a 85:")
console.log (votisuperiori)


