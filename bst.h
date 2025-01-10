
#ifndef BST_H
#define BST_H

typedef struct BSTNode {
    int data;
    struct BSTNode* left;
    struct BSTNode* right;
} BSTNode;

BSTNode* insertBST(BSTNode* root, int data);
void inorderBST(BSTNode* root);

#endif // BST_H