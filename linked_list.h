
#ifndef LINKED_LIST_H
#define LINKED_LIST_H

typedef struct Node {
    int data;
    struct Node* next;
} Node;

typedef struct LinkedList {
    Node* head;
} LinkedList;

LinkedList* createLinkedList();
void insertAtHead(LinkedList* list, int data);
void printLinkedList(LinkedList* list);

#endif // LINKED_LIST_H