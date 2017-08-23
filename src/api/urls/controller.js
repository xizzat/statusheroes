import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Urls } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Urls.create(body)
    .then((urls) => urls.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Urls.find(query, select, cursor)
    .then((urls) => urls.map((urls) => urls.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Urls.findById(params.id)
    .then(notFound(res))
    .then((urls) => urls ? urls.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Urls.findById(params.id)
    .then(notFound(res))
    .then((urls) => urls ? _.merge(urls, body).save() : null)
    .then((urls) => urls ? urls.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Urls.findById(params.id)
    .then(notFound(res))
    .then((urls) => urls ? urls.remove() : null)
    .then(success(res, 204))
    .catch(next)
