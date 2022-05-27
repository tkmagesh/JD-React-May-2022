export function sort(attrName){
    const action = { type : 'BUGS_SORT', payload : attrName }
    return action;
}