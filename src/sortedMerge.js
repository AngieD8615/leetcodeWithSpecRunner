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

// I: L1 = empty         L2 = empty            O:  null
// I: L1 = empty         L2 =  linked list with 1, 2, 3           O: linked list with the values 1, 2, 3  => L2
// I: L1 =  linked list with values 4, 5, 6        L2 =    empty         O: linked list with values 4, 5, 6,  => L1
// I: L1 =  2, 4, 6        L2 = 3           O:
//    2 < 3 => insert 2 into merged => m = 2   then remove 2 from node 1
// node1  =  4, 6          node2 = 3        O: 2
    // 3 < 4 => insert 3 into merged => m = 2, 3 then remove 2 from node 2
// node1 = 4, 6            node2 = null     O 2, 3
// since node2 is empty insert 4 then insert 6 ...
 


// if l1 and l2 are empty return null  (empty when l1.head is null or l2.head is null)
// if l1 is empty return l2
  // if l2 is empty return l1 
// both l1 and l2 contain values in the LL
  // inst. a linked list for the merged values
  // loop through node1 and node2
    // if node1 is null
      // insert node2.val into merged LL
      // remove node2.val from node 1
    // if node2 is null
      // insert node1.val into merged LL
      // remove node1.val from node 1

    // compare the value of node1 to the value of node2
    // if node1.val < node2.val
      // insert the node1.val into merged LL
      // remove node1.val from the node1  => node1 = node1.next
    // else 
      // insert the node2.val into merged LL
      // remove node2.val from the node2  => node2 = node2.next
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