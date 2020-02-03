class Handle {
  static nums = []
  static fontobj = {
    b: 'fontWeight',
    i: 'fontStyle',
    font: 'fontSize'
  }
  static getSeltion () {
    console.log(window.getSelection().getRangeAt(0))
    return window.getSelection().getRangeAt(0)
  }
  static createEle (seltion, id, node, attr) {
    if (seltion) {
      var cn
      var newele
      var t = seltion.startContainer.parentNode
      if (node === 'b' || node === 'i' || node === 'font') {
        cn = 'span'
      } else {
        cn = node
      }
      if (node.indexOf('h') > -1 && seltion.toString() !== '') {
        return false
      }
      if ((t.innerHTML === seltion.toString() && cn === 'span')) {
        t.style[Handle.fontobj[node]] = attr
        return false
      } else {
        if (node.indexOf('h') > -1) {
          Handle.getH(t, node.toUpperCase())
          return false
        }
        newele = document.createElement(cn)
      }
      var sbs = document.createTextNode(seltion.toString())
      newele.appendChild(sbs)
      // parnode.appendChild(newele)
      document.getElementById('temp').appendChild(newele)
      var sid = id + Handle.getNum()
      newele.setAttribute('id', sid)
      // if (node.indexOf('h') > -1 && seltion.toString() === '') {
      //   if (t.id === 'editor' && t.firstChild.nodeName === '#text') {
      //     t.firstChild.nodeValue = ''
      //   } else {
      //     t.parentNode.removeChild(t)
      //   }
      // }
      if (node === 'img') {
        newele.setAttribute('src', attr)
      } else if (node === 'a') {
        newele.setAttribute('href', attr)
      } else {
        newele.style[Handle.fontobj[node]] = attr
      }
      seltion.deleteContents()
      seltion.insertNode(document.getElementById(sid))
    }
  }
  static addAlign (seltion, align) {
    let tep = seltion.endContainer.parentNode
    if (tep.nodeName === 'DIV' || tep.nodeName === 'P' || tep.nodeName.indexOf('H') > -1 || tep.nodeName === 'LI') {
      tep.align = align
    } else {
      Handle.getDivH(tep, align)
    }
  }
  /** 生成随机数 */
  static getNum () {
    var s
    do {
      s = Math.ceil(Math.random() * 1000000000 % 9)
    } while (this.nums.includes(s))
    this.nums[this.nums.length] = s
    return s
  }
  /** 循环节点，是否有div,h1 */
  static getDivH (id, arr) {
    var s
    if (typeof id === 'string') {
      s = document.getElementById(id)
    } else {
      s = id
    }
    console.log(s, 'sss')
    if (s.nodeName === 'DIV') {
      s.setAttribute('align', arr)
      return true
    } else {
      console.log(s.parentNode.getAttribute('id'), 'xxxxx')
      if (s.parentNode.getAttribute('id')) {
        Handle.getDivH(s.parentNode.getAttribute('id'), arr)
      } else {
        console.log('xxxxx')
        Handle.getDivH(s.parentNode, arr)
      }
    }
    return true
  }
  /** 循环是否是B,I  */
  static getBI (seltion, node, attr) {
    var s = seltion.startContainer.parentNode
    if (s.innerHTML === seltion.toString()) {
      var st
      if (attr === 'bold') {
        st = 'bold'
      } else if (attr === 'italic') {
        st = 'italic'
      } else {
        st = attr
      }
      s.style[Handle.fontobj[node]] = s.style[Handle.fontobj[node]] === 'normal' || s.style[Handle.fontobj[node]] === '' ? st : (attr.indexOf('px') > -1 ? st : 'normal')
      return false
    }
    return true
  }
  /**
   * H1向上循环
   * @param {*}
   */
  static getH (parentnode, attr) {
    if (parentnode.nodeName === 'DIV') {
      var dxx = document.createElement(attr)
      dxx.setAttribute('id', attr + Handle.getNum())
      // var hxx = parentnode.innerText
      // var nn = document.createTextNode(hxx)
      // dxx.appendChild(nn)
      for (var x = 0; x < parentnode.childNodes.length + 1; x++) {
        if (x !== 0) {
          x = x - 1
        }
        // parentnode.childNodes[x].remove()
        dxx.appendChild(parentnode.childNodes[x])
      }
      parentnode.appendChild(dxx)
      return false
    }
    if (parentnode.nodeName.indexOf('H') > -1 && parentnode.nodeName === attr) {
      var div = document.createElement('div')
      console.log('dddd')
      var h = parentnode.childNodes
      for (var i = 0; i < h.length + 1; i++) {
        if (i !== 0) {
          i = i - 1
        }
        div.appendChild(h[i])
      }
      parentnode.parentNode.replaceChild(div, parentnode)
      return false
    } else if (parentnode.nodeName !== attr && parentnode.nodeName.indexOf('H') > -1) {
      var div1 = document.createElement(attr)
      var hx = parentnode.childNodes
      for (var y = 0; y < hx.length + 1; y++) {
        if (y !== 0) {
          y = y - 1
        }
        div1.appendChild(hx[y])
      }
      parentnode.parentNode.replaceChild(div1, parentnode)
      return false
    } else {
      Handle.getH(parentnode.parentNode, attr)
    }
    return true
  }
}
export default Handle
