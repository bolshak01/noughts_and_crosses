export function findField(e) {
    if (e.y < 100) {
        if (e.x < 100) {
            return 7;
        }
        if (e.x < 200) {
            return 8;
        } else {
            return 9;
        }
    }
    if (e.y < 200) {
        if (e.x < 100) {
            return 4;
        }
        if (e.x < 200) {
            return 5;
        } else {
            return 6;
        }
    } else {
        if (e.x < 100) {
            return 1;
        }
        if (e.x < 200) {
            return 2;
        } else {
            return 3;
        }
    }
}
