/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
	function rec(node, min, max) {
			// console.log(node, min, max)
			if(!node) return true
			if(node.val <= min || node.val >= max) return false
			return rec(node.left, min, node.val) && rec(node.right, node.val, max) 
	}
	return rec(root, -Infinity, Infinity)
};