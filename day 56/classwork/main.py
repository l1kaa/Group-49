# 1) შექმენით რაიმე list'ი რომელშიც იქნება integer'ები და შემდეგ ამოწერეთ მხოლოდ ისეთი რიცხვები რომლებიც მეტია ან ტოლია 40'ის.
numbers = [43, 13, 78, 0, -34]
result = list(filter(lambda x: x >= 40, numbers))
print(result)

# 2) შექმენით რაიმე list'ი რომელშიც იქნება integer'ები და შემდეგ გამოიტანეთ list'ი სადაც იქნება ყველა რიცხვის კვადრატი.
numbers2 = [14, 10, 25, 30]
result2 = list(map(lambda x: x ** 2,numbers2))
print(result2)

# 3) შექმენით რაიმე list'ი რომელშიც იქნება string'ები და შემდეგ ამოწერეთ მხოლოდ ისეთები რომლებიც მთავრდება "a" სიმბოლოთი.
# solution N1
strings = ["apple", "banana", "watermelon", "pomegranate"]
result3 = list(filter(lambda x: x.endswith("a"),strings))
print(result3)

# solution N2
strings2 = ["apple", "banana", "watermelon", "pomegranate"]
result4 = list(filter(lambda x: x[-1] == "a",strings2))
print(result4)