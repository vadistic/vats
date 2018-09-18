#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const { introspectionFromSchema } = require('graphql')
const { makeExecutableSchema } = require('graphql-tools')
const { mergeTypes } = require('merge-graphql-schemas')

// Idea from here
// https://gist.github.com/zhenwenc/09c9e78faefa4c35bdff6280a010ab81

// const REMOTE_SCHEMA_PATH = '../server/src/generated/server.graphql'
const REMOTE_SCHEMA_PATH = '../server/src/generated/prisma.graphql'
const CLIENT_SCHEMA_PATH = 'src/state/schema.graphql'
const OUTPUT_PATH = 'src/generated/clientSchema.json'

const makeSchemaStateful = async (remoteSchemaPath, clientSchemaPath) => {
  return Promise.resolve({ remoteSchemaPath, clientSchemaPath })
    .then(async file => {
      const remoteSchema = fs.readFileSync(
        path.resolve(process.cwd(), file.remoteSchemaPath),
        'utf-8'
      )

      const clientSchema = fs.readFileSync(
        path.resolve(process.cwd(), file.clientSchemaPath),
        'utf-8'
      )

      return { remoteSchema, clientSchema }
    })
    .then(schemas => {
      const typeDefs = mergeTypes([schemas.clientSchema, schemas.remoteSchema], {
        all: true,
      })

      return makeExecutableSchema({ typeDefs })
    })
    .catch(err => {
      throw new Error(`makeExecutableSchma fail (probably type duplication) \n ${err}`)
    })
    .then(executableSchema => {
      return introspectionFromSchema(executableSchema)
    })
    .catch(err => {
      throw new Error(`introspectionFromSchema fail (what's now?) \n ${err}`)
    })
    .then(schemaIntrospection => {
      const json = JSON.stringify(schemaIntrospection, null, 2)
      fs.writeFileSync(OUTPUT_PATH, json, 'utf-8')
    })
    .catch(err => {
      throw new Error(`File write fail \n ${err}`)
    })
}

makeSchemaStateful(REMOTE_SCHEMA_PATH, CLIENT_SCHEMA_PATH)
