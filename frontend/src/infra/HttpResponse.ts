export type HttpResponse = {
    statusCode: number
    body: any
}

export function ok(): HttpResponse {
    return {
        statusCode: 200,
        body: 'Sucesso!',
    }
}

export function created(action: string): HttpResponse {
    return {
        statusCode: 201,
        body: `criação da ${action} realizada!`,
    }
}

export function clientError(): HttpResponse {
    return {
        statusCode: 400,
        body: 'Tivemos um problema no servidor!',
    }
}

export function unauthorized(): HttpResponse {
    return {
        statusCode: 401,
        body: 'Não autorizado'
    }
}

export function forbidden(): HttpResponse {
    return {
        statusCode: 403,
        body: 'Forbidden'
    }
}

export function notFound(message: string): HttpResponse {
    return {
        statusCode: 404,
        body: `não encontramos ${message}`
    }
}

export function conflict(): HttpResponse {
    return {
        statusCode: 409,
        body: 'Houve um conflito!'
    }
}

export function tooMany(): HttpResponse {
    return {
        statusCode: 429,
        body: 'Too Many'
    }
}

export function fail() {
    return {
        statusCode: 500,
        body: {
            error: 'Algo deu errado',
        },
    }
}