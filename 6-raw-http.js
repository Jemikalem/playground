const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=5c815cdb5ab9274eab336e8a58a19ac0&query=47,-75&units=f'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()