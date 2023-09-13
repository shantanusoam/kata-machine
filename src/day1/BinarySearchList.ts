export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0; //1 = 5
    let hi = haystack.length; //8
    do {
        const m = Math.floor(lo + (hi - lo) / 2); // middvalue
        const v = haystack[m]; // 32
        if (needle == v) {
            return true;
        } else if (needle > v) {
            lo = m + 1;
        } else {
            hi = m;
        }
    } while (lo < hi);

    return false;
}
