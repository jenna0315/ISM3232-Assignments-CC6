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
assignShift(`Sara`,`Tuesday`,6));
console.log(`Test Successful Scheduling:`);
assignShift('Sara', 'Saturday', 6);