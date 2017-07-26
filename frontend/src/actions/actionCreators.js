//SOCKET ACTIONS
export function createdItem(item) {
    return {
        type: 'CREATED_ITEM',
        item
    }
}

export function updatedItem(item) {
    return {
        type: 'UPDATED_ITEM',
        item
    }
}

export function removedItem(item) {
    return {
        type: 'REMOVED_ITEM',
        item
    }
}

// RESTFUL ACTIONS
export function createItem(item) {
    return {
        type: 'CREATE_ITEM',
        item
    }
}

export function updateItem(id, newData) {
    return {
        type: 'UPDATE_ITEM',
        id,
        newData
    }
}

export function removeItem(id) {
    return {
        type: 'REMOVE_ITEM',
        id
    }
}

export function findAllItems() {
    return {
        type: 'FIND_ALL_ITEMS'
    }
}