// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
    let pay = 0
    switch (role){
        case 'ceo':
            pay = 2200;
            break;
        case 'manager':
        case 'cto':
            pay = 1800;
            break;
        case 'developer':
            pay = 1500;
            break;
        default:
            pay = 1000;
    }
    return pay + '€';
}


const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);