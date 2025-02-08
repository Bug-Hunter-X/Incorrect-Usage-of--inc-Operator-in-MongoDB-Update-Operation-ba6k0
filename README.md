# MongoDB $inc Operator Usage Bug
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The provided `bug.js` file showcases incorrect usage that can lead to negative sequence values. The solution is provided in `bugSolution.js`.

## Bug Description
Incorrectly using the `$inc` operator without checking for an existing value or handling edge cases can lead to unexpected behavior, including negative sequence numbers.  This can affect applications that rely on monotonically increasing sequences.

## Solution
The `bugSolution.js` file offers a more robust approach, avoiding potential issues by ensuring the sequence value remains positive.