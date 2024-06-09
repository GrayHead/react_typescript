const baseUrl = 'https://rickandmortyapi.com/api'

const urls = {
    character: {
        all: '/character',
        byId: (id: string) => baseUrl + urls.character.all + '/' + id,

    },
    location: {}
}

export {
    baseUrl,
    urls
}
