
# Selection / Insertion Sort

`[22,27,16,2,18,6] `

1. Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

```
Answer 1

  Step 1: [22,27,16,2,18,6] //Since 22 is already lesser than 27 no sorting was done.
  Step 2: [22,16,27,2,18,6] // 27 to 16 places changed.
  Step 3: [16,22,27,2,18,6] // 22 to 16 places changed.
  Step 4: [16,22,2,27,18,6] // 27 to 2 places changed.
  Step 5: [16,2,22,27,18,6] // 22 to 2 places changed.
  Step 6: [2,16,22,27,18,6] // 16 to 2 places changed.
  Step 7: [2,16,22,18,27,6] // 27 to 18 places changed.
  Step 8: [2,16,18,22,27,6] // 22 to 18 places changed.
  Step 9: [2,16,18,22,6,27] // 27 to 6 places changed.
  Step 10: [2,16,18,6,22,27] // 22 to 6 places changed.
  Step 11: [2,16,6,18,22,27]  // 18 to 6 places changed.
  Step 12: [2,6,16,18,22,27]  // 16 to 6 places changed.
```
2. Big-O gösterimini yazınız.
```
Answer 2

  Step 1: 1
  Step 2: 2
  Step 3: 3
  .
  .
  Last Step: n

  Sum: (n*(n+1)/2) --> O(n^2)
```

3. Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız.

a.Average Case: Aranan sayının ortada olması

b.Worst Case: Aranan sayının sonda olması

c.Best Case: Aranan sayının dizinin en başında olması
```
Answer 3

  Worst case
```
# Merge Sort
`[16,21,11,8,12,22]`

1. Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
```
Answer 1

Step 1:               [16,21,11]                             [8,12,22]
                    /           \                         /           \
Step 2:          [16,21]    -    [11]                  [8,12]    -    [22]
                /        \             \               /      \            \
Step 3:      [16]    -    [21]    -    [11]        [8]     -    [12]    -    [22]   
                \       /              /             \         /            /
Step 4:          [16,21]    -    [11]                  [8,12]    -    [22]
                     \            /                        \           /
Step 5:                [11,16,21]                            [8,12,22]
                                  
Step 6:                               [8,11,12,16,21,22]
```
2. Big-O gösterimini yazınız.

```
Answer 2

 O(nlogn)
 
```
# Binary Search Tree

`[7, 5, 1, 8, 3, 6, 0, 9, 4, 2]`

1. Yukarıda verilen dizinin Binary-Search-Tree aşamalarını yazınız.
```
Answer 1

           7
          / \
         5   8
        / \   \
       1   6   9
      / \     /
     0   3   9
        / \
       2   4

```