export function hasCommonIds<
    T extends { id: number },
    U extends { id: number }
>(arr1: T[], arr2: U[]): boolean {
    if (!arr1.length || !arr2.length) return false;

    const idsSet = new Set(arr1.map((obj) => obj.id));
    return arr2.every((obj) => idsSet.has(obj.id));
}
