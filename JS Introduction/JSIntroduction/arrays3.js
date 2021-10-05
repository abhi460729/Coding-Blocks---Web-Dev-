let notes =['do','re','mi','fa','so','la','ti','do']
console.log(notes.slice(4,6))

// slice - it is non destructive in nature
// notes.slice(4,6)
// console.log(notes)

// splice
//let omit=notes.splice(4)
//console.log(omit)
//console.log(notes)

// splice - part 2
//notes.splice(0,3,'sa','re','ga')
//console.log(notes)

//concat - it is also non destructive in nature
//console.log(notes.concat('sa'))
console.log(notes.concat(['sa','re','ga']))
console.log(notes)