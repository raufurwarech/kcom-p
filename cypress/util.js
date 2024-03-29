
export function createitems(src, length) {
    let result = ''
    length = isNaN(length)?10:length
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return !!src ? src + "_" + result : result;
}

