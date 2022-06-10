import _ from 'lodash'

export function getInitials(auth) {
  if (auth && auth.is_authenticated && auth.first_name && auth.last_name) {
    return `${auth.first_name[0]}${auth.last_name[0]}`
  } else {
    return 'AA'
  }
}

export function groupByNested(
  collection,
  propNames,
  parentId = null,
  leafCreator = null
) {
  let grouped = _.groupBy(collection, propNames[0])
  const result = Object.entries(grouped).map(([groupKey, groupValues]) => {
    const id = parentId ? `${parentId}_${groupKey}` : groupKey
    const name = groupKey
    let res = {
      id: id,
      name: name,
      childrenCount: groupValues.length,
    }
    if (propNames.length === 1) {
      const newChildren = groupValues.map((v) => {
        const leaf =
          leafCreator === null ? { ...v, id: v.id, name: v.id } : leafCreator(v)
        return leaf
      })
      const sortedChildren = _.orderBy(
        newChildren,
        ['disabled', 'modified'],
        ['asc', 'desc']
      )
      res.children = sortedChildren
    } else {
      res.children = groupByNested(
        groupValues,
        propNames.slice(1),
        id,
        leafCreator
      )
    }
    return res
  })

  return result
}

export class Random {
  constructor(seed = 19) {
    this.h = seed
    this.k = this.mix(this.h)
  }

  random() {
    let x = this.word()
    let y = 0.0
    // NB we only get 30 bits out of word().
    for (let i = 0; i < 30; ++i) {
      y = 0.5 * (y + (x & 1))
      x >>= 1
    }
    return y
  }

  randint(lo, hi) {
    let u = this.random()
    let w = hi - lo
    return Math.floor(lo + w * u)
  }

  shuffle(xs) {
    let n = xs.length
    for (let i = 0; i < n; ++i) {
      let j = this.randint(0, n)
      if (j != i) {
        let t = xs[i]
        xs[i] = xs[j]
        xs[j] = t
      }
    }
    return xs
  }

  choice(xs) {
    let n = xs.length
    let i = this.randint(0, n)
    return xs[i]
  }

  poisson(lam) {
    let x = 0
    let p = Math.exp(-lam)
    let s = p
    let u = this.random()
    while (u > s) {
      x += 1
      p *= lam / x
      s += p
    }
    return x
  }
  word() {
    this.h ^= this.mix(this.k++)
    this.h = (this.h << 13) | (this.h >> 19)
    this.h = Math.imul(this.h, 5) + 0xe6546b64
    this.h ^= this.mix(this.k++)
    this.h ^= this.h >> 16
    this.h = Math.imul(this.h, 0x85ebca6b)
    this.h ^= this.h >> 13
    this.h = Math.imul(this.h, 0xc2b2ae35)
    this.h ^= this.h >> 16
    return this.h
  }

  mix(x) {
    x = Math.imul(x, 0xcc9e2d51)
    x = (x << 15) | (x >> 17)
    x = Math.imul(x, 0x1b873593)
    return x
  }
}

export class UnionFind {
  constructor() {
    this.parent = {}
    this.rank = {}
  }

  find(x) {
    if (!(x in this.parent)) {
      this.parent[x] = x
      this.rank[x] = 0
      return x
    }
    let xp = this.parent[x]
    if (x != xp) {
      this.parent[x] = this.find(xp)
    }
    return this.parent[x]
  }

  union(x, y) {
    let xr = this.find(x)
    let yr = this.find(y)

    if (xr == yr) {
      return xr
    }

    let res = null
    if (this.rank[xr] < this.rank[yr]) {
      this.parent[xr] = yr
      res = yr
    } else if (this.rank[xr] > this.rank[yr]) {
      this.parent[yr] = xr
      res = xr
    } else {
      this.parent[yr] = xr
      this.rank[xr] += 1
      res = xr
    }
    return res
  }
}

class Tarjan {
  constructor(V, E) {
    this.V = V
    this.E = E
    this.sccs = []
    this.nextIndex = 0
    this.index = {}
    this.lowlink = {}
    this.stack = []
    this.onStack = new Set()
    for (let v of this.V) {
      if (!(v in this.index)) {
        this.strong(v)
      }
    }
  }

  strong(v) {
    this.index[v] = this.nextIndex
    this.lowlink[v] = this.nextIndex
    this.nextIndex += 1
    this.stack.push(v)
    this.onStack.add(v)

    for (let w of this.E[v] || []) {
      if (!(w in this.index)) {
        this.strong(w)
        this.lowlink[v] = Math.min(this.lowlink[v], this.lowlink[w])
      } else if (this.onStack.has(w)) {
        this.lowlink[v] = Math.min(this.lowlink[v], this.index[w])
      }
    }

    if (this.lowlink[v] == this.index[v]) {
      let scc = []
      while (true) {
        let w = this.stack.pop()
        this.onStack.delete(w)
        scc.push(w)
        if (w == v) {
          break
        }
      }
      this.sccs.push(scc)
    }
  }
}

export function tarjan(V, E) {
  let T = new Tarjan(V, E)
  return T.sccs
}

// Originally from AssetGroupDetails.vue, useful for AssetsTable.vue
import { subDays, isAfter, formatDistance } from 'date-fns'
import filesize from 'filesize'

export function formatLastModified(lastModified) {
  if (!lastModified) {
    return 'unknown'
  }

  const now = new Date()
  const modified = new Date(lastModified)
  const oneWeekAgo = subDays(now, 7)

  // If the file was modified in the last week, show the relative time
  // otherwise show the absolute date
  if (isAfter(modified, oneWeekAgo)) {
    const result = formatDistance(modified, now, {
      addSuffix: true,
    })
    return result
  } else {
    return modified.toLocaleDateString()
  }
}

export function formatFilesize(sizeBytes) {
  if (window.isNaN(sizeBytes) || !sizeBytes) {
    return 'unknown'
  } else {
    return filesize(sizeBytes)
  }
}

export function extractFilename(filepath) {
  const filepathSegments = filepath.split('/')
  return filepathSegments.length === 0 ? '' : filepathSegments.slice(-1)[0]
}

export function assetPathFormatter(filepath) {
  const maxLength = 100
  const filepathSegments = filepath.split('/')
  const parentPath = filepathSegments.slice(0, -1).join('/')
  const filename = filepathSegments.slice(-1)[0]
  const prefixLength = maxLength - filename.length
  const prefix = _.truncate(parentPath, { length: prefixLength })
  const suffix =
    prefixLength < 0 ? _.truncate(filename, { length: maxLength }) : filename

  return [prefix, suffix]
}

// From Project.vue, for GATK Pedigree format
export function sexToString(sample) {
  if (sample && sample.sex_phenotype) {
    if (sample.sex_phenotype === '1') {
      return 'Male'
    } else if (sample.sex_phenotype === '2') {
      return 'Female'
    }
  }
  return 'Unknown'
}
export function affectedToString(sample) {
  if (sample && sample.affected_status) {
    if (sample.affected_status === '1') {
      return 'Unaffected'
    } else if (sample.affected_status === '2') {
      return 'Affected'
    }
  }
  return 'Unknown'
}
