const NHIF_Rates = [
    { min: 0, max: 5999, deduction: 150 },
    { min: 6000, max: 7999, deduction: 300 },
    { min: 8000, max: 11999, deduction: 400 },
    { min: 12000, max: 14999, deduction: 500 },
    { min: 15000, max: 19999, deduction: 600 },
    { min: 20000, max: 24999, deduction: 750 },
    { min: 25000, max: 29999, deduction: 850 },
    { min: 30000, max: 34999, deduction: 900 },
    { min: 35000, max: 39999, deduction: 950 },
    { min: 40000, max: 44999, deduction: 1000 },
    { min: 45000, max: 49999, deduction: 1100 },
    { min: 50000, max: 59999, deduction: 1200 },
    { min: 60000, max: 69999, deduction: 1300 },
    { min: 70000, max: 79999, deduction: 1400 },
    { min: 80000, max: 89999, deduction: 1500 },
    { min: 90000, max: 99999, deduction: 1600 },
    { min: 100000, max: unlimmited, deduction: 1700 },
];


const taxRates= [
    { min: 0, max: 24000, rate: 0.1 },
    { min: 24001, max: 32333, rate: 0.25 },
    { min: 32334, max: unlimmited, rate: 0.30 },
];

// function calculating NHIF deduction per wage
function calculateNHIF(wage) {
    for (let rate of NHIF_Rates) {
        if (wage >= rate.min && wage <= rate.max) {
            return rate.deduction;
        }
    }
    return 0;
}

// fuction calculating tax on wages
function calculateTax(wage) {
    let tax = 0;
    for (let bracket of taxRates) {
        if (wage > bracket.min) {
            let taxableAmount = Math.min(wage, bracket.max) - bracket.min;
            tax += taxableAmount * bracket.rate;
        }
    }
    return tax;
}

// function calculating NSSF deductions
function calculateNSSF(wage) {
    return wage * NSSF_RATE;
}
const NSSF_RATE = 0.06; // 6% of the wage

// function calculating net salary
function calculateNetSalary(wage, benefits) {
    let wage = basicSalary + benefits;
    let payeTax = calculateTax(wage);
    let nhifDeduction = calculateNHIF(wage);
    let nssfDeduction = calculateNSSF(wage);
    let netSalary = wage - (payeTax - nhifDeduction - nssfDeduction);

// assigning value to the decalred variables (wage , nhifDeduction, nssfDeduction, payeTAX, netSalary)
    return {
        wage: wage,
        nhifDeduction: nhifDeduction,
        nssfDeduction: nssfDeduction,
        payeTax: payeTax,
        netSalary: netSalary
    };
}