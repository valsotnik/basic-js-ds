const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.treeRoot = null;
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

      
    }
 
 
 
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};