export default {
    'image': {
        keyPickup: {
            key: 'key1',
            args: ['assets/key1.png']
        },
        doorClosed: {
            key: 'doorClosed',
            args: ['assets/door.png']
        },
    },
   
    'spritesheet': {
        tiles: {
            key: 'tiles',
            args: ['assets/tiles.png', {
                frameWidth: 32,
                frameHeight: 32
            }]
        },
        characters: {
            key: 'characters',
            args: ['assets/characters.png', {
                frameWidth: 32,
                frameHeight: 32
            }]
        },
    },
    'tilemapTiledJSON': {
        map: {
            key: 'map',
            args: ['assets/tilemap.json']
        },
    }
};