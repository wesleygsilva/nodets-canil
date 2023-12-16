type MenuOptions = '' | 'all' | 'dog' | 'cat'| 'fish'

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnoObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    if (activeMenu !== '') {
        returnoObject[activeMenu] = true
    }

    return returnoObject
}