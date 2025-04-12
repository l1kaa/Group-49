# Instance method:

# Instance method-ს აუცილებლად სჭირდება self პარამეტრი რადგან ის მუშაობს კლასის instance-ებსა და მათში მყოფ ინფორმაციაზე.

class Person:
    def __init__(self, name):
        self.name = name

    def greet(self):
        return f"Hello, my name is {self.name}"
    

person1 = Person("Lika")
print(person1.greet())