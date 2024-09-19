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