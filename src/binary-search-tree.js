const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.treeRoot = null;  // make initial root node
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.treeRoot; 
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.treeRoot = addData(this.treeRoot, data);

    function addData(treeNode, data) {
      return (!treenode) ? new Node(data) :
             (treeNode.data === data) ? treeNode :
             (data < treeNode.data) ? treeNode.left = addData(treeNode.left, data) :
             treeNode.right = addData(treeNode.right, data)
    }
    return treeNode
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    
    function searchNode(treeNode, data) {
      return (!treeNode) ? false :
             (treeNode.data === data) ? true :
             (data < treeNode.data) ? searchNode(treeNode.left, data) :
             searchNode(treeNode.right, data)
    }
  
    return searchNode(this.treeRoot, data)
  
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    function findNode(treeNode, data) {
      return (!treeNode) ? null :
             (treeNode.data === data) ? data :
             (data < treeNode.data) ? findNode(treeNode.left, data) :
             findNode(treeNode.right, data)
    }
  
    return findNode(this.treeRoot, data)
  
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.treeRoot = removeNode(treeNode, data);

    function removeNode(treeNode, data) {
      if (!treeNode) {return null}


      if (data < treeNode.data) {    // go to left tree 
        treeNode.left = removeNode(treeNode.left, data)
        return treeNode
      } else if (data > treeNode) {    // go to right tree
        treeNode.right = removeNode(treeNode.right, data)
        return treeNode
      } else {   // if we stop on needed node
          if ((!treeNode.left) && (!treeNode.right)) return null; // no children

          if (!treeNode.right) {   // has only left child
            treeNode = treeNode.left
            return treeNode
          }

          if (!treeNode.left) {   // has only right child
            treeNode = treeNode.right
            return treeNode
          }

          // has both left and right children
            // find max value from left tree
          let treeLeftMax = treeNode.left;
          while (treeLeftMax.right) {  // go to deep in left tree to find max
            treeLeftMax = treeLeftMax.right;
          }
          treeNode.data = treeLeftMax.data; // left max data making an element that will be romoved

          treeNode.left = removeNode(treeNode.left, treeLeftMax.data);  // remove that element from left tree

          return treeNode
      }
    } 
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    
    while (treeNode.left) {
      treeNode = treeNode.left
    }

    return treeNode.left
  
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.treeRoot) return null;

    while (treeNode.right) {
      treeNode = treeNode.right
    }

    return treeNode.right
  
  }
}

module.exports = {
  BinarySearchTree
};