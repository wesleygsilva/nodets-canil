import { Request, Response } from "express"
import{ createMenuObject } from '../helpers/createMenuObject'
import { Pet } from '../models/pet'

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll() 

    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os Animais',
            background: 'allanimals.jpg'
        },
        list
    })
}

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog')

    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: { 
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list   
    })
}

export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat')

    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list  
    })
}

