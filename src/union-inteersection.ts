type NoobDeveloper = {
    name: string
}

// type JuniorDeveloper = {
//     name: string;
//     expertise:string;
//     experience:number;
// }

//Intersection
type JuniorDeveloper = NoobDeveloper & {
    expertise: string;
    experience: number;
}

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: 'Rohim Mia',
    expertise: "Javascript",
    experience: 1,
}


