export function enumToObject(enumType: any){
    let result: any[] = [];
    Object.entries(enumType).forEach(([key, value]) => result.push({ key, value }))
    return result;
}