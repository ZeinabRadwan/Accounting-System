import store from '~/store'

export default function (to, from, next) {
  const user = store.getters['auth/user']
  if (!user) return next()

  const defaultBranchId = Number(user.default_branch_id || 0)
  if ((defaultBranchId === 0 || isNaN(defaultBranchId)) && to.name !== 'branches.select') {
    return next({ name: 'branches.select', query: { redirect: to.fullPath } })
  }
  return next()
}


