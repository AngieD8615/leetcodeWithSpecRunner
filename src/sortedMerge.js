// Write a SortedMerge() function that takes two lists, each of which is sorted in increasing order, 
// and merges the two together into one list which is in increasing order. SortedMerge() should return 
// the new list. The new list should be made by splicing together the nodes of the first two lists.
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
  }
  insert(val){
    let newNode = new Node (val)
    if (this.head === null) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
  }
}

const sortedMerge = (l1, l2) => {

  if (l1.head === null && l2.head === null) return null;
  if (l1.head === null) return l2;
  if (l2.head === null) return l1;
  
  let node1 = l1.head;
  let node2 = l2.head;

  let merged = new LinkedList()
  while (node1 || node2){
    if (node1 === null) {
      merged.insert(node2.val)
      node2 = node2.next
    } else if (node2 === null) {
      merged.insert(node1.val)
      node1 = node1.next
    } else {
      if (node1.val < node2.val) {
        merged.insert(node1.val)
        node1 = node1.next
      } else {
        merged.insert(node2.val)
        node2 = node2.next
      }
    }
  }
  return merged
}