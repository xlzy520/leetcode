let list = [
  {
    id: '1',
    title: '节点1',
    parentId: '',
  },
  {
    id: '1-1',
    title: '节点1-1',
    parentId: '1'
  },
  {
    id: '1-2',
    title: '节点1-2',
    parentId: '1'
  },
  {
    id: '2',
    title: '节点2',
    parentId: ''
  },
  {
    id: '2-1',
    title: '节点2-1',
    parentId: '2'
  }
]

let mapping = list.reduce((pre, cur)=> {
  cur.children = []
  pre[cur.id] = cur
  return pre
}, {})

const ans = list.filter(node=> {
  mapping[node.parentId] && mapping[node.parentId].children.push(node)
  return !node.parentId
})


console.log(ans);

//递归实现
function treeToList(tree, result=[],level=0) {
  tree.forEach(node=> {
    result.push(node)
    level += 1
    node.children && treeToList(node.children, result, level)
  })
  return result
}

console.log(treeToList(ans));
