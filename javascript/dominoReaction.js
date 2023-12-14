// Domino Reaction (6 kyu)
function dominoReaction(sequence) {
    const items = sequence.split('');

    for (let i = 0; i < items.length; i++) {
        if (items[i] !== '|') break;

        items[i] = '/';
    }

    return items.join('')
}

console.log(dominoReaction("||| ||||//| |/") === "/// ||||//| |/");

/*
Problem on Codewars was for TYPESCRIPT (TS)
 
export function dominoReaction(sequence: string): string{
    const items: string[] = sequence.split('');
 
    for (let i = 0; i < items.length; i++) {
        if (items[i] !== '|') break;
 
        items[i] = '/';
    }
 
    return items.join('');
}
*/