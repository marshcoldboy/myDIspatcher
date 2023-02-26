import { mock, Random } from "mockjs"
import { MockApi } from "../mockapi"

function generateData(len: number) {
    const data = <any[]>[]
    let i = 0
    while (i < len) {
        const item = mock({
            'key': Random.increment(),
            'name': Random.cname(),
            'age|20-60': 21,
            'address': Random.county(true)
        })
        data.push(item)
        i++
    }
    return data
}

const data = generateData(1000)

export default <MockApi.obj[]>[
    {
        url: '/list',
        type: 'get',
        response: (options) => {
            const { page, perPage } = options.params as { page: string, perPage: string }
            const _page = +page
            const _perPage = +perPage
            return {
                code: 200,
                msg: '请求成功',
                data: {
                    page: page,
                    perPage: perPage,
                    total: data.length,
                    data: data.slice((_page - 1) * _perPage, _page * _perPage)
                }
            }
        }
    }
]