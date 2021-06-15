/* 
    Use a balanced binary search tree.

    Each tree node will hold the value and number of children it has.
    
    track(x) - insert a node at its correct place in the tree, increase child count of nodes along the insertion path by 1

    getRankOfNumber(x) - in-order traversal and keep a counter as we traverse, by the time we find x (or element that is greater than x),
                         the counter will hold its rank.
 */
