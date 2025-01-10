
#include <stdio.h>
#include "linked_list.h"
#include "bst.h"
#include "queue.h"

int main() {
    // Linked List operations
    LinkedList* list = createLinkedList();
    insertAtHead(list, 10);
    insertAtHead(list, 20);
    printLinkedList(list);

    // BST operations
    BSTNode* root = NULL;
    root = insertBST(root, 50);
    root = insertBST(root, 30);
    root = insertBST(root, 70);
    inorderBST(root);

    // Queue operations
    Queue* queue = createQueue();
    enqueue(queue, 100);
    enqueue(queue, 200);
    printf("Dequeued: %d\n", dequeue(queue));

    return 0;
}