
#include <stdio.h>
#include <stdlib.h>
#include "bst.h"

BSTNode* createNode(int data) {
    BSTNode* newNode = (BSTNode*)malloc(sizeof(BSTNode));
    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

BSTNode* insertBST(BSTNode* root, int data) {
    if (root == NULL) {
        return createNode(data);
    }
    if (data < root->data) {
        root->left = insertBST(root->left, data);
    } else if (data > root->data) {
        root->right = insertBST(root->right, data);
    }
    return root;
}

void inorderBST(BSTNode* root) {
    if (root != NULL) {
        inorderBST(root->left);
        printf("%d ", root->data);
        inorderBST(root->right);
    }
}