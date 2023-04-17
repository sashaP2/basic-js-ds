//const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
      return this.tree;
  }

  add(data) {
    this.tree = addDate(this.tree, data);

    function addDate(node, data) {
      if(!node) {
        return new Node(data);
      }

      if(node.data < data){
        node.left = addDate(node.left, data);
      } else if(node.data > data){
        node.right = addDate(node.right, data);
      } else {
        return node;
      }

      return node;
    }
  }

  has(data) {
    return hasDate(this.tree, data);

    function hasDate(node, data) {
      if(!node) {
        return false;
      }

      if(node.data < data){
        return hasDate(node.left, data);
      } else if(node.data > data){
        return hasDate(node.right, data);
      } else {
        return true;
      }

    }
  }

  find(data) {
    return findDate(this.tree, data);

    function findDate(node, data) {
      if(!node) {
        return null;
      }

      if(node.data < data){
        return findDate(node.left, data);
      } else if(node.data > data){
        return findDate(node.right, data);
      } else {
        return node;
      }

    }
  }

  remove(data) {
    this.tree = removeDate(this.tree, data);

    function removeDate(node, data) {
      if(!node) {
        return null;
      }

      if(node.data < data){
        node.left = removeDate(node.left, data);
        return node;
      } else if(node.data > data){
        node.right = removeDate(node.right, data);
        return node;
      } else {
        if(!node.right && !node.left) {
          return null;
        }

        if(!node.left) {
          node = node.right;
          return node;
        }

        if(!node.right){
        node = node.left;
        return node;
      }

      let rightMin = node.right;
       while(rightMin.left){
        rightMin = rightMin.left;
       }
       node.data = rightMin.data;
       node.right = removeDate(node.right, rightMin.data);

       return node;
     }
    }
  }

  min() {
  }

  max() {
  }
}

module.exports = {
  BinarySearchTree
};