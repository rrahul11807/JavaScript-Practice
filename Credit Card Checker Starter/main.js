// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

function validateCred(validatecred)
{
    //Step 1: Saving the value of the last element
    const lastValue = validatecred.at(validatecred.length - 1);

    //Step 2: Taking out the last element of an array
    const slicedArray = validatecred.slice(0,validatecred.length-1);

    //Step 3: Reversing the array
    slicedArray.reverse();
    
    //Step 4: Spliting the array into two part: odd and even
    const oddArray = slicedArray.filter((a,i) => i%2==1);
    const evenArray = slicedArray.filter((a,i) => i%2 ==0);

    //Step 5: Multiply every element of the array with 2
    const multiplyEven = evenArray.map(num => num * 2);

    //Step 6: Filter array elements greater than 9 and less than 9
    const filteredEven = multiplyEven.filter(num => num > 9);
    const unfilteredEven = multiplyEven.filter(num => num < 9);

    //Step 7: Subtract 9 from elements greater than 9
    const subtractEven = filteredEven.map(num => num - 9);

    //Step 8: Concanate subtracted elements and elements that are less than 9
    const concatEven = subtractEven.concat(unfilteredEven);

    //Step 9: Concanate the Odd array from step 4 and even array from step 8 
    const concatOddEven = concatEven.concat(oddArray);

    //Step 10: Add all elements of the array
    const sum = concatOddEven.reduce((a, b)=> a + b, 0);

    //Step 11: Add the last value from step 1 to the sum of arrays
    const result = sum + lastValue;

    //Step 12: Check if result mod 10 is equal 0
    if(result % 10 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(validateCred(mystery5));

function findInvalidCards(invalidcard){
    const listInvalidCard = [];
    // Iterate through batch array and push the invalid card into new array
    invalidcard.forEach(card => {
        if(!(validateCred(card)))
            listInvalidCard.push(card);
    });
    return listInvalidCard;
}
console.log(findInvalidCards(batch));

function idInvalidCardCompanies(invalidCard){
    // map through nested arrays to get the initial digit of each card
    const int = invalidCard.map(a => a[0]).flat(2);
    let company = [];
    int.forEach(num =>{
        switch(num){
            case 3 :
                if(!company.includes('Amex'))
                    company.push('Amex');
                break;
            case 4 :
                if(!company.includes('Visa'))
                    company.push('Visa');
                break;
            case 5 :
                if(!company.includes('MasterCard'))
                    company.push('MasterCard');
                break;
            case 6 :
                if(!company.includes('Discover'))
                    company.push('Discover');
                break;
            default:
                return console.log(`Company not Found`);
        }
    })
    return company;

}
console.log(idInvalidCardCompanies(batch));

//Function to convert invalid numbers to valid numbers using parseInt 
function stringToNum (string){
    let card = [];
    for(let i=0; i <string.length; i++)
    { 
        card.push(parseInt(string[i]));
       
    }
    return card;
}
console.log(stringToNum('4485088829439828'));