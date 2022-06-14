const json = [
  {
    question:
      "You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in forward order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.",
    url: "https://aaronice.gitbook.io/lintcode/linked_list/add_two_numbers_ii",
    moreInfo: `Given 6->1->7 + 2->9->5. That is, 617 + 295.
    Return 9->1->2. That is, 912`,
  },
  {
    question:
      "Sort a linked list in O(n log n) time using constant space complexity.",
    url: "https://aaronice.gitbook.io/lintcode/linked_list/sort_list",
    moreInfo: ``,
  },
  {
    question:
      "Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists",
    url: "https://aaronice.gitbook.io/lintcode/linked_list/merge-two-sorted-lists",
    moreInfo: "Input: 1->2->4, 1->3->4 Output: 1->1->2->3->4->4",
  },
  {
    question:
      "Merge k sorted linked lists and return it as one sorted list.Analyze and describe its complexity.",
    url: "https://aaronice.gitbook.io/lintcode/linked_list/merge_k_sorted_lists",
    moreInfo: "Input:   [2->4->null, null, -1->null] Output:  -1->2->4->null",
  },
  {
    question:
      "Given a linked list, determine if it has a cycle in it. Follow up: Can you solve it without using extra space?",
    url: "https://aaronice.gitbook.io/lintcode/linked_list/linked_list_cycle",
    moreInfo: ``,
  },
  {
    question:
      "Given a linked list, return the node where the cycle begins. If there is no cycle, return null.",
    url: "https://aaronice.gitbook.io/lintcode/linked_list/linked_list_cycle_ii",
    moreInfo: "Given-21->10->4->5, tail connects to node index 1，return10",
  },
  {
    question:
      "You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in forward order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.",
    url: "https://aaronice.gitbook.io/lintcode/linked_list/add_two_numbers_ii",
    moreInfo:
      "Example: Given 6->1->7 + 2->9->5. That is, 617 + 295. Return 9->1->2. That is, 912",
  },
  {
    question:
      "Add Two Numbers. You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.  You may assume the two numbers do not contain any leading zero, except the number 0 itself",
    url: "https://aaronice.gitbook.io/lintcode/linked_list/add-two-numbers",
    moreInfo:
      "Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) Output: 7 -> 0 -> 8 Explanation: 342 + 465 = 807.",
  },
  {
    question:
      "Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes. You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.",
    url: "https://aaronice.gitbook.io/lintcode/linked_list/odd-even-linked-list",
    moreInfo:
      "Input: 2->1->3->5->6->4->7->NULL Output: 2->3->6->7->1->5->4->NULL",
  },
  {
    question:
      "Write a program to find the node at which the intersection of two singly linked lists begins.",
    url: "https://aaronice.gitbook.io/lintcode/linked_list/intersection-of-two-linked-lists",
    moreInfo: `A:          a1 → a2
                                    ↘
                                      c1 → c2 → c3
                                    ↗
                 B:     b1 → b2 → b3`,
  },
  {
    question: "Reverse a singly linked list.",
    url: "https://aaronice.gitbook.io/lintcode/linked_list/reverse-linked-list",
    moreInfo: `Input: 1->2->3->4->5->NULL
    Output: 5->4->3->2->1->NULL`,
  },
  {
    question:
      "Reverse a linked list from position m _to _n. Do it in one-pass.",
    url: "https://aaronice.gitbook.io/lintcode/linked_list/reverse-linked-list-ii",
    moreInfo: `Input: 1->2->3->4->5->NULL, m = 2, n = 4
    Output: 1->4->3->2->5->NULL`,
  },
  {
    question:
      "Remove all elements from a linked list of integers that have valueval.",
    url: "https://aaronice.gitbook.io/lintcode/linked_list/remove-linked-list-elements",
    moreInfo: `Input: 1->2->6->3->4->5->6, val = 6
    Output: 1->2->3->4->5`,
  },
  {
    question:
      "Given a linked list, remove the n-th node from the end of list and return its head.",
    url: "https://aaronice.gitbook.io/lintcode/linked_list/remove-nth-node-from-end-of-list",
    moreInfo: `Given linked list: 1->2->3->4->5, and n = 2.

    After removing the second node from the end, the linked list becomes 1->2->3->5.`,
  },
  {
    question: `Given a non-empty, singly linked list with head nodehead, return a middle node of linked list.
    If there are two middle nodes, return the second middle node`,
    url: "https://aaronice.gitbook.io/lintcode/linked_list/middle-of-the-linked-list",
    moreInfo: `Input:
      [1,2,3,4,5]
      Output: Node 3 from this list (Serialization: [3,4,5])
      The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
      Note that we returned a ListNode object ans, such that:
      ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.`,
  },
  {
    question: `Design Singly Linked List`,
    url: `https://aaronice.gitbook.io/lintcode/linked_list/design-linked-list/design-singly-linked-list`,
    moreInfo: ``,
  },
  {
    question: `Design Doubly Linked List`,
    url: `https://aaronice.gitbook.io/lintcode/linked_list/design-linked-list/design-doubly-linked-list`,
    moreInfo: ``,
  },
  {
    question: `Given a singly linked list, determine if it is a palindrome.`,
    url: `https://aaronice.gitbook.io/lintcode/linked_list/palindrome-linked-list`,
    moreInfo: `Input: 1->2->2->1
    Output: true`,
  },
  {
    question: `Given a sorted linked list, delete all duplicates such that each element appear onlyonce.
    `,
    url: `https://aaronice.gitbook.io/lintcode/linked_list/remove-duplicates-from-sorted-list`,
    moreInfo: `Input: 1->1->2->3->3
    Output: 1->2->3`,
  },
  {
    question: `Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only _distinct _numbers from the original list.
    `,
    url: `https://aaronice.gitbook.io/lintcode/linked_list/remove-duplicates-from-sorted-list-ii`,
    moreInfo: `Input: 1->2->3->3->4->4->5
      Output: 1->2->5`,
  },
  {
    question: `Implement Stack Using Singly Linked List`,
    url: `https://aaronice.gitbook.io/lintcode/linked_list/implement-stack-using-singly-linked-list`,
    moreInfo: ``,
  },
  {
    question: `Copy List with Random Pointer`,
    url: `https://aaronice.gitbook.io/lintcode/linked_list/copy-list-with-random-pointer`,
    moreInfo: ``,
  },
  {
    question: ``,
    url: `https://aaronice.gitbook.io/lintcode/binary-search/search-in-rotated-sorted-array`,
    moreInfo: `Input: nums = [4,5,6,7,0,1,2], target = 0
      Output: 4`,
  },
  {
    question: `Search in Rotated Sorted Array
    Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
    (i.e.,[0,1,2,4,5,6,7]might become[4,5,6,7,0,1,2]).
    You are given a target value to search. If found in the array return its index, otherwise return-1.
    You may assume no duplicate exists in the array.`,
    url: ``,
    moreInfo: ``,
  },
  {
    question: `Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
      (i.e.,[0,0,1,2,2,5,6]might become[2,5,6,0,0,1,2]).
      You are given a target value to search. If found in the array returntrue, otherwise returnfalse.`,
    url: `https://aaronice.gitbook.io/lintcode/binary-search/search-in-rotated-sorted-array-ii`,
    moreInfo: `Input: nums = [2,5,6,0,0,1,2], target = 0
      Output: true`,
  },
  {
    question: `Search in a Sorted Array of Unknown Size`,
    url: `https://aaronice.gitbook.io/lintcode/binary-search/search-in-a-sorted-array-of-unknown-size`,
    moreInfo: `Input:
      array
       = [-1,0,3,5,9,12],
      target
       = 9

      Output:
       4

      Explanation:
       9 exists in
      nums
       and its index is 4`,
  },
  {
    question: `First Bad Version`,
    url: `https://aaronice.gitbook.io/lintcode/binary-search/first-bad-version`,
    moreInfo: `Given n = 5, and version = 4 is the first bad version.
      call isBadVersion(3) -> false
      call isBadVersion(5) -> true
      call isBadVersion(4) -> true
      Then 4 is the first bad version.`,
  },
  {
    question: `Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
    (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
    Find the minimum element.`,
    url: `https://aaronice.gitbook.io/lintcode/binary-search/find-minimum-in-rotated-sorted-array`,
    moreInfo: `Input: [3,4,5,1,2]
     Output: 1`,
  },
  {
    question: `Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
    (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
    Find the minimum element.
    The array may contain duplicates.`,
    url: `https://aaronice.gitbook.io/lintcode/binary-search/find-minimum-in-rotated-sorted-array-ii`,
    moreInfo: `Input: [1,3,5]
     Output: 1`,
  },
  {
    question: `A peak element is an element that is greater than its neighbors.
      Given an input array nums, wherenums[i] ≠ nums[i+1], find a peak element and return its index.
      The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.
      You may imagine that nums[-1] = nums[n] = -∞`,
    url: `https://aaronice.gitbook.io/lintcode/binary-search/find-peak-element`,
    moreInfo: `Input: nums = [1,2,3,1]
      Output: 2

      Explanation:
       3 is a peak element and your function should return the index number 2.`,
  },
  {
    question: `Search for a Range
    Given an array of integersnumssorted in ascending order, find the starting and ending position of a giventargetvalue.
    Your algorithm's runtime complexity must be in the order ofO(logn).
    If the target is not found in the array, return[-1, -1].`,
    url: `https://aaronice.gitbook.io/lintcode/binary-search/search-for-a-range`,
    moreInfo: `Input: nums = [5,7,7,8,8,10] , target = 8
     Output: [3,4]`,
  },
  {
    question: `Find K Closest Elements
      Given a sorted array, two integerskandx, find thekclosest elements toxin the array. The result should also be sorted in ascending order. If there is a tie, the smaller elements are always preferred.`,
    url: `https://aaronice.gitbook.io/lintcode/binary-search/find-k-closest-elements`,
    moreInfo: `Input:[1,2,3,4,5], k=4, x=3
     Output: [1,2,3,4]`,
  },
  {
    question: `Search Insert Position
      Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
      You may assume no duplicates in the array.`,
    url: `https://aaronice.gitbook.io/lintcode/binary-search/search-insert-position`,
    moreInfo: `Input:[1,3,5,6], 5
      Output:  2`,
  },
  {
    question: `Peak Index in a Mountain Array`,
    url: `https://aaronice.gitbook.io/lintcode/binary-search/peak-index-in-a-mountain-array`,
    moreInfo: ``,
  },
  {
    question: `Heaters`,
    url: `https://aaronice.gitbook.io/lintcode/binary-search/heaters`,
    moreInfo: ``,
  },
  {
    question: `Jewels and Stones
      You're given stringsJrepresenting the types of stones that are jewels, andSrepresenting the stones you have. Each character inSis a type of stone you have. You want to know how many of the stones you have are also jewels.
      The letters inJare guaranteed distinct, and all characters inJandSare letters. Letters are case sensitive, so"a"is considered a different type of stone from"A".`,
    url: `https://aaronice.gitbook.io/lintcode/hash-table/jewels-and-stones`,
    moreInfo: `Input:  J = "aA", S = "aAAbbbb"
      Output: 3`,
  },
  {
    question: `Given a non-empty array of integers, every element appears twice except for one. Find that single one.`,
    url: `https://aaronice.gitbook.io/lintcode/hash-table/single-number`,
    moreInfo: `Input: [4,1,2,1,2]
      Output: 4`,
  },
  {
    question: `Subdomain Visit Count`,
    url: `https://aaronice.gitbook.io/lintcode/hash-table/subdomain-visit-count`,
    moreInfo: `Input: ["9001 discuss.leetcode.com"]
      Output: ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
      Explanation: We only have one website domain: "discuss.leetcode.com". As discussed above, the subdomain "leetcode.com" and "com" will also be visited. So they will all be visited 9001 times.`,
  },
  {
    question: `Design HashMap`,
    url: `https://aaronice.gitbook.io/lintcode/hash-table/design-hashmap`,
    moreInfo: ``,
  },
  {
    question: `Design HashSet`,
    url: `https://aaronice.gitbook.io/lintcode/hash-table/design-hashset`,
    moreInfo: ``,
  },
  {
    question: `Logger Rate Limiter`,
    url: `https://aaronice.gitbook.io/lintcode/hash-table/logger-rate-limiter`,
    moreInfo: ``,
  },
  {
    question: `Isomorphic Strings
      Given two strings s and t, determine if they are isomorphic.
      Two strings are isomorphic if the characters in s can be replaced to get t`,
    url: `https://aaronice.gitbook.io/lintcode/hash-table/isomorphic-strings`,
    moreInfo: `Input: s = "paper", t = "title"
      Output: true`,
  },
  {
    question: `Minimum Index Sum of Two Lists`,
    url: `https://aaronice.gitbook.io/lintcode/hash-table/minimum-index-sum-of-two-lists`,
    moreInfo: `Input:
      ["Shogun", "Tapioca Express", "Burger King", "KFC"]
      ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]

      Output: ["Shogun"]

      Explanation: The only restaurant they both like is "Shogun".`,
  },
  {
    question: `Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at mostk.`,
    url: `https://aaronice.gitbook.io/lintcode/hash-table/contains-duplicate-ii`,
    moreInfo: `Input: nums = [1,2,3,1], k = 3
      Output: true`,
  },
  {
    question: `Contains Duplicate III`,
    url: `https://aaronice.gitbook.io/lintcode/hash-table/contains-duplicate-iii`,
    moreInfo: ``,
  },
  {
    question: `Longest Consecutive Sequence, Given an unsorted array of integers, find the length of the longest consecutive elements sequence.    `,
    url: `https://aaronice.gitbook.io/lintcode/hash-table/longest_consecutive_sequence`,
    moreInfo: `Input:  [1, 2, 3, 4],
      Output: 4`,
  },
  {
    question: `Distribute Candies
      Given an integer array with even length, where different numbers in this array represent different kinds of candies. Each number means one candy of the corresponding kind. You need to distribute these candies equally in number to brother and sister. Return the maximum number of kinds of candies the sister could gain`,
    url: `https://aaronice.gitbook.io/lintcode/hash-table/distribute-candies`,
    moreInfo: `Input: candies = [1,1,2,2,3,3]
     Output: 3
     Explanation:
     There are three different kinds of candies (1, 2 and 3), and two candies for each kind.
     Optimal distribution: The sister has candies [1,2,3] and the brother has candies [1,2,3], too.
     The sister has three different kinds of candies.`,
  },
  {
    question: `Shortest Word Distance. Given a list of words and two wordsword1_and_word2, return the shortest distance between these two words in the list.`,
    url: `https://aaronice.gitbook.io/lintcode/hash-table/shortest-word-distance`,
    moreInfo: `Assume that words =["practice", "makes", "perfect", "coding", "makes"]
      Input: word1 = “coding”, word2 = “practice”
      Output: 3`,
  },
  {
    question: ``,
    url: `https://aaronice.gitbook.io/lintcode/hash-table/shortest-word-distance-ii`,
    moreInfo: `
      Assume that words =["practice", "makes", "perfect", "coding", "makes"].
      Input: word1= “coding”, word2 = “practice”
      Output: 3`,
  },
  {
    question: `Given a string and an offset, rotate string by offset. (rotate from left to right)`,
    url: `https://aaronice.gitbook.io/lintcode/string/rotate-string`,
    moreInfo: `
      input: abcdefg
      offset=0 => "abcdefg"
      offset=1 => "gabcdef"
      offset=2 => "fgabcde"
      offset=3 => "efgabcd"`,
  },
  {
    question: `Add Binary`,
    url: `https://aaronice.gitbook.io/lintcode/string/add-binary`,
    moreInfo: `Input: a = "1010", b = "1011"
     Output: "10101"`,
  },
  {
    question: `Return the index of the first occurrence of needle in haystack, or-1if needle is not part of haystack.`,
    url: `https://aaronice.gitbook.io/lintcode/string/implement-strstr`,
    moreInfo: `Input: haystack = "hello", needle = "ll"
     Output: 2`,
  },
  {
    question: `Longest Common Prefix`,
    url: `https://aaronice.gitbook.io/lintcode/string/longest-common-prefix`,
    moreInfo: `Input:  ["flower","flow","flight"]
      Output: "fl"`,
  },
  {
    question: `Reverse Words in a String`,
    url: `https://aaronice.gitbook.io/lintcode/string/reverse-words-in-a-string`,
    moreInfo: `Input: "the sky is blue",
      Output: "blue is sky the".`,
  },
  {
    question: `Given an input string, reverse the string word by word`,
    url: `https://aaronice.gitbook.io/lintcode/string/reverse-words-in-a-string-ii`,
    moreInfo: `Input: ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
      Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]`,
  },
  {
    question: `Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.`,
    url: `https://aaronice.gitbook.io/lintcode/string/reverse-words-in-a-string-iii`,
    moreInfo: `Input: "Let's take LeetCode contest"
     Output:"s'teL ekat edoCteeL tsetnoc"`,
  },
  {
    question: ``,
    url: `https://aaronice.gitbook.io/lintcode/string/valid-word-abbreviation`,
    moreInfo: `Input:  str= "internationalization", abbr= "i12iz4n":
      Output: true.`,
  },
  {
    question: `Group Anagrams`,
    url: `https://aaronice.gitbook.io/lintcode/string/group-anagrams`,
    moreInfo: ``,
  },
  {
    question: `Unique Email Addresses`,
    url: `https://aaronice.gitbook.io/lintcode/string/unique-email-addresses`,
    moreInfo: `Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
      Output: 2
      Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com"
      actually receive mails`,
  },
  {
    question: `Next Closest Time`,
    url: `https://aaronice.gitbook.io/lintcode/string/next-closest-time`,
    moreInfo: `Input: "19:34"
      Output: "19:39"
      Explanation: The next closest time choosing from digits 1, 9, 3, 4, is 19:39,
          which occurs 5 minutes later.  It is not 19:33, because this occurs 23 hours and 59 minutes later.`,
  },
  {
    question: `License Key Formatting`,
    url: `https://aaronice.gitbook.io/lintcode/string/license-key-formatting`,
    moreInfo: `Input: S = "5F3Z-2e-9-w", K = 4
    Output: "5F3Z-2E9W"
    Explanation: The string S has been split into two parts, each part has 4 characters.
   Note that the two extra dashes are not needed and can be removed.`,
  },
  {
    question: `Ransom Note`,
    url: `https://aaronice.gitbook.io/lintcode/string/ransom-note`,
    moreInfo: `canConstruct("a", "b") -> false
      canConstruct("aa", "ab") -> false
      canConstruct("aa", "aab") -> true`,
  },
  {
    question: `Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.`,
    url: `https://aaronice.gitbook.io/lintcode/string/multiply-strings`,
    moreInfo: `Input: num1 = "123", num2 = "456"
     Output: "56088"`,
  },
  {
    question: `Text Justification`,
    url: `https://aaronice.gitbook.io/lintcode/string/text-justification`,
    moreInfo: ``,
  },
  {
    question: `Reorder Log Files`,
    url: `https://aaronice.gitbook.io/lintcode/string/reorder-log-files`,
    moreInfo: `Input: ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
    Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]`,
  },
  {
    question: `Most Common Word`,
    url: `https://aaronice.gitbook.io/lintcode/string/most-common-word`,
    moreInfo: `Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
    banned = ["hit"]
    Output: "ball"
    Explanation:
    "hit" occurs 3 times, but it is a banned word.
    "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph.
    Note that words in the paragraph are not case sensitive,
    that punctuation is ignored (even if adjacent to words, such as "ball,"),
    and that "hit" isn't the answer even though it occurs more because it is banned.`,
  },
  {
    question: `K-Substring with K different characters, Calculate the number of substrings of length K and containing K different characters`,
    url: `https://aaronice.gitbook.io/lintcode/string/k-substring-with-k-different-characters`,
    moreInfo: `String: "abacab" K: 3
      Answer: 2
      substrings: ["bac", "cab"]`,
  },
  {
    question: `Find All Anagrams in a String`,
    url: `https://aaronice.gitbook.io/lintcode/string/find-all-anagrams-in-a-string`,
    moreInfo: `Input: s: "cbaebabacd" p: "abc"
      Output:[0, 6]
      Explanation:
      The substring with start index = 0 is "cba", which is an anagram of "abc".
      The substring with start index = 6 is "bac", which is an anagram of "abc".`,
  },
  {
    question: `Find the Closest Palindrome`,
    url: `https://aaronice.gitbook.io/lintcode/string/find-the-closest-palindrome`,
    moreInfo: `Input: "123"
     Output: "121"`,
  },
  {
    question: ``,
    url: `https://aaronice.gitbook.io/lintcode/string/simplify-path`,
    moreInfo: `Input: "/home/"
      Output: "/home"
      Explanation:
       Note that there is no trailing slash after the last directory name.`,
  },
  {
    question: `Partition Array`,
    url: `https://aaronice.gitbook.io/lintcode/array/partition_array`,
    moreInfo: ``,
  },
  {
    question: `Median of Two Sorted Arrays`,
    url: `https://aaronice.gitbook.io/lintcode/array/median_of_two_sorted_arrays`,
    moreInfo: `Given A=[1,2,3,4,5,6] and B=[2,3,4,5], the median is 3.5`,
  },
  {
    question: `Intersection of Two Arrays, Given two arrays, write a function to compute their intersection.
      Each element in the result must be unique. The result can be in any order.`,
    url: `https://aaronice.gitbook.io/lintcode/array/intersection_of_two_arrays`,
    moreInfo: `Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].`,
  },
  {
    question: `Given two arrays, write a function to compute their intersection.`,
    url: `https://aaronice.gitbook.io/lintcode/array/intersection_of_two_arrays_ii`,
    moreInfo: `Input: nums1 = [1, 2, 2, 1], nums2 = [2, 2],
      Output: [2, 2].`,
  },
  {
    question: `Given an array of integers, find a contiguous subarray which has the largest sum.`,
    url: `https://aaronice.gitbook.io/lintcode/array/maximum_subarray_sum`,
    moreInfo: `Given the array [−2,2,−3,4,−1,2,1,−5,3], the contiguous subarray [4,−1,2,1] has the largest sum = 6`,
  },
  {
    question: `Given an array of integers, find the subarray with smallest sum. Return the sum of the subarray.`,
    url: `https://aaronice.gitbook.io/lintcode/array/minimum-subarray-sum`,
    moreInfo: `[1, -1, -2, 1], return-3.`,
  },
  {
    question: `Given an array of integers, find two non-overlapping subarrays which have the largest sum.
      The number in each subarray should be contiguous. Return the largest sum`,
    url: `https://aaronice.gitbook.io/lintcode/array/maximum-subarray-ii`,
    moreInfo: `For given[1, 3, -1, 2, -1, 2], the two subarrays are[1, 3] and [2, -1, 2] or [1, 3, -1, 2] and [2], they both have the largest sum7`,
  },
  {
    question: `Given an array of integers and a numberk, find knon-overlappingsubarrays which have the largest sum.
      The number in each subarray should be contiguous.
      Return the largest sum.`,
    url: `https://aaronice.gitbook.io/lintcode/array/maximum-subarray-iii`,
    moreInfo: `Input: [-1,4,-2,3,-2,3], k=2, return8`,
  },
  {
    question: `Given an integer array, find a subarray with sum closest to zero. Return the indexes of the first number and last number`,
    url: `https://aaronice.gitbook.io/lintcode/array/subarray_sum_closest`,
    moreInfo: `Given [-3, 1, 1, -3, 5], return [0, 2], [1, 3], [1, 1], [2, 2] or [0, 4]`,
  },
  {
    question: `Given an integer array, find a subarray where the sum of numbers is zero. Your code should return the index of the first number and the index of the last number.`,
    url: `https://aaronice.gitbook.io/lintcode/array/subarray_sum`,
    moreInfo: `Input: [-3, 1, 2, -3, 4], return [0, 2] or [1, 3]`,
  },
  {
    question: `Given a non-negative number represented as an array of digits, plus one to the number`,
    url: `https://aaronice.gitbook.io/lintcode/array/plus_one`,
    moreInfo: `Given [1,2,3] which represents 123, return [1,2,4].
      Given [9,9,9] which represents 999, return [1,0,0,0].`,
  },
  {
    question: `Maximum Subarray Difference`,
    url: `https://aaronice.gitbook.io/lintcode/array/maximum-subarray-difference`,
    moreInfo: `For[1, 2, -3, 1], return6`,
  },
  {
    question: `Given an integer arrays, find a contiguous subarray which has the largest sum and length should be greater or equal to given lengthk.
      Return the largest sum, return 0 if there are fewer than k elements in the array.
      Ensure that the result is an integer type`,
    url: `https://aaronice.gitbook.io/lintcode/array/maximum-subarray-iv`,
    moreInfo: `Given the array [-2,2,-3,4,-1,2,1,-5,3 ]and k =5, the contiguous subarray [2,-3,4,-1,2,1] has the largest sum = 5`,
  },
  {
    question: `Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k`,
    url: `https://aaronice.gitbook.io/lintcode/array/subarray-sum-equals-k`,
    moreInfo: `Input: nums = [1,1,1], k = 2
      Output: 2`,
  },
  {
    question: `Intersection of Two Arrays`,
    url: `https://aaronice.gitbook.io/lintcode/array/intersection-of-two-arrays`,
    moreInfo: `Input: nums1 = [1,2,2,1], nums2 = [2,2]
      Output: [2]`,
  },
  {
    question: `Given two arrays, write a function to compute their intersection.`,
    url: `https://aaronice.gitbook.io/lintcode/array/intersection-of-two-arrays-ii`,
    moreInfo: `Input: nums1 = [1,2,2,1], nums2 = [2,2]
      Output: [2,2]`,
  },
  {
    question: `Given an array of integers nums, write a method that returns the "pivot" index of this array.`,
    url: `https://aaronice.gitbook.io/lintcode/array/find-pivot-index`,
    moreInfo: `Input: nums = [1, 7, 3, 6, 5, 6]
      Output: 3
      Explanation:
      The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3.
      Also, 3 is the first index where this occurs.`,
  },
  {
    question: `Given an array, rotate the array to the right by k _steps, where _k is non-negative`,
    url: `https://aaronice.gitbook.io/lintcode/array/rotate-array`,
    moreInfo: `Input: [1,2,3,4,5,6,7] and k = 3
      Output: [5,6,7,1,2,3,4]
      Explanation:
      rotate 1 steps to the right: [7,1,2,3,4,5,6]
      rotate 2 steps to the right: [6,7,1,2,3,4,5]
      rotate 3 steps to the right: [5,6,7,1,2,3,4]`,
  },
  {
    question: `Get Smallest Nonnegative Integer Not In The Array`,
    url: `https://aaronice.gitbook.io/lintcode/array/get-smallest-nonnegative-integer-not-in-the-array`,
    moreInfo: `input:  arr = [0, 1, 2, 3],
      output: 4`,
  },
  {
    question: `Maximize Distance to Closest Person.
      In a row of seats,1represents a person sitting in that seat, and0represents that the seat is empty.
      There is at least one empty seat, and at least one person sitting.
      Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized.
      Return that maximum distance to closest person`,
    url: `https://aaronice.gitbook.io/lintcode/array/maximize-distance-to-closest-person`,
    moreInfo: `Input: [1,0,0,0,1,0,1]
      Output: 2
      Explanation:
      If Alex sits in the second open seat (seats[2]), then the closest person has distance 2.
      If Alex sits in any other open seat, the closest person has distance 1.
      Thus, the maximum distance to the closest person is 2.`,
  },
  {
    question: `Given an array with_n_objects colored red, white or blue, sort the min-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.
      Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.`,
    url: `https://aaronice.gitbook.io/lintcode/array/sort-colors`,
    moreInfo: `Input: [2,0,2,1,1,0]
      Output: [0,0,1,1,2,2]`,
  },
  {
    question: `Next Permutation`,
    url: `https://aaronice.gitbook.io/lintcode/array/next-permutation`,
    moreInfo: `1,2,3→1,3,2
      3,2,1→1,2,3
      1,1,5→1,5,1`,
  },
  {
    question: `Rotate Image`,
    url: `https://aaronice.gitbook.io/lintcode/array/rotate-image`,
    moreInfo: `Given
      input matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ],

      rotate the input matrix in-place such that it becomes:
      [
        [7,4,1],
        [8,5,2],
        [9,6,3]
      ]`,
  },
  {
    question: `Pour Water`,
    url: `https://aaronice.gitbook.io/lintcode/array/pour-water`,
    moreInfo: ``,
  },
  {
    question: `Prison Cells After N Days`,
    url: `https://aaronice.gitbook.io/lintcode/array/active-and-inactive-cells-after-k-days`,
    moreInfo: `Input: cells = [0,1,0,1,1,0,0,1], N = 7
      Output: [0,0,1,1,0,0,0,0]
      Explanation:
      The following table summarizes the state of the prison on each day:
      Day 0: [0, 1, 0, 1, 1, 0, 0, 1]
      Day 1: [0, 1, 1, 0, 0, 0, 0, 0]
      Day 2: [0, 0, 0, 0, 1, 1, 1, 0]
      Day 3: [0, 1, 1, 0, 0, 1, 0, 0]
      Day 4: [0, 0, 0, 0, 0, 1, 0, 0]
      Day 5: [0, 1, 1, 1, 0, 1, 0, 0]
      Day 6: [0, 0, 1, 0, 1, 1, 0, 0]
      Day 7: [0, 0, 1, 1, 0, 0, 0, 0]`,
  },
  {
    question: `Majority Element`,
    url: `https://aaronice.gitbook.io/lintcode/array/majority-element`,
    moreInfo: `Input: [2,2,1,1,1,2,2]
     Output: 2`,
  },
  {
    question: `Can Place Flowers`,
    url: `https://aaronice.gitbook.io/lintcode/array/can-place-flowers`,
    moreInfo: `Input:flowerbed = [1,0,0,0,1], n = 1
     Output: True`,
  },
  {
    question: ``,
    url: `https://aaronice.gitbook.io/lintcode/array/candy`,
    moreInfo: `Input: [1,0,2]
     Output: 5
     Explanation:
      You can allocate to the first, second and third child with 2, 1, 2 candies respectively.`,
  },
  {
    question: `Given a matrix of_m_x_n_elements (_m_rows,_n_columns), return all elements of the matrix in spiral order`,
    url: `https://aaronice.gitbook.io/lintcode/matrix/spiral-matrix`,
    moreInfo: `Input: [
       [ 1, 2, 3 ],
       [ 4, 5, 6 ],
       [ 7, 8, 9 ]
      ]
      Output: [1,2,3,6,9,8,7,4,5]`,
  },
  {
    question: `Set Matrix Zeroes, Given a m x n matrix, if an element is 0, set its entire row and column to 0. `,
    url: `https://aaronice.gitbook.io/lintcode/matrix/set-matrix-zeroes`,
    moreInfo: `Input: [
        [1,1,1],
        [1,0,1],
        [1,1,1]
      ]

      Output: [
        [1,0,1],
        [0,0,0],
        [1,0,1]
      ]`,
  },
  {
    question: `Diagonal Traverse`,
    url: `https://aaronice.gitbook.io/lintcode/matrix/diagonal-traverse`,
    moreInfo: `Input:[
       [ 1, 2, 3 ],
       [ 4, 5, 6 ],
       [ 7, 8, 9 ]
      ]
      Output:  [1,2,4,7,5,3,6,8,9]`,
  },
  {
    question: `Design Circular Queue`,
    url: `https://aaronice.gitbook.io/lintcode/queue/design-circular-queue`,
    moreInfo: ``,
  },
  {
    question: `Implement Queue using Stacks`,
    url: `https://aaronice.gitbook.io/lintcode/queue/implement-queue-using-stacks`,
    moreInfo: ``,
  },
  {
    question: `Implement Queue by Two Stacks`,
    url: `https://aaronice.gitbook.io/lintcode/queue/implement_queue_by_two_stacks`,
    moreInfo: ``,
  },
  {
    question: `Implement Stack using Queues`,
    url: `https://aaronice.gitbook.io/lintcode/queue/implement-stack-using-queues`,
    moreInfo: ``,
  },
  {
    question: `Moving Average from Data Stream, Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.`,
    url: `https://aaronice.gitbook.io/lintcode/queue/moving-average-from-data-stream`,
    moreInfo: `MovingAverage m = new MovingAverage(3);
      m.next(1) = 1
      m.next(10) = (1 + 10) / 2
      m.next(3) = (1 + 10 + 3) / 3
      m.next(5) = (10 + 3 + 5) / 3`,
  },
  {
    question: ``,
    url: `https://aaronice.gitbook.io/lintcode/queue/walls-and-gates`,
    moreInfo: `Input:
      [INF  -1  0  INF
        INF INF INF  -1
        INF  -1 INF  -1
          0  -1 INF INF]

          Output:   3  -1   0   1
          2   2   1  -1
          1  -1   2  -1
          0  -1   3   4`,
  },
  {
    question: `Open the Lock`,
    url: `https://aaronice.gitbook.io/lintcode/queue/open-the-lock`,
    moreInfo: `Input: dead ends = ["0201","0101","0102","1212","2002"], target = "0202"
      Output: 6
      Explanation:
      A sequence of valid moves would be "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202".
      Note that a sequence like "0000" -> "0001" -> "0002" -> "0102" -> "0202" would be invalid,
      because the wheels of the lock become stuck after the display becomes the dead end "0102".`,
  },
  {
    question: `Sliding Window Maximum`,
    url: `https://aaronice.gitbook.io/lintcode/queue/sliding_window_maximum`,
    moreInfo: `Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
      Output: [3,3,5,5,6,7]
      Explanation:
      Window position                Max
      ---------------               -----
      [1  3  -1] -3  5  3  6  7       3
       1 [3  -1  -3] 5  3  6  7       3
       1  3 [-1  -3  5] 3  6  7       5
       1  3  -1 [-3  5  3] 6  7       5
       1  3  -1  -3 [5  3  6] 7       6
       1  3  -1  -3  5 [3  6  7]      7`,
  },
  {
    question: `Valid Parentheses
      Given a string containing just the characters'(',')','{','}','['and']', determine if the input string is valid.
  An input string is valid if:
  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.
  Note that an empty string is also considered valid.`,
    url: `https://aaronice.gitbook.io/lintcode/stack/valid-parentheses`,
    moreInfo: `Input: "()[]{}"
     Output: true`,
  },
  {
    question: `Longest Valid Parentheses`,
    url: `https://aaronice.gitbook.io/lintcode/stack/longest-valid-parentheses`,
    moreInfo: `Input:"(()"
     Output: 2
     Explanation: The longest valid parentheses substring is "()"`,
  },
  {
    question: `Implement a stack with min() function, which will return the smallest number in the stack.`,
    url: `https://aaronice.gitbook.io/lintcode/stack/min_stack`,
    moreInfo: ``,
  },
  {
    question: `Design a max stack that supports push, pop, top, peekMax and popMax.`,
    url: `https://aaronice.gitbook.io/lintcode/stack/max-stack`,
    moreInfo: ``,
  },
  {
    question: `Daily Temperatures`,
    url: `https://aaronice.gitbook.io/lintcode/stack/daily-temperatures`,
    moreInfo: `given the list of temperaturesT = [73, 74, 75, 71, 69, 72, 76, 73], your output should be[1, 1, 4, 2, 1, 1, 0, 0].`,
  },
  {
    question: `Valid operators are+,-,*,/. Each operand may be an integer or another expression.`,
    url: `https://aaronice.gitbook.io/lintcode/stack/evaluate-reverse-polish-notation`,
    moreInfo: `Input: ["2", "1", "+", "3", "*"]
     Output:9
     Explanation:
      ((2 + 1) * 3) = 9`,
  },
  {
    question: `You are given two arrays (without duplicates)nums1 and nums2 where nums1’s elements are subset of nums2. Find all the next greater numbers for nums 1's elements in the corresponding places of nums2.
      The Next Greater Number of a number x in nums1 is the first greater number to its right innums2. If it does not exist, output -1 for this number`,
    url: `https://aaronice.gitbook.io/lintcode/stack/next-greater-element-i`,
    moreInfo: `Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
      Output: [-1,3,-1]
      Explanation:
          For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
          For number 1 in the first array, the next greater number for it in the second array is 3.
          For number 2 in the first array, there is no next greater number for it in the second array, so output -1.`,
  },
  {
    question: `Next Greater Element II,
      Given a circular array (the next element of the last element is the first element of the array), print the Next Greater Number for every element. The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, output -1 for this number.`,
    url: `https://aaronice.gitbook.io/lintcode/stack/next-greater-element-ii`,
    moreInfo: `Input: [1,2,1]
     Output: [2,-1,2]
     Explanation:
      The first 1's next greater number is 2;
      The number 2 can't find next greater number;
      The second 1's next greater number needs to search circularly, which is also 2.`,
  },
  {
    question: `Next Greater Element III`,
    url: `https://aaronice.gitbook.io/lintcode/stack/next-greater-element-iii`,
    moreInfo: `Input: 12
     Output: 21`,
  },
  {
    question: `Largest Rectangle in Histogram`,
    url: `https://aaronice.gitbook.io/lintcode/stack/largest_rectangle_in_histogram`,
    moreInfo: `Given height = [2,1,5,6,2,3],
      return 10.`,
  },
  {
    question: `Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area`,
    url: `https://aaronice.gitbook.io/lintcode/stack/maximal-rectangle`,
    moreInfo: `Input: [
        ["1","0","1","0","0"],
        ["1","0","1","1","1"],
        ["1","1","1","1","1"],
        ["1","0","0","1","0"]
      ]
      Output: 6`,
  },
  {
    question: `Car Fleet`,
    url: `https://aaronice.gitbook.io/lintcode/stack/car-fleet`,
    moreInfo: `Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
      Output: 3
      Explanation:
      The cars starting at 10 and 8 become a fleet, meeting each other at 12.
      The car starting at 0 doesn't catch up to any other car, so it is a fleet by itself.
      The cars starting at 5 and 3 become a fleet, meeting each other at 6.
      Note that no other cars meet these fleets before the destination, so the answer is 3.`,
  },
  {
    question: `The Skyline Problem`,
    url: `https://aaronice.gitbook.io/lintcode/heap/the-skyline-problem`,
    moreInfo: ``,
  },
  {
    question: `Top K Frequent Words`,
    url: `https://aaronice.gitbook.io/lintcode/heap/top-k-frequent-words`,
    moreInfo: `Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
     Output: ["i", "love"]
     Explanation:
      "i" and "love" are the two most frequent words.
         Note that "i" comes before "love" due to a lower alphabetical order.`,
  },
  {
    question: `Find top_k _frequent words in realtime data stream.`,
    url: `https://aaronice.gitbook.io/lintcode/heap/top-k-frequent-words-ii`,
    moreInfo: `TopK(2)
      add("lint")
      add("code")
      add("code")
      topk()
      >> ["code", "lint"]`,
  },
  {
    question: `Top K Frequent Elements`,
    url: `https://aaronice.gitbook.io/lintcode/heap/top-k-frequent-elements`,
    moreInfo: `Input: nums = [1,1,1,2,2,3], k = 2
      Output: [1,2]`,
  },
  {
    question: `Top k Largest Numbers`,
    url: `https://aaronice.gitbook.io/lintcode/heap/top_k_largest_numbers`,
    moreInfo: ` [3,10,1000,-99,4,100] and k = 3. Return [1000, 100, 10].`,
  },
  {
    question: `Implement a data structure, provide two interfaces:
      add(number). Add a new number in the data structure.
      topk(). Return the top k largest numbers in this data structure. k is given when we create the data structure`,
    url: `https://aaronice.gitbook.io/lintcode/heap/top_k_largest_numbers_ii`,
    moreInfo: ``,
  },
  {
    question: `Minimum Cost to Hire K Workers`,
    url: `https://aaronice.gitbook.io/lintcode/heap/minimum-cost-to-hire-k-workers`,
    moreInfo: `Input: quality = [10,20,5], wage = [70,50,30], K = 2
      Output: 105.00000
      Explanation: We pay 70 to 0-th worker and 35 to 2-th worker.`,
  },
  {
    question: `Kth Largest Element in an Array
      Find K-th largest element in an array. Note that it is the kth largest element in the sorted order, not the kth distinct element.`,
    url: `https://aaronice.gitbook.io/lintcode/heap/kth_largest_element`,
    moreInfo: `In array [9,3,2,4,8], the 3rd largest element is 4.`,
  },
  {
    question: `Find the kth smallest number in a row and column sorted matrix.`,
    url: `https://aaronice.gitbook.io/lintcode/heap/kth_smallest_number_in_sorted_matrix`,
    moreInfo: `input: [
        [1 ,5 ,7],
        [3 ,7 ,8],
        [4 ,8 ,9],
      ], k = 4
      Output = 5
      `,
  },
  {
    question: `Kth Smallest Sum In Two Sorted Arrays`,
    url: `https://aaronice.gitbook.io/lintcode/heap/kth_smallest_sum_in_two_sorted_arrays`,
    moreInfo: `Given [1, 7, 11] and [2, 4, 6].
      For k = 3, return 7.
      For k = 4, return 9.
      For k = 8, return 15.`,
  },
  {
    question: `K Closest Points to the Origin`,
    url: `https://aaronice.gitbook.io/lintcode/heap/k-closest-points-to-the-origin`,
    moreInfo: `Input: points = [[1,3],[-2,2]], K = 1
      Output: [[-2,2]]
      Explanation:

      The distance between (1, 3) and the origin is sqrt(10).
      The distance between (-2, 2) and the origin is sqrt(8).
      Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
      We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].

      Input: points = [[3,3],[5,-1],[-2,4]], K = 2
      Output: [[3,3],[-2,4]]
      (The answer [[-2,4],[3,3]] would also be accepted.)`,
  },
  {
    question: `Merge K Sorted Lists`,
    url: `https://aaronice.gitbook.io/lintcode/heap/merge_k_sorted_lists`,
    moreInfo: `Input: [2->6->null, 5->null, 7->null]
      Output: 2->5->6->7->null`,
  },
  {
    question: `Merge K Sorted Arrays`,
    url: `https://aaronice.gitbook.io/lintcode/heap/merge-k-sorted-arrays`,
    moreInfo: `Input:
      [
        [1, 3, 5, 7],
        [2, 4, 6],
        [0, 8, 9, 10, 11]
      ]
    Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]`,
  },
  {
    question: `Top K Frequent Words - Map Reduce`,
    url: `https://aaronice.gitbook.io/lintcode/heap/top-k-frequent-words-map-reduce`,
    moreInfo: ``,
  },
  {
    question: `Heapify`,
    url: `https://aaronice.gitbook.io/lintcode/data_structure/heapify`,
    moreInfo: `Given [3,2,1,4,5], return [1,2,3,4,5] or any legal heap array.`,
  },
  {
    question: `LRU Cache`,
    url: `https://aaronice.gitbook.io/lintcode/data_structure/lru_cache`,
    moreInfo: ``,
  },
  {
    question: `LFU Cache`,
    url: `https://aaronice.gitbook.io/lintcode/data_structure/lfu_cache`,
    moreInfo: ``,
  },
  {
    question: `Stack Sorting`,
    url: `https://aaronice.gitbook.io/lintcode/data_structure/stack_sorting`,
    moreInfo: ``,
  },
  {
    question: `Sliding Window Maximum`,
    url: `https://aaronice.gitbook.io/lintcode/data_structure/sliding_window_maximum`,
    moreInfo: `Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
      Output: [3,3,5,5,6,7]
      Explanation:

      Window position                Max
      ---------------               -----
      [1  3  -1] -3  5  3  6  7       3
       1 [3  -1  -3] 5  3  6  7       3
       1  3 [-1  -3  5] 3  6  7       5
       1  3  -1 [-3  5  3] 6  7       5
       1  3  -1  -3 [5  3  6] 7       6
       1  3  -1  -3  5 [3  6  7]      7`,
  },
  {
    question: `Moving Average from Data Stream`,
    url: `https://aaronice.gitbook.io/lintcode/data_structure/moving-average-from-data-stream`,
    moreInfo: `MovingAverage m = new MovingAverage(3);
      m.next(1) = 1
      m.next(10) = (1 + 10) / 2
      m.next(3) = (1 + 10 + 3) / 3
      m.next(5) = (10 + 3 + 5) / 3`,
  },
  {
    question: `Find Median from Data Stream`,
    url: `https://aaronice.gitbook.io/lintcode/data_structure/data_stream_median`,
    moreInfo: `For numbers coming list: [1, 2, 3, 4, 5], return [1, 1, 2, 2, 3].
      For numbers coming list: [4, 5, 1, 3, 2, 6, 0], return [4, 4, 4, 3, 3, 3, 3].
      For numbers coming list: [2, 20, 100], return [2, 2, 20].
      `,
  },
  {
    question: `Sliding Window Median`,
    url: `https://aaronice.gitbook.io/lintcode/data_structure/sliding-window-median`,
    moreInfo: `
      Given nums=[1,3,-1,-3,5,3,6,7], and k= 3.

      Window position                Median
      ---------------               -----
      [1  3  -1] -3  5  3  6  7       1
       1 [3  -1  -3] 5  3  6  7       -1
       1  3 [-1  -3  5] 3  6  7       -1
       1  3  -1 [-3  5  3] 6  7       3
       1  3  -1  -3 [5  3  6] 7       5
       1  3  -1  -3  5 [3  6  7]      6`,
  },
  {
    question: `Flatten 2D Vector
      Design and implement an iterator to flatten a 2d vector. It should support the following operations:nextandhasNext.`,
    url: `https://aaronice.gitbook.io/lintcode/data_structure/flatten-2d-vector`,
    moreInfo: ``,
  },
  {
    question: `Flatten Nested List Iterator`,
    url: `https://aaronice.gitbook.io/lintcode/data_structure/flatten-nested-list-iterator`,
    moreInfo: `Input: [[1,1],2,[1,1]]
      Output: [1,1,2,1,1]

      Explanation:
      By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,1,2,1,1].`,
  },
  {
    question: `Design Search Autocomplete System`,
    url: `https://aaronice.gitbook.io/lintcode/data_structure/design-search-autocomplete-system`,
    moreInfo: ``,
  },
  {
    question: `Design Tic-Tac-Toe`,
    url: `https://aaronice.gitbook.io/lintcode/data_structure/design-tic-tac-toe`,
    moreInfo: ``,
  },
  {
    question: `Find the Connected Component in the Undirected Graph`,
    url: `https://aaronice.gitbook.io/lintcode/union_find/find_the_connected_component_in_the_undirected_graph`,
    moreInfo: `
      Input: A------B  C
              \     |  |
              \    |  |
                \   |  |
                \  |  |
                  D   E
      Output: {A,B,D}, {C,E}`,
  },
  {
    question: `Find the Weak Connected Component in the Directed Graph`,
    url: `https://aaronice.gitbook.io/lintcode/union_find/find_the_weak_connected_component_in_the_directed_graph`,
    moreInfo: `
      A----->B  C
      \      |  |
       \     |  |
        \    |  |
         \   v  v
           ->D  E <- F
      Output: {A,B,D} and {C,E,F}`,
  },
  {
    question: `Graph Valid Tree`,
    url: `https://aaronice.gitbook.io/lintcode/union_find/graph_valid_tree`,
    moreInfo: `Given n = 5 and edges = [[0, 1], [0, 2], [0, 3], [1, 4]], return true`,
  },
  {
    question: `Number of Islands`,
    url: `https://aaronice.gitbook.io/lintcode/union_find/number_of_islands`,
    moreInfo: `Input: [
        [1, 1, 0, 0, 0],
        [0, 1, 0, 0, 1],
        [0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1]
      ]
      return 3`,
  },
  {
    question: `Number of Islands II`,
    url: `https://aaronice.gitbook.io/lintcode/union_find/number_of_islands_ii`,
    moreInfo: `Input: m = 3, n = 3, positions = [[0,0], [0,1], [1,2], [2,1]]
     Output: [1,1,2,3]`,
  },
  {
    question: `Surrounded Regions
      Given a 2D board containing 'X' and 'O', capture all regions surrounded by 'X'.
      A region is captured by flipping all 'O''s into 'X''s in that surrounded region.`,
    url: `https://aaronice.gitbook.io/lintcode/union_find/surrounded_regions`,
    moreInfo: `Input: X X X X
                        X O O X
                        X X O X
                        X O X X
      Output: X X X X
              X X X X
              X X X X
              X O X X`,
  },
  {
    question: `Most Stones Removed with Same Row or Column`,
    url: `https://aaronice.gitbook.io/lintcode/union_find/most-stones-removed-with-same-row-or-column`,
    moreInfo: `Input: stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]
      Output: 5`,
  },
  {
    question: `Redundant Connection`,
    url: `https://aaronice.gitbook.io/lintcode/union_find/redundant-connection`,
    moreInfo: `Input:
      [[1,2], [1,3], [2,3]]

     Output:
      [2,3]

     Explanation:
      The given undirected graph will be like this:
       1
      / \
     2 - 3`,
  },
  {
    question: `Implement Trie
      Implement a trie with insert, search, and startsWith methods.`,
    url: `https://aaronice.gitbook.io/lintcode/trie/implement_trie`,
    moreInfo: ``,
  },
  {
    question: `Add and Search Word`,
    url: `https://aaronice.gitbook.io/lintcode/trie/add_and_search_word`,
    moreInfo: `addWord("bad")
      addWord("dad")
      addWord("mad")
      search("pad") -> false
      search("bad") -> true
      search(".ad") -> true
      search("b..") -> true`,
  },
  {
    question: ``,
    url: `https://aaronice.gitbook.io/lintcode/trie/word_search_ii`,
    moreInfo: `Input: [doaf, agai, dcan]  dict: "dog", "dad", "dgdg", "can", "again"}
      Output: {"dog", "dad", "can", "again"}`,
  },
  {
    question: `Longest Word in Dictionary`,
    url: `https://aaronice.gitbook.io/lintcode/trie/longest-word-in-dictionary`,
    moreInfo: `Input:
    words = ["w","wo","wor","worl", "world"]
    Output: "world"
    Explanation:
    The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".`,
  },
  {
    question: `Palindrome Pairs`,
    url: `https://aaronice.gitbook.io/lintcode/trie/palindrome-pairs`,
    moreInfo: `Input: ["abcd","dcba","lls","s","sssll"]
      Output: [[0,1],[1,0],[3,2],[2,4]]

      Explanation: The palindromes are ["dcbaabcd","abcddcba","slls","llssssll"]`,
  },
  {
    question: `Build tries from a list of <word, freq> pairs. Save top 10 for each node.`,
    url: `https://aaronice.gitbook.io/lintcode/trie/trie-service`,
    moreInfo: `Input:
      <"abc", 2>
      <"ac", 4>
      <"ab", 9>
     Output:<a[9,4,2]<b[9,2]<c[2]<>>c[4]<>>>
     Explanation:
                 Root
                  /
                a(9,4,2)
               /    \
             b(9,2) c(4)
            /
          c(2)`,
  },
  {
    question: `Design Search Autocomplete System`,
    url: `https://aaronice.gitbook.io/lintcode/trie/design-search-autocomplete-system`,
    moreInfo: ``,
  },
  {
    question: `Typeahead`,
    url: `https://aaronice.gitbook.io/lintcode/trie/typeahead`,
    moreInfo: `Given dictionary ={"Jason Zhang", "James Yu", "Bob Zhang", "Larry Shi"}
      search"Zhang", return["Jason Zhang", "Bob Zhang"].
      search"James", return["James Yu"]`,
  },
  {
    question: `Construct Binary Tree from Preorder and Inorder Traversal  `,
    url: `https://aaronice.gitbook.io/lintcode/trees/construct-binary-tree-from-preorder-and-inorder-traversal`,
    moreInfo: `preorder = [3,9,20,15,7]
      inorder = [9,3,15,20,7]

      3
      / \
     9  20
       /  \
      15   7`,
  },
  {
    question: `Populating Next Right Pointers in Each Node`,
    url: `https://aaronice.gitbook.io/lintcode/trees/populating-next-right-pointers-in-each-node`,
    moreInfo: `     1 -> NULL
                    /  \
                  2 -> 3 -> NULL
                  / \  / \
                4->5->6->7 -> NULL`,
  },
  {
    question: `Populating Next Right Pointers in Each Node II`,
    url: `https://aaronice.gitbook.io/lintcode/trees/populating-next-right-pointers-in-each-node-ii`,
    moreInfo: `
        1 -> NULL
      /  \
     2 -> 3 -> NULL
    / \    \
   4-> 5 -> 7 -> NULL`,
  },
  {
    question: `Maximum Depth of Binary Tree`,
    url: `https://aaronice.gitbook.io/lintcode/trees/maximum-depth-of-binary-tree`,
    moreInfo: `
      3
      / \
     9  20
       /  \
      15   7

      output 3`,
  },
  {
    question: `Symmetric Tree
      Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
      `,
    url: `https://aaronice.gitbook.io/lintcode/trees/symmetric-tree`,
    moreInfo: ``,
  },
  {
    question: `Validate/ check Binary Search Tree`,
    url: `https://aaronice.gitbook.io/lintcode/trees/validate-binary-search-tree`,
    moreInfo: ``,
  },
  {
    question: `Convert Sorted Array to Binary Search Tree    `,
    url: `https://aaronice.gitbook.io/lintcode/trees/convert-sorted-array-to-binary-search-tree`,
    moreInfo: ``,
  },
  {
    question: `Path Sum. Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.`,
    url: `https://aaronice.gitbook.io/lintcode/trees/path-sum`,
    moreInfo: `
      `,
  },
  {
    question: `Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.    `,
    url: `https://aaronice.gitbook.io/lintcode/trees/path-sum-ii`,
    moreInfo: `Input:
      5
      / \
     4   8
    /   / \
   11  13  4
  /  \    / \
  7    2  5   1

  Output: [
    [5,4,11,2],
    [5,8,4,5]
  ]`,
  },
  {
    question: `You are given a binary tree in which each node contains an integer value.
      Find the number of paths that sum to a given value.
      The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes)`,
    url: `https://aaronice.gitbook.io/lintcode/trees/path-sum-iii`,
    moreInfo: `
      root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

        10
       /  \
      5   -3
     / \    \
    3   2   11
   / \   \
  3  -2   1

  Return 3. The paths that sum to 8 are:

  1.  5 -> 3
  2.  5 -> 2 -> 1
  3. -3 -> 11`,
  },
  {
    question: `Binary Tree Maximum Path Sum`,
    url: `https://aaronice.gitbook.io/lintcode/trees/binary-tree-maximum-path-sum`,
    moreInfo: `Input: [-10,9,20,null,null,15,7]

      -10
      / \
     9  20
       /  \
      15   7

   Output: 42`,
  },
  {
    question: `Kth Smallest Element in a BST
      Given a binary search tree, write a function kth Smallest to find the kth smallest element in it.`,
    url: `https://aaronice.gitbook.io/lintcode/trees/kth-smallest-element-in-a-bst`,
    moreInfo: `Input:
      root = [5,3,6,2,4,null,null,1], k = 3
            5
           / \
          3   6
         / \
        2   4
       /
      1

     Output:
      3`,
  },
  {
    question: `Given two binary trees, write a function to check if they are the same or not.
      Two binary trees are considered the same if they are structurally identical and the nodes have the same value.`,
    url: `https://aaronice.gitbook.io/lintcode/trees/same-tree`,
    moreInfo: `
      Input:
             1         1
            / \       / \
           2   3     2   3

          [1,2,3],   [1,2,3]


  Output:
   true`,
  },
  {
    question: `Lowest Common Ancestor of a Binary Tree`,
    url: `https://aaronice.gitbook.io/lintcode/trees/lowest-common-ancestor-of-a-binary-tree`,
    moreInfo: `Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
      Output: 3
      Explanation: The LCA of of nodes 5 and 1 is 3.`,
  },
  {
    question: `Lowest Common Ancestor of a Binary Search Tree`,
    url: `https://aaronice.gitbook.io/lintcode/trees/lowest-common-ancestor-of-a-binary-search-tree`,
    moreInfo: `Input:
      root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8

     Output:
      6

     Explanation:
     The LCA of nodes 2 and 8 is 6.`,
  },
  {
    question: `Given a nested list of integers, return the sum of all integers in the list weighted by their depth.    `,
    url: `https://aaronice.gitbook.io/lintcode/trees/nested-list-weight-sum-ii`,
    moreInfo: `Input:
      [[1,1],2,[1,1]]
      Output:
      8

      Explanation:
      F
      our 1's at depth 1, one 2 at depth 2.`,
  },
  {
    question: `Given a list of numbers, construct a BST from it(you need to insert nodes one-by-one with the given order to get the BST) and find the distance between two given nodes.    `,
    url: `https://aaronice.gitbook.io/lintcode/trees/bst-node-distance`,
    moreInfo: `input:
      numbers = [2,1,3]
      node1 = 1
      node2 = 3
      output:
      2`,
  },
  {
    question: `Given a Binary Search Tree (BST) with the root noderoot, return the minimum difference between the values of any two different nodes in the tree.    `,
    url: `https://aaronice.gitbook.io/lintcode/trees/minimum-distance-difference-between-bst-nodes`,
    moreInfo: `Input:
      root = [4,2,6,1,3,null,null]

     Output:
      1

     Explanation:

     Note that root is a TreeNode object, not an array.

     The given tree [4,2,6,1,3,null,null] is represented by the following diagram:

               4
             /   \
           2      6
          / \
         1   3

     while the minimum difference in this tree is 1, it occurs between node 1 and node 2, also between node 3 and node 2.`,
  },
  {
    question: `Closet Common Manager    `,
    url: `https://aaronice.gitbook.io/lintcode/trees/closet-common-manager`,
    moreInfo: ``,
  },
  {
    question: `Serialize and Deserialize Binary Tree    `,
    url: `https://aaronice.gitbook.io/lintcode/trees/serialize-and-deserialize-binary-tree`,
    moreInfo: `You may serialize the following tree:

      1
     / \
    2   3
       / \
      4   5

  as "[1,2,3,null,null,4,5]"`,
  },
  {
    question: `Serialize and Deserialize N-ary Tree    `,
    url: `https://aaronice.gitbook.io/lintcode/trees/serialize-and-deserialize-n-ary-tree`,
    moreInfo: ``,
  },
  {
    question: `Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.    `,
    url: `https://aaronice.gitbook.io/lintcode/trees/diameter-of-a-binary-tree`,
    moreInfo: ``,
  },
  {
    question: `Print Binary Trees  `,
    url: `https://aaronice.gitbook.io/lintcode/trees/print-binary-trees`,
    moreInfo: `Input:

      1
     / \
    2   3
     \
      4

  Output:

  [["", "", "", "1", "", "", ""],
  ["", "2", "", "", "", "3", ""],
  ["", "", "4", "", "", "", ""]]`,
  },
  {
    question: `Segment Tree Build`,
    url: `https://aaronice.gitbook.io/lintcode/segment_tree/segment_tree_build`,
    moreInfo: ``,
  },
  {
    question: `Given an integer array nums, find the sum of the elements between indices i and j (i≤j), inclusive.  `,
    url: `https://aaronice.gitbook.io/lintcode/segment_tree/range-sum-query-mutable`,
    moreInfo: `Given nums = [1, 3, 5]
      sumRange(0, 2) -> 9
      update(1, 2)
      sumRange(0, 2) -> 8`,
  },
  {
    question: `Clone Graph    `,
    url: `https://aaronice.gitbook.io/lintcode/graph_search/clone_graph`,
    moreInfo: ``,
  },
  {
    question: `N Queens    `,
    url: `https://aaronice.gitbook.io/lintcode/graph_search/n_queens`,
    moreInfo: ``,
  },
  {
    question: `Six Degrees    `,
    url: `https://aaronice.gitbook.io/lintcode/graph_search/six_degrees`,
    moreInfo: ``,
  },
  {
    question: `Number of Islands    `,
    url: `https://aaronice.gitbook.io/lintcode/graph_search/number_of_islands`,
    moreInfo: ``,
  },
  {
    question: `Number of Distinct Islands    `,
    url: `https://aaronice.gitbook.io/lintcode/graph_search/number-of-distinct-islands`,
    moreInfo: ``,
  },
  {
    question: `Word Search
      Given a 2D board and a word, find if the word exists in the grid.
  The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once. `,
    url: `https://aaronice.gitbook.io/lintcode/graph_search/word_search`,
    moreInfo: `[
    [A,B,C,E],
    [S,F,C,S],
    [A,D,E,E]
  ]

  word = "ABCCED", -> returns true,
  word = "SEE", -> returns true,
  word = "ABCB", -> returns false.`,
  },
  {
    question: `Course Schedule    `,
    url: `https://aaronice.gitbook.io/lintcode/graph_search/course-schedule`,
    moreInfo: `Input: 2, [[1,0],[0,1]]

     Output:
     false

     Explanation:
      There are a total of 2 courses to take.
                  To take course 1 you should have finished course 0, and to take course 0 you should
                  also have finished course 1. So it is impossible.`,
  },
  {
    question: `There are a total of _n _courses you have to take, labeled from0ton-1.
      Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair:[0,1]
      Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.
      There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.`,
    url: `https://aaronice.gitbook.io/lintcode/graph_search/course-schedule-ii`,
    moreInfo: `Input:
      4, [[1,0],[2,0],[3,1],[3,2]]

     Output:
     [0,1,2,3] or [0,2,1,3]
     Explanation:
      There are a total of 4 courses to take. To take course 3 you should have finished both
                  courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
                  So one correct course order is
     [0,1,2,3]
     . Another correct ordering is
     [0,2,1,3] .`,
  },
  {
    question: `Given two words (beginWord _and _endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord _to _endWord, such that:
      Only one letter can be changed at a time.
      Each transformed word must exist in the word list. Note that _beginWord _is _not _a transformed word`,
    url: `https://aaronice.gitbook.io/lintcode/graph_search/word-ladder`,
    moreInfo: `Input:
      beginWord = "hit"
      endWord = "cog"
      wordList = ["hot","dot","dog","lot","log"]

      Output: 0

      Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.`,
  },
  {
    question: `Redundant Connection    `,
    url: `https://aaronice.gitbook.io/lintcode/graph_search/redundant-connection`,
    moreInfo: `Input:
      [[1,2], [2,3], [3,4], [1,4], [1,5]]

     Output:
      [1,4]

     Explanation:
      The given undirected graph will be like this:
     5 - 1 - 2
         |   |
         4 - 3`,
  },
  {
    question: `Redundant Connection II    `,
    url: `https://aaronice.gitbook.io/lintcode/graph_search/redundant-connection-ii`,
    moreInfo: `Input: [[1,2], [2,3], [3,4], [4,1], [1,5]]
      Output: [4,1]
      Explanation: The given directed graph will be like this:
      5 <- 1 -> 2
           ^    |
           |    v
           4 <- 3`,
  },
  {
    question: `Given an integer matrix, find the length of the longest increasing path.    `,
    url: `https://aaronice.gitbook.io/lintcode/graph_search/longest-increasing-path-in-a-matrix`,
    moreInfo: `Input: nums =
      [
        [3,4,5],
        [3,2,6],
        [2,2,1]
      ]
      Output: 4
      Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.`,
  },
  {
    question: `Given a list of airline tickets represented by pairs of departure and arrival airports[from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs fromJFK. Thus, the itinerary must begin with JFK.    `,
    url: `https://aaronice.gitbook.io/lintcode/graph_search/reconstruct-itinerary`,
    moreInfo: `Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
      Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]

      Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"].
                   But it is larger in lexical order.`,
  },
  {
    question: `The Maze    `,
    url: `https://aaronice.gitbook.io/lintcode/graph_search/the-maze`,
    moreInfo: `Input 1: a maze represented by a 2D array

      0 0 1 0 0
      0 0 0 0 0
      0 0 0 1 0
      1 1 0 1 1
      0 0 0 0 0

      Input 2: start coordinate (rowStart, colStart) = (0, 4)
      Input 3: destination coordinate (rowDest, colDest) = (4, 4)

      Output: true

      Explanation: One possible way is : left -> down -> left -> down -> right -> down -> right.`,
  },
  {
    question: `There is a ball in a maze with empty spaces and walls. The ball can go through empty spaces by rolling up,down,left or right, but it won't stop rolling until hitting a wall. When the ball stops, it could choose the next direction.
      Given the ball's start position, the destination and the maze, find the shortest distance for the ball to stop at the destination. The distance is defined by the number of empty spacestraveled by the ball from the start position (excluded) to the destination (included). If the ball cannot stop at the destination, return -1.
      The maze is represented by a binary 2D array. 1 means the wall and 0 means the empty space. You may assume that the borders of the maze are all walls. The start and destination coordinates are represented by row and column indexes.`,
    url: `https://aaronice.gitbook.io/lintcode/graph_search/the-maze-ii`,
    moreInfo: `Input 1: a maze represented by a 2D array

      0 0 1 0 0
      0 0 0 0 0
      0 0 0 1 0
      1 1 0 1 1
      0 0 0 0 0

      Input 2: start coordinate (rowStart, colStart) = (0, 4)
      Input 3: destination coordinate (rowDest, colDest) = (4, 4)

      Output: 12

      Explanation: One shortest way is : left -> down -> left -> down -> right -> down -> right.
                   The total distance is 1 + 1 + 3 + 1 + 2 + 2 + 2 = 12.`,
  },
  {
    question: `The Maze III    `,
    url: `https://aaronice.gitbook.io/lintcode/graph_search/the-maze-iii`,
    moreInfo: `Input 1: a maze represented by a 2D array

      0 0 0 0 0
      1 1 0 0 1
      0 0 0 0 0
      0 1 0 0 1
      0 1 0 0 0

      Input 2: ball coordinate (rowBall, colBall) = (4, 3)
      Input 3: hole coordinate (rowHole, colHole) = (0, 1)

      Output: "lul"

      Explanation: There are two shortest ways for the ball to drop into the hole.
      The first way is left -> up -> left, represented by "lul".
      The second way is up -> left, represented by 'ul'.
      Both ways have shortest distance 6, but the first way is lexicographically smaller,
      because 'l' < 'u'. So the output is "lul".`,
  },
  {
    question: `Topological Sorting    `,
    url: `https://aaronice.gitbook.io/lintcode/graph_search/topological-sorting`,
    moreInfo: ``,
  },
  {
    question: `Island Perimeter    `,
    url: `https://aaronice.gitbook.io/lintcode/graph_search/island-perimeter`,
    moreInfo: `Input:

      [[0,1,0,0],
       [1,1,1,0],
       [0,1,0,0],
       [1,1,0,0]]


      Output:
       16


      Explanation:
       The perimeter is the 16 yellow stripes in the image below:`,
  },
  {
    question: `Flood Fill    `,
    url: `https://aaronice.gitbook.io/lintcode/graph_search/flood-fill`,
    moreInfo: `Input:

      image = [[1,1,1],[1,1,0],[1,0,1]]
      sr = 1, sc = 1, newColor = 2

      Output:
       [[2,2,2],[2,2,0],[2,0,1]]

      Explanation:

      From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected
      by a path of the same color as the starting pixel are colored with the new color.
      Note the bottom corner is not colored 2, because it is not 4-directionally connected
      to the starting pixel.

      -----------------------

      [
       [1, 1, 1],
       [1, 1, 0],
       [1, 0, 1]
      ]`,
  },
  {
    question: `Cheapest Flights Within K Stops    `,
    url: `https://aaronice.gitbook.io/lintcode/graph_search/cheapest-flights-within-k-stops`,
    moreInfo: `Input:

      n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
      src = 0, dst = 2, k = 1

      Output:
       200

      Explanation:

      The graph looks like this:
           0
         /    \
       100    500
       /         \
      1 ---100--- 2

      The cheapest price from city 0 to city 2 with at most 1 stop costs 200, as marked red in the picture.`,
  },
  {
    question: `Evaluate Division    `,
    url: `https://aaronice.gitbook.io/lintcode/graph_search/evaluate-division`,
    moreInfo: `Given
      a / b = 2.0, b / c = 3.0.
  queries are:
      a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? .
  return
      [6.0, 0.5, -1.0, 1.0, -1.0 ].`,
  },
  {
    question: `Alien Dictionary`,
    url: `https://aaronice.gitbook.io/lintcode/graph_search/alien-dictionary`,
    moreInfo: `Input:

      [
        "wrt",
        "wrf",
        "er",
        "ett",
        "rftt"
      ]


      Output: "wertf"`,
  },
  {
    question: `Cut Off Trees for Golf Event    `,
    url: `https://aaronice.gitbook.io/lintcode/graph_search/cut-off-trees-for-golf-event`,
    moreInfo: `Input:

      [
       [1,2,3],
       [0,0,4],
       [7,6,5]
      ]

      Output:
       6`,
  },
  {
    question: `Jump Game II,
      Given an array of non-negative integers, you are initially positioned at the first index of the array.
      Each element in the array represents your maximum jump length at that position.
      Your goal is to reach the last index in the minimum number of jumps.    `,
    url: `https://aaronice.gitbook.io/lintcode/graph_search/jump-game-ii`,
    moreInfo: `Input:
      [2,3,1,1,4]

     Output:
      2

     Explanation:
      The minimum number of jumps to reach the last index is 2.
         Jump 1 step from index 0 to 1, then 3 steps to the last index.`,
  },
  {
    question: `Most Stones Removed with Same Row or Column    `,
    url: `https://aaronice.gitbook.io/lintcode/graph_search/most-stones-removed-with-same-row-or-column`,
    moreInfo: `Input: stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]
      Output: 5`,
  },
  {
    question: `Subsets, Given a set of distinct integers,nums, return all possible subsets (the power set).    `,
    url: `https://aaronice.gitbook.io/lintcode/backtracking/subsets`,
    moreInfo: `Input:
      nums = [1,2,3]

     Output:

     [
       [3],
       [1],
       [2],
       [1,2,3],
       [1,3],
       [2,3],
       [1,2],
       []
     ]`,
  },
  {
    question: `Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).    `,
    url: `https://aaronice.gitbook.io/lintcode/backtracking/subsets-ii`,
    moreInfo: `Input:
      [1,2,2]

     Output:

     [
       [2],
       [1],
       [1,2,2],
       [2,2],
       [1,2],
       []
     ]`,
  },
  {
    question: `Letter Combinations of a Phone Number    `,
    url: `https://aaronice.gitbook.io/lintcode/backtracking/letter-combinations-of-a-phone-number`,
    moreInfo: `Input: "23"

      Output:
       ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].`,
  },
  {
    question: `Given a collection of distinct integers, return all possible permutations.    `,
    url: `https://aaronice.gitbook.io/lintcode/backtracking/permutations`,
    moreInfo: `Input:
      [1,2,3]

     Output:

     [
       [1,2,3],
       [1,3,2],
       [2,1,3],
       [2,3,1],
       [3,1,2],
       [3,2,1]
     ]`,
  },
  {
    question: `Given a collection of numbers that might contain duplicates, return all possible unique permutations.    `,
    url: `https://aaronice.gitbook.io/lintcode/backtracking/permutations-ii`,
    moreInfo: `Input:
      [1,1,2]

     Output:

     [
       [1,1,2],
       [1,2,1],
       [2,1,1]
     ]`,
  },
  {
    question: `Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.    `,
    url: `https://aaronice.gitbook.io/lintcode/backtracking/combinations`,
    moreInfo: `Input:
      n = 4, k = 2

     Output:

     [
       [2,4],
       [3,4],
       [2,3],
       [1,2],
       [1,3],
       [1,4],
     ]`,
  },
  {
    question: `Given a set of candidate numbers (candidates)(without duplicates)and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.`,
    url: `https://aaronice.gitbook.io/lintcode/backtracking/combination-sum`,
    moreInfo: `Input: candidates = [2,3,5], target = 8,
      A solution set is:
      [
        [2,2,2,2],
        [2,3,3],
        [3,5]
      ]`,
  },
  {
    question: ``,
    url: `https://aaronice.gitbook.io/lintcode/backtracking/combination-sum-ii`,
    moreInfo: `Input: candidates  = [10,1,2,7,6,1,5], target = 8,

     A solution set is:

     [
       [1, 7],
       [1, 2, 5],
       [2, 6],
       [1, 1, 6]
     ]`,
  },
  {
    question: `Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.    `,
    url: `https://aaronice.gitbook.io/lintcode/backtracking/combination-sum-iii`,
    moreInfo: `Input: k = 3, n = 9
      Output: [[1,2,6], [1,3,5], [2,3,4]]`,
  },
  {
    question: `N-Queens    `,
    url: `https://aaronice.gitbook.io/lintcode/backtracking/n-queens`,
    moreInfo: `Input:
      4

     Output:
      [
      [".Q..",  // Solution 1
       "...Q",
       "Q...",
       "..Q."],

      ["..Q.",  // Solution 2
       "Q...",
       "...Q",
       ".Q.."]
     ]

     Explanation:
      There exist two distinct solutions to the 4-queens puzzle as shown above.`,
  },
  {
    question: `N-Queens II    `,
    url: `https://aaronice.gitbook.io/lintcode/backtracking/n-queens-ii`,
    moreInfo: `Input:
      4

     Output:
      2

     Explanation:
      There are two distinct solutions to the 4-queens puzzle as shown below.
     [
      [".Q..",  // Solution 1
       "...Q",
       "Q...",
       "..Q."],

      ["..Q.",  // Solution 2
       "Q...",
       "...Q",
       ".Q.."]
     ]`,
  },
  {
    question: `Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
      `,
    url: `https://aaronice.gitbook.io/lintcode/backtracking/generate-parentheses`,
    moreInfo: ` For example, givenn= 3, a solution set is:
      [
        "((()))",
        "(()())",
        "(())()",
        "()(())",
        "()()()"
      ]`,
  },
  {
    question: `Generate all possible subset of size k of given array with distinct elements.    `,
    url: `https://aaronice.gitbook.io/lintcode/backtracking/subsets-of-size-k`,
    moreInfo: `Input :   {1, 2, 3, 4}  k = 2
  Output :  1 2
      1 3
      1 4
      2 3
      2 4
      3 4`,
  },
  {
    question: `Given an array of integers, find how many pairs in the array such that their sum is bigger than a specific target number. Please return the number of pairs.    `,
    url: `https://aaronice.gitbook.io/lintcode/two_pointers/two_sum_ii`,
    moreInfo: `Given numbers = [2, 7, 11, 15], target = 24. Return 1. (11 + 15 is the only pair)    `,
  },
  {
    question: `Given an array of integers, how many three numbers can be found in the array, so that we can build an triangle whose three edges length is the three numbers that we find?    `,
    url: `https://aaronice.gitbook.io/lintcode/two_pointers/triangle_count`,
    moreInfo: ` Given array S = [3,4,6,7], return 3. They are:

      [3,4,6]
      [3,6,7]
      [4,6,7]`,
  },
  {
    question: `Trapping Rain Water    `,
    url: `https://aaronice.gitbook.io/lintcode/two_pointers/trapping_rain_water`,
    moreInfo: `Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.    `,
  },
  {
    question: `Container with Most Water    `,
    url: `https://aaronice.gitbook.io/lintcode/two_pointers/container_with_most_water`,
    moreInfo: `Given [1,3,2], the max area of the container is 2.    `,
  },
  {
    question: `Minimum Size Subarray Sum
      Given an array of n positive integers and a positive integers, find the minimal length of a contiguous subarray of which the sum ≥s. If there isn't one, return 0 instead.    `,
    url: `https://aaronice.gitbook.io/lintcode/two_pointers/minimum_size_subarray_sum`,
    moreInfo: `Input:
      s = 7, nums = [2,3,1,2,4,3]
      Output:
       2

      Explanation:
      the subarray
      [4,3]
       has the minimal length under the problem constraint.`,
  },
  {
    question: `Minimum Window Substring    `,
    url: `https://aaronice.gitbook.io/lintcode/two_pointers/minimum_window_substring`,
    moreInfo: `For source = "ADOBECODEBANC", target = "ABC", the minimum window is "BANC"    `,
  },
  {
    question: `Longest Substring Without Repeating Characters    `,
    url: `https://aaronice.gitbook.io/lintcode/two_pointers/longest_substring_without_repeating_characters`,
    moreInfo: ``,
  },
  {
    question: `Longest Substring with At Most K Distinct Characters  `,
    url: `https://aaronice.gitbook.io/lintcode/two_pointers/longest_substring_with_at_most_k_distinct_characters`,
    moreInfo: `For example, Given s = "eceba", k = 3,
      T is "eceb" which its length is 4`,
  },
  {
    question: `Longest Substring with At Most Two Distinct Characters    `,
    url: `https://aaronice.gitbook.io/lintcode/two_pointers/longest-substring-with-at-most-two-distinct-characters`,
    moreInfo: `Input: "ccaabbb"
      Output: 5
      Explanation: t is "aabbb" which its length is 5.`,
  },
  {
    question: `Fruit Into Baskets    `,
    url: `https://aaronice.gitbook.io/lintcode/two_pointers/fruit-into-baskets`,
    moreInfo: `Input: [1,2,1]
      Output:
      3
      Explanation:
      We can collect [1,2,1].`,
  },
  {
    question: `Valid Palindrome
      Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.`,
    url: `https://aaronice.gitbook.io/lintcode/two_pointers/valid_palindrome`,
    moreInfo: `"A man, a plan, a canal: Panama" is a palindrome.    `,
  },
  {
    question: `The Smallest Difference    `,
    url: `https://aaronice.gitbook.io/lintcode/two_pointers/the_smallest_difference`,
    moreInfo: `For example, given array A = [3,6,7,4], B = [2,8,9,3], return 0    `,
  },
  {
    question: `Reverse String
      Write a function that takes a string as input and returns the string reversed.    `,
    url: `https://aaronice.gitbook.io/lintcode/two_pointers/reverse-string`,
    moreInfo: `Input:
      "A man, a plan, a canal: Panama"
      Output:
      "amanaP :lanac a ,nalp a ,nam A"`,
  },
  {
    question: `Remove Element
      Given an array nums _and a value _val, remove all instances of that value in-place and return the new length.    `,
    url: `https://aaronice.gitbook.io/lintcode/two_pointers/remove-element`,
    moreInfo: `Given nums = [0,1,2,2,3,0,4,2], val = 2,

      Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.

      Note that the order of those five elements can be arbitrary.

      It doesn't matter what values are set beyond the returned length.`,
  },
  {
    question: `Given a binary array, find the maximum number of consecutive 1s in this array.    `,
    url: `https://aaronice.gitbook.io/lintcode/two_pointers/max-consecutive-ones`,
    moreInfo: `Input:
      [1,1,0,1,1,1]

     Output:
      3

     Explanation:
      The first two digits or the last three digits are consecutive 1s.
         The maximum number of consecutive 1s is 3.`,
  },
  {
    question: `Remove Duplicates from Sorted Array    `,
    url: `https://aaronice.gitbook.io/lintcode/two_pointers/remove-duplicates-from-sorted-array`,
    moreInfo: `Given nums = [0,0,1,1,1,2,2,3,3,4],

      Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

      It doesn't matter what values are set beyond the returned length.`,
  },
  {
    question: ``,
    url: `https://aaronice.gitbook.io/lintcode/two_pointers/remove-duplicates-from-sorted-array-ii`,
    moreInfo: `Given nums = [1,1,1,2,2,3]
      ,

      Your function should return length =
      5
      , with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.

      It doesn't matter what you leave beyond the returned length.`,
  },
  {
    question: `Move Zeroes
      Given an arraynums, write a function to move all0's to the end of it while maintaining the relative order of the non-zero elements.`,
    url: `https://aaronice.gitbook.io/lintcode/two_pointers/move-zeroes`,
    moreInfo: `Input: [0,1,0,3,12]
      Output: [1,3,12,0,0]`,
  },
  {
    question: `Longest Repeating Character Replacement    `,
    url: `https://aaronice.gitbook.io/lintcode/two_pointers/longest-repeating-character-replacement`,
    moreInfo: `Input: s = "AABABBA", k = 1

      Output:
      4

      Explanation:
      Replace the one 'A' in the middle with 'B' and form "AABBBBA".
      The substring "BBBB" has the longest repeating letters, which is 4.`,
  },
  {
    question: `Merge Sorted Array    `,
    url: `https://aaronice.gitbook.io/lintcode/two_pointers/merge-sorted-array`,
    moreInfo: `Input:

      nums1 = [1,2,3,0,0,0], m = 3
      nums2 = [2,5,6],       n = 3


      Output:
       [1,2,2,3,5,6]`,
  },
  {
    question: `3Sum Smaller    `,
    url: `https://aaronice.gitbook.io/lintcode/two_pointers/3sum-smaller`,
    moreInfo: `Input: nums = [-2,0,1,3], and target = 2
      Output: 2
      Explanation:
       Because there are two triplets which sums are less than 2:
                   [-2,0,1]
                   [-2,0,3]`,
  },
  {
    question: `Given two strings S and T, return if they are equal when both are typed into empty text editors.#means a backspace character.    `,
    url: `https://aaronice.gitbook.io/lintcode/two_pointers/backspace-string-compare`,
    moreInfo: `Input: S = "ab##", T = "c#d#"
      Output: true

      Explanation: Both S and T become "".

      Input: S = "ab#c", T = "ad#c"
  Output: true

  Explanation: Both S and T become "ac".`,
  },
  {
    question: `Write a program to check whether a given number is an ugly number.
      Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.`,
    url: `https://aaronice.gitbook.io/lintcode/mathematics/ugly_number`,
    moreInfo: `Given num = 8 return true
      Given num = 14 return false`,
  },
  {
    question: `Ugly number is a number that only have factors 2, 3 and 5.    `,
    url: `https://aaronice.gitbook.io/lintcode/mathematics/ugly_number_ii`,
    moreInfo: ``,
  },
  {
    question: `Write a program to find then nth super ugly number.
      Super ugly numbers are positive numbers whose all prime factors are in the given prime list prime sof sizek.`,
    url: `https://aaronice.gitbook.io/lintcode/mathematics/super-ugly-number`,
    moreInfo: `Input: n = 12, primes = [2,7,13,19]
      Output: 32
      Explanation: [1,2,4,7,8,13,14,16,19,26,28,32] is the sequence of the first 12
                   super ugly numbers given primes = [2,7,13,19] of size 4.`,
  },
  {
    question: `Compute and return the square root of x, where x is guaranteed to be a non-negative integer.`,
    url: `https://aaronice.gitbook.io/lintcode/mathematics/sqrt_x`,
    moreInfo: `Input: 8

     Output: 2

     Explanation:
      The square root of 8 is 2.82842..., and since
                  the decimal part is truncated, 2 is returned.`,
  },
  {
    question: `Pow(x, n)    `,
    url: `https://aaronice.gitbook.io/lintcode/mathematics/powx-n`,
    moreInfo: `Input:
      2.10000, 3

     Output:
      9.26100`,
  },
  {
    question: `Rectangle Overlap    `,
    url: `https://aaronice.gitbook.io/lintcode/mathematics/rectangle-overlap`,
    moreInfo: `Input:
      rec1 = [0,0,2,2], rec2 = [1,1,3,3]

      Output:
      true`,
  },
  {
    question: `Write an algorithm to determine if a number is "happy".  `,
    url: `https://aaronice.gitbook.io/lintcode/mathematics/happy-number`,
    moreInfo: `Input: 19
      Output: true
      Explanation:
      1^2 + 9^2 = 82
      8^2 + 2^2 = 68
      6^2 + 8^2 = 100
      1^2 + 0^2 + 0^2 = 1`,
  },
  {
    question: `Add N Days to Given Date    `,
    url: `https://aaronice.gitbook.io/lintcode/mathematics/add-n-days-to-given-date`,
    moreInfo: `date as string yyyyMMdd
      positive integer 'n' delta in days
      add n days to the date and return the correct date.

      date assume it's valid
      n could be arbitary big number
      return date in String yyyyMMdd`,
  },
  {
    question: `Given a 32-bit signed integer, reverse digits of an integer.    `,
    url: `https://aaronice.gitbook.io/lintcode/mathematics/reverse-integer`,
    moreInfo: `Input: -123
     Output: -321`,
  },
  {
    question: `Greatest Common Divisor or Highest Common Factor    `,
    url: `https://aaronice.gitbook.io/lintcode/mathematics/greatest-common-divisor-or-highest-common-factor`,
    moreInfo: ``,
  },
  {
    question: `House Robber
      You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
  Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police`,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/house_robber`,
    moreInfo: `Given [3, 8, 4], return 8.    `,
  },
  {
    question: `House Robber II
      fter robbing those houses on that street, the thief has found himself a new place for his thievery so that he will not get too much attention. This time, all houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, the security system for these houses remain the same as for those in the previous street.
  Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.`,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/house_robber_ii`,
    moreInfo: `nums = [3,6,4], return 6
      `,
  },
  {
    question: `House Robber III
      The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night.
  Determine the maximum amount of money the thief can rob tonight without alerting the police`,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/house-robber-iii`,
    moreInfo: `Input: [3,2,3,null,3,null,1]

      3
     / \
    2   3
     \   \
      3   1

  Output: 7
  Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.`,
  },
  {
    question: `Give an integer array，find the longest increasing continuous subsequence in this array.
      An increasing continuous subsequence:
      Can be from right to left or from left to right.
      Indices of the integers in the subsequence should be continuous.`,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/longest_increasing_continuous_subsequence`,
    moreInfo: `For [5, 4, 2, 1, 3], the LICS is [5, 4, 2, 1], return 4.    `,
  },
  {
    question: `Give you an integer matrix (with row size n, column size m)，find the longest increasing continuous subsequence in this matrix. (The definition of the longest increasing continuous subsequence here can start at any row or column and go up/down/right/left any direction).    `,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/longest_increasing_continuous_subsequence_ii`,
    moreInfo: `input: [
        [1 ,2 ,3 ,4 ,5],
        [16,17,24,23,6],
        [15,18,25,22,7],
        [14,19,20,21,8],
        [13,12,11,10,9]
       ]
       return 25
  `,
  },
  {
    question: `There are n coins in a line. Two players take turns to take one or two coins from right side until there are no more coins left. The player who take the last coin wins.
      Could you please decide the first play will win or lose?`,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/coins_in_a_line`,
    moreInfo: ``,
  },
  {
    question: `There are n coins with different value in a line. Two players take turns to take one or two coins from left side until there are no more coins left. The player who take the coins with the most value wins.
      Could you please decide the first player will win or lose?`,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/coins_in_a_line_ii`,
    moreInfo: `Given values array A = [1,2,2], return true.
      Given A = [1,2,4], return false`,
  },
  {
    question: `There are n coins in a line. Two players take turns to take a coin from one of the ends of the line until there are no more coins left. The player with the larger amount of money wins.
      Could you please decide the first player will win or lose?
      `,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/coins_in_a_line_iii`,
    moreInfo: `Given array A = [3,2,2], return true.
      Given array A = [1,2,4], return true.
      Given array A = [1,20,4], return fals`,
  },
  {
    question: `Find the contiguous subarray within an array (containing at least one number) which has the largest product.    `,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/maximum_product_subarray`,
    moreInfo: `For example, given the array [2,3,-2,4], the contiguous subarray [2,3] has the largest product = 6.    `,
  },
  {
    question: `Given a string S, find the longest palindromic substring in S. You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.    `,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/longest_palindromic_substring`,
    moreInfo: `Given the string = "abcdzdcab", return "cdzdc".    `,
  },
  {
    question: `Perfect Squares    `,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/perfect-squares`,
    moreInfo: `Input: n = 12
      Output: 3
      Explanation: 12 = 4 + 4 + 4.`,
  },
  {
    question: `Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.    `,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/triangle`,
    moreInfo: `[
        [2],
       [3,4],
      [6,5,7],
     [4,1,8,3]
   ]

   The minimum path sum from top to bottom is11(i.e.,2+3+5+1= 11`,
  },
  {
    question: `Given a non-negative integer numRows, generate the first _numRows _of Pascal's triangle.    `,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/pascals-triangle`,
    moreInfo: `Input: 5

     Output:
     [
          [1],
         [1,1],
        [1,2,1],
       [1,3,3,1],
      [1,4,6,4,1]
     ]`,
  },
  {
    question: `Given a non-negative index k where k≤ 33, return the _k_th index row of the Pascal's triangle.    `,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/pascals-triangle-ii`,
    moreInfo: `Input: 3
     Output: [1,3,3,1]`,
  },
  {
    question: `Min Cost Climbing Stairs    `,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/min-cost-climbing-stairs`,
    moreInfo: `Input: cost = [10, 15, 20]

     Output: 15

     Explanation:
      Cheapest is start on cost[1], pay that cost and go to the top.`,
  },
  {
    question: `You are climbing a staircase. It takes _n _steps to reach to the top.
      Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?`,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/climbing-stairs`,
    moreInfo: `Input: 2

     Output: 2

     Explanation:
      There are two ways to climb to the top.
     1. 1 step + 1 step
     2. 2 steps`,
  },
  {
    question: `A robot is located at the top-left corner of a _m_x_n _grid (marked 'Start' in the diagram below).
      The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
      How many possible unique paths are there?`,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/unique-paths`,
    moreInfo: `Input: m = 3, n = 2
      Output: 3
      Explanation:
      From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
      1. Right -> Right -> Down
      2. Right -> Down -> Right
      3. Down -> Right -> Right`,
  },
  {
    question: `A robot is located at the top-left corner of a_m_x_n_grid (marked 'Start' in the diagram below).
      The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
      Now consider if some obstacles are added to the grids. How many unique paths would there be?`,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/unique-paths-ii`,
    moreInfo: `Input:
      [
        [0,0,0],
        [0,1,0],
        [0,0,0]
      ]
      Output: 2
      Explanation:
      There is one obstacle in the middle of the 3x3 grid above.
      There are two ways to reach the bottom-right corner:
      1. Right -> Right -> Down -> Down
      2. Down -> Down -> Right -> Right`,
  },
  {
    question: `Given a _m_x_n _grid filled with non-negative numbers, find a path from top left to bottom right which_minimizes_the sum of all numbers along its path.
      Note:You can only move either down or right at any point in time`,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/minimum-path-sum`,
    moreInfo: `Input:
      [
        [1,3,1],
        [1,5,1],
        [4,2,1]
      ]
      Output: 7
      Explanation: Because the path 1→3→1→1→1 minimizes the sum.`,
  },
  {
    question: `Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words`,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/word-break`,
    moreInfo: `Input: s = "leetcode", wordDict = ["leet", "code"]
      Output: true
      Explanation: Return true because "leetcode" can be segmented as "leet code".`,
  },
  {
    question: `Given a non-empty string_s_and a dictionary_wordDict_containing a list of non-empty words, add spaces in_s_to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.`,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/word-break-ii`,
    moreInfo: `Input: s = "catsanddog"
      wordDict = ["cat", "cats", "and", "sand", "dog"]
      Output:
      [
        "cats and dog",
        "cat sand dog"
      ]`,
  },
  {
    question: `Given two words word1_and_word2, find the minimum number of operations required to convert word1_to_word2.
      You have the following 3 operations permitted on a word:
      Insert a character
      Delete a character
      Replace a character`,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/edit-distance`,
    moreInfo: `Input: word1 = "horse", word2 = "ros"
      Output: 3
      Explanation:
      horse -> rorse (replace 'h' with 'r')
      rorse -> rose (remove 'r')
      rose -> ros (remove 'e')`,
  },
  {
    question: `Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?    `,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/unique-binary-search-trees`,
    moreInfo: `Input: 3
      Output: 5
      Explanation:
      Given n = 3, there are a total of 5 unique BST's:

         1         3     3      2      1
          \       /     /      / \      \
           3     2     1      1   3      2
          /     /       \                 \
         2     1         2                 3`,
  },
  {
    question: `Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1 ... n.    `,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/unique-binary-search-trees-ii`,
    moreInfo: `Input: 3

     Output:
     [
       [1,null,3,2],
       [3,2,null,1],
       [3,1,null,null,2],
       [2,1,3],
       [1,null,2,null,3]
     ]

     Explanation:

     The above output corresponds to the 5 unique BST's shown below:

        1         3     3      2      1
         \       /     /      / \      \
          3     2     1      1   3      2
         /     /       \                 \
        2     1         2                 3`,
  },
  {
    question: `Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.    `,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/maximal-rectangle`,
    moreInfo: `Input:
      [
        ["1","0","1","0","0"],
        ["1","0","1","1","1"],
        ["1","1","1","1","1"],
        ["1","0","0","1","0"]
      ]
      Output: 6`,
  },
  {
    question: `Given a 2D binary matrix filled with 0's and 1's, find the largest square containing all 1's and return its area.    `,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/maximal-square`,
    moreInfo: `For example, given the following matrix:
      1 0 1 0 0
      1 0 1 1 1
      1 1 1 1 1
      1 0 0 1 0
      Return 4.`,
  },
  {
    question: `Given an input string (s) and a pattern (p), implement regular expression matching with support for'.'and'*'.    `,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/regular-expression-matching`,
    moreInfo: `Input:  s = "aab"
      p = "c*a*b"

      Output: true

      Explanation:
       c can be repeated 0 times, a can be repeated 1 time. Therefore it matches "aab".`,
  },
  {
    question: `Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*'.    `,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/wildcard-matching`,
    moreInfo: `Input:
      s = "acdcb"
      p = "a*c?b"
      Output: false`,
  },
  {
    question: `Given an unsorted array of integers, find the length of longest increasing subsequence.    `,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/longest-increasing-subsequence`,
    moreInfo: `Input: [10,9,2,5,3,7,101,18]
      Output: 4
      Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.`,
  },
  {
    question: `Find out how many ways to assign symbols to make sum of integers equal to target S.    `,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/target-sum`,
    moreInfo: `Input: nums is [1, 1, 1, 1, 1], S is 3.
      Output: 5
      Explanation:

      -1+1+1+1+1 = 3
      +1-1+1+1+1 = 3
      +1+1-1+1+1 = 3
      +1+1+1-1+1 = 3
      +1+1+1+1-1 = 3

      There are 5 ways to assign symbols to make the sum of nums be target 3.`,
  },
  {
    question: `Given a non-empty array containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.    `,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/partition-equal-subset-sum`,
    moreInfo: `Input: [1, 5, 11, 5]

      Output: true

      Explanation: The array can be partitioned as [1, 5, 5] and [11].`,
  },
  {
    question: `Coin Change    `,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/coin-change`,
    moreInfo: `Input:
      coins =
      [1, 2, 5]
      , amount =
      11
      Output:
      3
      Explanation:
       11 = 5 + 5 + 1`,
  },
  {
    question: `Given an array of non-negative integers, you are initially positioned at the first index of the array.
      Each element in the array represents your maximum jump length at that position.
      Determine if you are able to reach the last index`,
    url: `https://aaronice.gitbook.io/lintcode/dynamic_programming/jump-game`,
    moreInfo: `Input:
      [2,3,1,1,4]

     Output:
      true

     Explanation:
      Jump 1 step from index 0 to 1, then 3 steps to the last index.`,
  },
  {
    question: `Given n items with size Ai and value Vi, and a backpack with size m. What's the maximum value can you put into the backpack?  `,
    url: `https://aaronice.gitbook.io/lintcode/knapsack_problems/backpack_ii`,
    moreInfo: ``,
  },
  {
    question: `Given n_kind of items with size Aiand value Vi(each item has an infinite number available) and a backpack with size_m. What's the maximum value can you put into the backpack?
      You cannot divide item into small pieces and the total size of items you choose should smaller or equal to m.`,
    url: `https://aaronice.gitbook.io/lintcode/knapsack_problems/backpack-iii`,
    moreInfo: `Given 4 items with size[2, 3, 5, 7]and value[1, 5, 2, 4], and a backpack with size10. The maximum value is15.    `,
  },
  {
    question: `Given n items with size nums[i] which an integer array and all positive numbers, no duplicates. An integer target denotes the size of a backpack. Find the number of possible fill the backpack.
      Each item may be chosen unlimited number of times`,
    url: `https://aaronice.gitbook.io/lintcode/knapsack_problems/backpack-iv`,
    moreInfo: `Given candidate items[2,3,6,7]and target7,
      A solution set is:
      [7]
      [2, 2, 3]`,
  },
  {
    question: `Given n items with sizenums[i]which an integer array and all positive numbers. An integertargetdenotes the size of a backpack. Find the number of possible fill the backpack.
      Each item may only be used once`,
    url: `https://aaronice.gitbook.io/lintcode/knapsack_problems/backpack-v`,
    moreInfo: `Given candidate items[1,2,3,3,7]and target7,
      A solution set is:
      [7]
      [1, 3, 3]
      return 2`,
  },
  {
    question: `Given an integer arraynumswith all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integertarget.
      A number in the array can be used multiple times in the combination.
      Different orders are counted as different combinations.`,
    url: `https://aaronice.gitbook.io/lintcode/knapsack_problems/backpack-vi`,
    moreInfo: `Given nums =[1, 2, 4], target =4
      The possible combination ways are:
      [1, 1, 1, 1]
      [1, 1, 2]
      [1, 2, 1]
      [2, 1, 1]
      [2, 2]
      [4]`,
  },
  {
    question: `Assume that you havenyuan. There are many kinds of rice in the supermarket. Each kind of rice is bagged and must be purchased in the whole bag. Given theweight,priceandquantityof each type of rice, findthe maximum weightof rice that you can purchase.    `,
    url: `https://aaronice.gitbook.io/lintcode/knapsack_problems/backpack-vii`,
    moreInfo: `Given:
      n = 8
      prices = [2,4]
      weight = [100,100]
      amounts = [4,2]

      Return:400`,
  },
  {
    question: `You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return-1.    `,
    url: `https://aaronice.gitbook.io/lintcode/knapsack_problems/coin-change`,
    moreInfo: `Input:
      coins =
      [1, 2, 5]
      , amount =
      11
      Output:
      3
      Explanation:
       11 = 5 + 5 + 1`,
  },
  {
    question: `You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.    `,
    url: `https://aaronice.gitbook.io/lintcode/knapsack_problems/coin-change-ii`,
    moreInfo: `Input: amount = 5, coins = [1, 2, 5]
      Output: 4
      Explanation: there are four ways to make up the amount:
      5=5
      5=2+2+1
      5=2+1+1+1
      5=1+1+1+1+1`,
  },
  {
    question: `Given an array of non-negative integers, you are initially positioned at the first index of the array.
      Each element in the array represents your maximum jump length at that position.
      Your goal is to reach the last index in the minimum number of jump`,
    url: `https://aaronice.gitbook.io/lintcode/greedy/jump-game-ii`,
    moreInfo: `Input:
      [2,3,1,1,4]

     Output:
      2

     Explanation:
      The minimum number of jumps to reach the last index is 2.
         Jump 1 step from index 0 to 1, then 3 steps to the last index.`,
  },
  {
    question: `Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.`,
    url: `https://aaronice.gitbook.io/lintcode/greedy/remove-k-digits`,
    moreInfo: `Input: num = "1432219", k = 3
      Output: "1219"
      Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.`,
  },
  {
    question: `Given an array of meeting time intervals consisting of start and end times[[s1,e1],[s2,e2],...](si< ei), determine if a person could attend all meetings.    `,
    url: `https://aaronice.gitbook.io/lintcode/sweep-line/meeting-rooms`,
    moreInfo: `Input:
      [[0,30],[5,10],[15,20]]
      Output:
       false`,
  },
  {
    question: `Given an array of meeting time intervals consisting of start and end times[[s1,e1],[s2,e2],...](si< ei), find the minimum number of conference rooms required.    `,
    url: `https://aaronice.gitbook.io/lintcode/sweep-line/meeting-rooms-ii`,
    moreInfo: `Input:
      [[0, 30],[5, 10],[15, 20]]
      Output:
       2`,
  },
  {
    question: `Given a collection of intervals, merge all overlapping intervals.    `,
    url: `https://aaronice.gitbook.io/lintcode/sweep-line/merge-intervals`,
    moreInfo: `Input:
      [[1,3],[2,6],[8,10],[15,18]]

     Output:
      [[1,6],[8,10],[15,18]]

     Explanation:
      Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].`,
  },
  {
    question: `Given a set of _non-overlapping _intervals, insert a new interval into the intervals (merge if necessary).
      You may assume that the intervals were initially sorted according to their start times.`,
    url: `https://aaronice.gitbook.io/lintcode/sweep-line/insert-interval`,
    moreInfo: `Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
      Output: [[1,2],[3,10],[12,16]]
      Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].`,
  },
  {
    question: `Given an interval list which are flying and landing time of the flight. How many airplanes are on the sky at most?
      Notice
      If landing and flying happens at the same time, we consider landing should happen at first.`,
    url: `https://aaronice.gitbook.io/lintcode/sweep-line/number_of_airplanes_in_the_sky`,
    moreInfo: `For interval list
      [
        [1,10],
        [2,3],
        [5,8],
        [4,7]
      ]
      Return 3`,
  },
  {
    question: `In an exam room, there areNseats in a single row, numbered0, 1, 2, ..., N-1.    `,
    url: `https://aaronice.gitbook.io/lintcode/sweep-line/exam-room`,
    moreInfo: `Input: ["ExamRoom","seat","seat","seat","seat","leave","seat"], [[10],[],[],[],[],[4],[]]
      Output: [null,0,9,4,2,null,5]
      Explanation:
      ExamRoom(10) -> null
      seat() -> 0, no one is in the room, then the student sits at seat number 0.
      seat() -> 9, the student sits at the last seat number 9.
      seat() -> 4, the student sits at the last seat number 4.
      seat() -> 2, the student sits at the last seat number 2.
      leave(4) -> null
      seat() -> 5, the student sits at the last seat number 5.`,
  },
  {
    question: `We are given a list scheduleof employees, which represents the working time for each employee.
      Each employee has a list of non-overlappingIntervals, and these intervals are in sorted order.
      Return the list of finite intervals representing common, positive-length free time forallemployees, also in sorted order.`,
    url: `https://aaronice.gitbook.io/lintcode/sweep-line/employee-free-time`,
    moreInfo: `Input:
      schedule = [[[1,2],[5,6]],[[1,3]],[[4,10]]]

     Output:
      [[3,4]]

     Explanation:

     There are a total of three employees, and all common
     free time intervals would be [-inf, 1], [3, 4], [10, inf].
     We discard any intervals that contain inf as they aren't finite.`,
  },
  {
    question: `We are given an array of n points in the plane, and the problem is to find out the closest pair of points in the array. This problem arises in a number of applications.
      For example, in air-traffic control, you may want to monitor planes that come too close together, since this may indicate a possible collision.`,
    url: `https://aaronice.gitbook.io/lintcode/sweep-line/closest-pair-of-points`,
    moreInfo: ``,
  },
  {
    question: `Implement aMyCalendarclass to store your events. A new event can be added if adding the event will not cause a double booking.    `,
    url: `https://aaronice.gitbook.io/lintcode/sweep-line/my-calendar-i`,
    moreInfo: ``,
  },
  {
    question: `Implement aMyCalendarTwoclass to store your events. A new event can be added if adding the event will not cause a triple booking`,
    url: `https://aaronice.gitbook.io/lintcode/sweep-line/my-calendar-ii`,
    moreInfo: `MyCalendar();
      MyCalendar.book(10, 20); // returns true
      MyCalendar.book(50, 60); // returns true
      MyCalendar.book(10, 40); // returns true
      MyCalendar.book(5, 15); // returns false
      MyCalendar.book(5, 10); // returns true
      MyCalendar.book(25, 55); // returns true

      Explanation:

      The first two events can be booked.  The third event can be double booked.
      The fourth event (5, 15) can't be booked, because it would result in a triple booking.
      The fifth event (5, 10) can be booked, as it does not use time 10 which is already double booked.
      The sixth event (25, 55) can be booked, as the time in [25, 40) will be double booked with the third event;
      the time [40, 50) will be single booked, and the time [50, 55) will be double booked with the second event.`,
  },
  {
    question: `Given an array nums of n integers, find two integers in nums such that the sum is closest to a given number, target.
      Return the difference between the sum of the two integers and the target.`,
    url: `https://aaronice.gitbook.io/lintcode/high_frequency/2sum_closest`,
    moreInfo: `Given array nums = [-1, 2, 1, -4], and target = 4.
      The minimum difference is 1. (4 - (2 + 1) = 1).`,
  },
  {
    question: `3 sum, Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.    `,
    url: `https://aaronice.gitbook.io/lintcode/high_frequency/3sum`,
    moreInfo: ``,
  },
  {
    question: `3 Sum Closest
      Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers.    `,
    url: `https://aaronice.gitbook.io/lintcode/high_frequency/3sum_closest`,
    moreInfo: ``,
  },
  {
    question: `Sort Colors II
      Given an array of n objects with k different colors (numbered from 1 to k), sort them so that objects of the same color are adjacent, with the colors in the order 1, 2, ... k.`,
    url: `https://aaronice.gitbook.io/lintcode/high_frequency/sort_colors_ii`,
    moreInfo: ``,
  },
  {
    question: `Given an array of integers, the majority number is the number that occurs more than half of the size of the array. Find it`,
    url: `https://aaronice.gitbook.io/lintcode/high_frequency/majority_number`,
    moreInfo: `Given [1, 1, 1, 1, 2, 2, 2], return 1    `,
  },
  {
    question: `Given an array of integers, the majority number is the number that occurs more than 1/3 of the size of the array.  `,
    url: `https://aaronice.gitbook.io/lintcode/high_frequency/majority_number_ii`,
    moreInfo: `Given [1, 2, 1, 2, 1, 3, 3], return 1.    `,
  },
  {
    question: `Given an array of integers and a number k, the majority number is the number that occurs more than 1/k of the size of the array.    `,
    url: `https://aaronice.gitbook.io/lintcode/high_frequency/majority_number_iii`,
    moreInfo: `Given [3,1,2,3,2,3,3,4,4,4] and k=3, return 3.    `,
  },
  {
    question: `Best Time to Buy and Sell Stock    `,
    url: `https://aaronice.gitbook.io/lintcode/high_frequency/best_time_to_buy_and_sell_stock`,
    moreInfo: ``,
  },
  {
    question: `Best Time to Buy and Sell Stock II
    Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).`,
    url: `https://aaronice.gitbook.io/lintcode/high_frequency/best_time_to_buy_and_sell_stock_ii`,
    moreInfo: `Input:
      [7,1,5,3,6,4]

     Output:
      7

     Explanation:
      Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
                  Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.`,
  },
  {
    question: `Say you have an array for which the ith element is the price of a given stock on day i.
    Design an algorithm to find the maximum profit. You may complete at most two transactions.`,
    url: `https://aaronice.gitbook.io/lintcode/high_frequency/best_time_to_buy_and_sell_stock_iii`,
    moreInfo: `Given an example [4,4,6,1,1,4,2,5], return 6.    `,
  },
  {
    question: `Say you have an array for which the ith element is the price of a given stock on day i.
    Design an algorithm to find the maximum profit. You may complete at most k transactions.`,
    url: `https://aaronice.gitbook.io/lintcode/high_frequency/best_time_to_buy_and_sell_stock_iv`,
    moreInfo: `Given prices = [4,4,6,1,1,4,2,5], and k = 2, return 6.    `,
  },
  {
    question: `two sum
      Given an array of integers, return indices of the two numbers such that they add up to a specific target.`,
    url: `https://aaronice.gitbook.io/lintcode/high_frequency/two-sum`,
    moreInfo: `Given nums = [2, 7, 11, 15], target = 9,

      Because nums[0] + nums[1] = 2 + 7 = 9,
      return [0, 1].`,
  },
  {
    question: `Two Sum II - Input array is sorted
      Given an array of integers that is alreadysorted in ascending order, find two numbers such that they add up to a specific target number.
  The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.`,
    url: `https://aaronice.gitbook.io/lintcode/high_frequency/two-sum-ii-input-array-is-sorted`,
    moreInfo: `Input: numbers = [2,7,11,15], target = 9
      Output: [1,2]
      Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2`,
  },
  {
    question: `Design and implement a TwoSum class. It should support the following operations:addandfind.
      add- Add the number to an internal data structure.
      find- Find if there exists any pair of numbers which sum is equal to the value.`,
    url: `https://aaronice.gitbook.io/lintcode/high_frequency/two-sum-iii-data-structure-design`,
    moreInfo: `add(1); add(3); add(5);
      find(4) -> true
      find(7) -> false`,
  },
  {
    question: `Two Sum IV - Input is a BST
    Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.`,
    url: `https://aaronice.gitbook.io/lintcode/high_frequency/two-sum-iv-input-is-a-bst`,
    moreInfo: `
      Input:

      5
     / \
    3   6
   / \   \
  2   4   7

  Target = 9


  Output:
   True`,
  },
  {
    question: `Given an arraynumsofn_integers and an integertarget, are there elements_a,b,c, andd_innumssuch that_a+b+c+d=target? Find all unique quadruplets in the array which gives the sum oftarget.    `,
    url: `https://aaronice.gitbook.io/lintcode/high_frequency/4-sum`,
    moreInfo: `Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

      A solution set is:
      [
        [-1,  0, 0, 1],
        [-2, -1, 1, 2],
        [-2,  0, 0, 2]
      ]`,
  },
  {
    question: `4 Sum II    `,
    url: `https://aaronice.gitbook.io/lintcode/high_frequency/4-sum-ii`,
    moreInfo: `Input:
      A = [ 1, 2]
      B = [-2,-1]
      C = [-1, 2]
      D = [ 0, 2]

      Output:
      2

      Explanation:
      The two tuples are:
      1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
      2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0`,
  },
  { question: ``, url: ``, moreInfo: `` },
  { question: ``, url: ``, moreInfo: `` },
  { question: ``, url: ``, moreInfo: `` },
  { question: ``, url: ``, moreInfo: `` },
  { question: ``, url: ``, moreInfo: `` },
  { question: ``, url: ``, moreInfo: `` },
  { question: ``, url: ``, moreInfo: `` },
  { question: ``, url: ``, moreInfo: `` },
  { question: ``, url: ``, moreInfo: `` },
  { question: ``, url: ``, moreInfo: `` },
  { question: ``, url: ``, moreInfo: `` },
  { question: ``, url: ``, moreInfo: `` },
  { question: ``, url: ``, moreInfo: `` },
];

export default json;
