/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
	let res = []
	function rec(node) {
			if(node){
					res.push(node.val)
					for(let n of node.children) {
							rec(n)
					}
			}
	}
	rec(root)
	return res
};