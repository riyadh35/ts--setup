//  const newData = {...myInfo ,crush} 

type mandatoryType = { name: string, age: number, salary: number }

interface mandatoryInterface { name: string, age: number, salary: number }

const addMeInCrushMInd = <T extends mandatoryInterface>(myInfo: T) => {
    const crush = 'Kate Winslet';
    const newData = { ...myInfo, crush }
    return newData;

}

type MyInfoType = {
    name: string;
    age: number;
    salary: number;
    other1: boolean;
    other2: null;
}

const myInfo: MyInfoType = {
    name: "Persian",
    age: 200,
    salary: 100000,
    other1: true,
    other2: null,
}

const result5 = addMeInCrushMInd(myInfo)
// result5. 