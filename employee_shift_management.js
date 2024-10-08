//Initialize employees with shift schedules
const employees = [
    
    { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    
    { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    
    { name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
    
    { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }
    
];

//Create displayEmployeeShifts function
console.log(`Employee Schedule:`)
    function displayEmployeeShifts(employees) {
employees.forEach(employee => {console.log(`Employee: ${employee.name}`);
employee.shifts.forEach(shift => {console.log(`Day: ${shift.day}, Hours: ${shift.hours}`); })
})
};
let employeeSchedule = displayEmployeeShifts(employees)

displayEmployeeShifts(employees);

//Create assignShift function
function assignShift (name,day,hours){
    let employee = employees.find(employee => employee.name === name);
    if(!employee){
        console.log(`Error! Employee Name Not Found`)
        return
    };
 let schedulingError = employee.shifts.some(shift => shift.day === day);
    if(schedulingError){console.log(`Error! ${name} is Already Scheduled for ${day}`)
return}
    employee.shifts.push({ day, hours });
console.log(`Shift assigned: ${name} on ${day} for ${hours} hours`);
};

console.log(`Test Name Error Response:`);
assignShift('Ruby','Tuesday',6)
console.log(`Test Scheduling Error Response:`);
assignShift(`Sara`,`Tuesday`,6);
console.log(`Test Successful Scheduling:`);
assignShift('Sara', 'Saturday', 6);

//Create calculateTotalHours function
function calculateTotalHours(name) {let employee = employees.find(employee => employee.name === name);
    if(!employee){
        console.log(`Error! Employee Name Not Found`)
        return
    };
let totalHours = employee.shifts.reduce((accumulator, shift) => {
        return accumulator + shift.hours},0);

    return totalHours
}
let Sara = calculateTotalHours('Sara');
console.log(`Sara's Total Hours: ${Sara}`);

//Create listAvailableEmployees function
function listAvailableEmployees(day) {
    let available = employees.filter(employee => 
    !employee.shifts.some(shift => shift.day === day)
     );
    if (available.length === 0) {
        console.log(`No employees are available on ${day}`)
    } else {
        available.forEach(employee => {
            console.log(`${employee.name} is available on ${day}`);
        });
    }
    }
    console.log(`Available Employees:`);
    listAvailableEmployees('Thursday');