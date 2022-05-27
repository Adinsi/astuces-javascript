const utilisateur = {
    nom: "Tom ",
    age: 45,
    taille : 185
}

const utilisateur2 = {
    ...utilisateur, poids: 85 
}
const fruit = {
    nom: "mangue",
    couleur : "verte"
}

const prepa = {
    indice: " voir cours",
    astuces : " voir cours deux"
}

const ensemble = {
    ...fruit,...prepa
}

for (let i in ensemble) {
    console.log(i + " : " + ensemble[i]  )
}
console.log(ensemble)

// enlever une propriet&//
const voiture = {
    marque: 'Toyota',
    modele: "enzo",
    couleur : "rouge"

}
const sansmarque = ({
    marque,modele,...lereste
}) => {
    console.log(marque)
    return lereste
}

console.log(sansmarque(voiture));

const pays = {
    nom: 'Bénin',
    population: 10000000,
    capital : 'cotonou'
}

const {population :nondes  } = pays;
console.log(nondes);

const depense = {
    chauffage: 100,
    gaz: 200,
    chauffag: 100,
    ga: 200,
    chauffa: 100,
    g : 200 
}

const somme = [20, 10, 45];
const sommes =somme.reduce((acc, x) => {
    return acc + x 
})

console.log(sommes)


const total = Object.values(depense).reduce((acc, x) => {
   return (acc + x)
},100
)
console.log(total)

// destruer enchangeant le nom/

