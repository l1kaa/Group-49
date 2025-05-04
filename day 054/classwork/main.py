# კითხვებზე პასუხი (კომენტარებით):
# 1) რომლებია mutable მონაცემთა ტიპები?
# mutable არის set , list , და dictionary (ბიბლიოთეკა)

# 2) რომლებია immutable მონაცემთა ტიპები?
# immutable არის strings და tuples

# 3) რა ეწოდება lambda ფუნქციას მეორენაირად?
# ანონიმური ფუნქცია - anonymous function

# 4) რა განსხვავებაა map'სა და filter'ს შორის?
# map - არგუმენტად ფუნქციებს იღებს, ხოლო filter - boolean-ს.

# 5) რა ჰქვია ორი სტრინგის შეერთებას?
# კონკატინაცია - concatination

# MAPS
# გამოიყენეთ map ფუნქცია რომ შექმნათ list'ი სადაც იქნება ამ რიცხვების კვადრატები: [1, 2, 3, 4, 5]
nums = [1, 2, 3, 4, 5]
res = list(map(lambda x: x**2, nums))
print(res)

# დაწერეთ პროგრამა mapის გამოყენებით რომ გადაიყვანოთ ამ list'ში მოცემული celsius'ები fahrenheit'ში: [0, 20, 30, 40] (1 celsius == 33.8 fahrenheit)
celcius = [0, 20, 30, 40]
c_to_f = list(map(lambda x: x * 33.8, celcius))
print(c_to_f)

# გამოიყენეთ map ფუნქცია რომ გაადიდოთ ყველა სიტყვის პირველი ასო ამ list'ში: ["hello", "world", "python"].
words = ["hello", "world", "python"]
uppercase = list(map(lambda x: x.upper(), words))
print(uppercase)


# FILTERS
# გამოიყენეთ filter ფუნქცია რომ ამოწეროთ მხოლოდ ლუწი რიცხვები list'იდან: [1, 2, 3, 4, 5, 6, 7, 8].
numbers = [1, 2, 3, 4, 5, 6, 7, 8]
is_even = list(filter(lambda x: x % 2 == 0, numbers))
print(is_even)

# დაწერეთ პროგრამა filterის გამოყენებით რომ ამოწეროთ ისეთი string'ები რომლებიც შეიცავენ 4 სიმბოლოს ან მასზე მეტს: ["cat", "house", "tree", "car"].
words2 = ["cat", "house", "tree", "car"]
length = list(filter(lambda x: len(x) >= 4, words2))

# გამოიყენეთ filter ფუნქცია რომ ამოწეროთ სამის ჯერადი რიცხვები: [3, 9, 15, 22, 27, 30].
numbers2 = [3, 9, 15, 22, 27, 30]
res2 = list(filter(lambda x: x % 3 == 0, numbers2))
print(res2)