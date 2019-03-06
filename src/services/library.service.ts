import { Book } from '../models/Book';
import { CD } from '../models/CD';

export class LibraryService {
    bookList: Book[] = [
        {
            name: 'Je suis une légende',
            description: [
                'Livre de Richard Matheson',
                'Post-apocalyptique',
                '1954',
            ],
            isLend: true
        },
        {
            name: 'Hunger games',
            description: [
                'Livre de Suzanne Collins',
                'Post-apocalyptique',
                '2008',
            ],
            isLend: true
        },
        {
            name: 'Fahrenheit 451',
            description: [
                'Livre de Ray Bradbury',
                'Science-fiction',
                '1953'
            ],
            isLend: false
        }
    ];

    cdList: CD[] = [
        {
            name: 'Discovery',
            description: [
                'Daft Punk',
                '2001',
            ],
            isLend: true
        },
        {
            name: 'Audio, Video, Disco',
            description: [
                'Justice',
                '2008',
            ],
            isLend: true
        },
        {
            name: 'Mezzanine',
            description: [
                'Massive Attack',
                '1998',
            ],
            isLend: true
        },
    ];
}