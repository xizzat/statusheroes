import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Urls, { schema } from './model'

const router = new Router()
const { link, project } = schema.tree

/**
 * @api {post} /urls Create urls
 * @apiName CreateUrls
 * @apiGroup Urls
 * @apiParam link Urls's link.
 * @apiParam project Urls's project.
 * @apiSuccess {Object} urls Urls's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Urls not found.
 */
router.post('/',
  body({ link, project }),
  create)

/**
 * @api {get} /urls Retrieve urls
 * @apiName RetrieveUrls
 * @apiGroup Urls
 * @apiUse listParams
 * @apiSuccess {Object[]} urls List of urls.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /urls/:id Retrieve urls
 * @apiName RetrieveUrls
 * @apiGroup Urls
 * @apiSuccess {Object} urls Urls's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Urls not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /urls/:id Update urls
 * @apiName UpdateUrls
 * @apiGroup Urls
 * @apiParam link Urls's link.
 * @apiParam project Urls's project.
 * @apiSuccess {Object} urls Urls's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Urls not found.
 */
router.put('/:id',
  body({ link, project }),
  update)

/**
 * @api {delete} /urls/:id Delete urls
 * @apiName DeleteUrls
 * @apiGroup Urls
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Urls not found.
 */
router.delete('/:id',
  destroy)

export default router
