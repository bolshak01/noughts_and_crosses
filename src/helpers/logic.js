import combinations from './combinations';

export function checkFinal(crosses, noughts) {
    const finalCrossCombination = checkFinalCombination(crosses);
    if (finalCrossCombination) {
        return {
            winner: 'cross',
            combination: finalCrossCombination
        }
    }
    const finalNoughtCombination = checkFinalCombination(noughts);
    if (finalNoughtCombination) {
        return {
            winner: 'nought',
            combination: finalNoughtCombination
        }
    }
    return false;
}

function checkFinalCombination(fields) {
    return combinations.find((combination) => {
        return checkCombination(fields, combination);
    })
}

function checkCombination(fields, combination) {
    return fields.indexOf(combination[0]) !== -1
        && fields.indexOf(combination[1]) !== -1
        && fields.indexOf(combination[2]) !== -1;

}
