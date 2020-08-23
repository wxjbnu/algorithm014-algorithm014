/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 递归
var inorderTraversal = function(root) {
	let res = []
	rec(root)
	function rec(node) {
			if(!node) return
			if(node.left) rec(node.left)
			res.push(node.val)
			if(node.right) rec(node.right)
	}
	return res
};