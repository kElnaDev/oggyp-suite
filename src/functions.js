export function phraseToId(category, includeHash = true) {
    return ((includeHash) ? "#" : "") +
        category.toLowerCase()
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .replace(/\s/g, "\-");
}

export function listToString(list) {
    if (list.length === 1) {
        return String(list[0]);
    } else {
        let string = "";
        for (let i = 0; i < list.length - 2; i++) {
            string += list[i] + ", ";
        }
        string += list[list.length - 2] + " and " + list[list.length - 1];
        return string;
    }
}

// export function coolerListToString(list) {
//     if (list.length === 1) return list[0].toString()
//     let items = [null, list.pop()]
//     items[0] = list.join(', ')
//     items = items.join(' and ')
//     return items
// }