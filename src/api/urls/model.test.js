import { Urls } from '.'

let urls

beforeEach(async () => {
  urls = await Urls.create({ link: 'test', project: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = urls.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(urls.id)
    expect(view.link).toBe(urls.link)
    expect(view.project).toBe(urls.project)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = urls.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(urls.id)
    expect(view.link).toBe(urls.link)
    expect(view.project).toBe(urls.project)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
