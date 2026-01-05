const marvel_heroes=["captain", "thor", "hulk"]
const dc_heroes=["superman", "flash", "batman"]

//marvel_heroes.push(dc_heroes)  => can't combine both
//console.log(marvel_heroes);

//const all_herous =  marvel_heroes.concat(dc_heroes)    => use to merged
//console.log(all_herous)

const all_new_heroes = [...marvel_heroes, ...dc_heroes]  //=> most prefrabale to merge
//console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_array = another_array.flat(Infinity)        // deafth 1/2/3...infinity
console.log(real_array)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"}))   // intresting case / must run 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));




