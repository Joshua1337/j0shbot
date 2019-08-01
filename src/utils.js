// Standard library modules
import util from 'util'

// Third-party modules
import Promise from 'bluebird'
import 'any-promise/register/bluebird'
import dude from 'debug-dude'
import fs from 'mz/fs'
import XRegExp from 'xregexp'


const _logger = dude('rukabot')


export let logger = {}

for (const [k, v] of Object.entries(_logger)) {
  if (['debug', 'log', 'info', 'warn', 'error'].includes(k)) {
    logger[k] = (...args) => {
      if (k === 'log' && logger._lastAction && logger._lastAction !== 'log') {
        // Print blank line for separation
        console.log()
      }

      logger._lastAction = k

      v(...args)

      if (k === 'log') {
        console.log()
      }
    }
  } else {
    logger[k] = v
  }
}

// https://stackoverflow.com/a/32749533/492203
export class ExtendableError extends Error {
  constructor(message) {
    super(message)

    this.name = this.constructor.name

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor)
    } else {
      this.stack = (new Error(message)).stack
    }
  }
}

export const autoReply = (event, reply, args) => {
  let res = args

  if (res.options === undefined) {
    res.options = {}
  }

  res.options.reply_to_message_id = event.raw.message_id
  return reply(res)
}

export const escapeHTML = text =>
  XRegExp.replaceEach(text, [
    [/&/g, '&amp;'],
    [/</g, '&lt;'],
    [/>/g, '&gt;'],
    [/'/g, '&#39;'],
    [/"/g, '&quot;'],
  ])

export const inspect = (obj, options = {}) => {
  if (options.breakLength === undefined) {
    options.breakLength = Infinity
  }

  if (options.colors === undefined) {
    options.colors = true
  }

  if (options.depth === undefined) {
    options.depth = null
  }

  return util.inspect(obj, options)
}

export const readJSON = async path =>
  (await fs.exists(path)) ? fs.readFile(path).then(JSON.parse) : {}

export const textMention = (id, name) =>
  `<a href="tg://user?id=${escapeHTML(id)}">${escapeHTML(name)}</a>`

export const toTitleCase = s => s.charAt(0).toUpperCase() + s.slice(1)

export const writeJSON = (path, data) => fs.writeFile(path, JSON.stringify(data))