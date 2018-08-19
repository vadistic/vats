export const createPost = (root, { data }, context, info) => {
  return context.db.mutation.createPost({ data }, info)
}

export const deletePost = (root, { id }, context, info) => {
  return context.db.mutation.deletePost({ where: { id } }, `{ id }`)
}
