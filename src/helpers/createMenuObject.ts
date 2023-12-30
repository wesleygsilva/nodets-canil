type MenuOptions = '' | 'all' | 'dog' | 'cat'

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnoObject = {
        all: false,
        dog: false,
        cat: false
    }

    if (activeMenu !== '') {
        returnoObject[activeMenu] = true
    }

    return returnoObject
}