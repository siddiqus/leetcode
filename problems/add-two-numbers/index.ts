/* eslint-disable no-constant-condition */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function getNumberFromLinkedList(ll: ListNode | null) {
  if (!ll) {
    return 0
  }

  const numbers = []
  let current: ListNode | null = ll
  while (true) {
    numbers.push(current.val)

    if (current.next) {
      current = current.next
    } else {
      break
    }
  }
  const reversed = numbers.reverse()
  return BigInt(reversed.join(''))
}

function buildLinkedListFromReverse(arr: number[]) {
  const last = arr[0]

  let head = new ListNode(last)

  for (let i = 1; i < arr.length; i++) {
    const newNode = new ListNode(arr[i], head)
    head = newNode
  }

  return head
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1 && l2) {
    return l2
  }
  if (!l2 && l1) {
    return l1
  }
  if (!l1 && !l2) {
    return new ListNode(0)
  }

  const firstNumber = getNumberFromLinkedList(l1)
  const secondNumber = getNumberFromLinkedList(l2)

  const sum = BigInt(firstNumber) + BigInt(secondNumber)
  const sumSplit = sum.toString().split('').map(Number)

  return buildLinkedListFromReverse(sumSplit)
}


const a1 = [
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1
]
const a2 = [4, 6, 5]
const l1 = buildLinkedListFromReverse(a1)
const l2 = buildLinkedListFromReverse(a2)

console.log(addTwoNumbers(l1, l2))
