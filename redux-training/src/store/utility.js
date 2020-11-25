export const updateObject = (oldObject, updatePropreties) => {
    return {
        ...oldObject,
        ...updatePropreties
    }
}