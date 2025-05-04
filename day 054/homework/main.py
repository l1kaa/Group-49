# 2) Use the map function to double the numbers in a list: [2, 4, 6, 8, 10].
numbers = [2, 4, 6, 8, 10]
result = list(map(lambda x: x * 2,numbers))
print(result)

# 3) Write a program using map to concatenate "Hello, " to each name in a list: ["Alice", "Bob", "Charlie"].
names = ["Alice", "Bob", "Charlie"]
res = list(map(lambda x: "Hello, " + x, names))
print(res)

# 4) Use map to calculate the lengths of strings in a list: ["apple", "banana", "kiwi"].
fruits = ["apple", "banana", "kiwi"]
res2 = list(map(lambda x: len(x), fruits))
print(res2)

# 5) Use the filter function to keep only positive numbers from a list: [-5, 3, -2, 7, 0, 10].
nums = [-5, 3, -2, 7, 0, 10]
res3 = list(filter(lambda x: x >= 0, nums))
print(res3)

# 6) Write a program using filter to extract words starting with the letter "p" from a list: ["pear", "apple", "peach", "grape"].
fruits2 = ["pear", "apple", "peach", "grape"]
res4 = list(filter(lambda x: x[0] != "p", fruits2))
print(res4)
# or:
res5 = list(filter(lambda x: x.startswith("p"), fruits2))
print(res4)

# 7) Use filter to find numbers greater than 50 in a list: [10, 55, 42, 78, 65, 20].
nums2 = [10, 55, 42, 78, 65, 20]
res6 = list(filter(lambda x: x > 50, nums2))
print(res6)