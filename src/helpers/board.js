export function findCenter(field) {
    switch (field) {
        case 1:
            return {
                x: 50,
                y: 250
            };
        case 2:
            return {
                x: 150,
                y: 250
            };
        case 3:
            return {
                x: 250,
                y: 250
            };
        case 4:
            return {
                x: 50,
                y: 150
            };
        case 5:
            return {
                x: 150,
                y: 150
            };
        case 6:
            return {
                x: 250,
                y: 150
            };
        case 7:
            return {
                x: 50,
                y: 50
            };
        case 8:
            return {
                x: 150,
                y: 50
            };
        case 9:
            return {
                x: 250,
                y: 50
            };
        default:
            alert('Error, something went wrong');
            return;
    }
}
