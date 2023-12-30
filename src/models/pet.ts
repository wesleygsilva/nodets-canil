type PetType = 'dog' | 'cat' 

type PetSex = 'Masculino' | 'Feminino'

type Pet = {
    type: PetType,
    image: string,
    name: string,
    color: string,
    sex: PetSex,
    contact: string
}

const data: Pet[] = [
    {
        type: 'dog',
        image: 'pastor-alemao.jpg',
        name: 'Pastor-alemão',
        color: 'Amarelo e Preto',
        sex: 'Masculino',
        contact: '(14) 99128-2544',
    },
    {
        type: 'dog',
        image: 'labrador.jpg',
        name: 'Labrador-retriever',
        color: 'Branco',
        sex: 'Masculino',
        contact: '(14) 99128-2544',
    },
    {
        type: 'dog',
        image: 'zwergspitz.jpg',
        name: 'Zwergspitz',
        color: 'Amarelo',
        sex: 'Feminino',
        contact: '(14) 99128-2544',
    },
    {
        type: 'dog',
        image: 'husky.jpg',
        name: 'Husky Siberiano',
        color: 'Branco e Preto',
        sex: 'Masculino',
        contact: '(14) 99128-2544',
    },
    {
        type: 'dog',
        image: 'golden.jpg',
        name: 'Golden Retriever',
        color: 'Amarelo',
        sex: 'Masculino',
        contact: '(14) 99128-2544',
    },
    {
        type: 'dog',
        image: 'poodle.jpg',
        name: 'Poodle',
        color: 'Branco',
        sex: 'Feminino',
        contact: '(14) 99128-2544',
    },
    {
        type: 'dog',
        image: 'bulldog.jpg',
        name: 'Bulldog',
        color: 'Branco e Amarelo',
        sex: 'Masculino',
        contact: '(14) 99128-2544',
    },
    {
        type: 'cat',
        image: 'persa.jpg',
        name: 'Persa',
        color: 'Amarelo',
        sex: 'Masculino',
        contact: '(14) 99128-2544',
    },
    {
        type: 'cat',
        image: 'mainecoon.jpg',
        name: 'Maine Coon',
        color: 'Preto e Branco',
        sex: 'Masculino',
        contact: '(14) 99128-2544',
    },
    {
        type: 'cat',
        image: 'bengal.jpg',
        name: 'Bengal',
        color: 'Branco, Preto e Amarelo',
        sex: 'Feminino',
        contact: '(14) 99128-2544',
    },
    {
        type: 'cat',
        image: 'siames.jpg',
        name: 'Siamês',
        color: 'Amarelo e Preto',
        sex: 'Masculino',
        contact: '(14) 99128-2544',
    },
    {
        type: 'cat',
        image: 'sphynx.jpg',
        name: 'Sphynx',
        color: 'Branco',
        sex: 'Masculino',
        contact: '(14) 99128-2544',
    },
]

export const Pet = {
    getAll: (): Pet[] => {
        return data;
    },
    getFromType: (type: PetType): Pet[] => {
        return data.filter(item =>  item.type == type )
    },
    getFromName: (name: string): Pet[] => {
        return data.filter(item =>  item.name.toLowerCase().indexOf(name.toLowerCase()) > -1 )
    }
}
