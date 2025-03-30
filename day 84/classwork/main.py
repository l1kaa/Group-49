# Human

# Programmer(Human)
# Designer(Human)

# Goaprogrammer(Programmer)
# Goadesiner(Designer)

# Professional(Programmer, Designer)



class Human:
    def __init__(self, name):
        self.name = name

class Programmer(Human):
    def learn(self):
        print(f"{self.name} is learning")

class Designer(Human):
    def designing(self):
        print(f"{self.name} is designing")

class Goaprogrammer(Programmer):
    def teaching(self):
        print(f"{self.name} is teaching the students coding")

class Goadesigner(Designer):
    def design_teaching(self):
        print(f"{self.name} is teaching students how to make designs")

class Professional(Programmer, Designer):
    pass

person1 = Human("Ana")
person2 = Programmer("Lika")
person3 = Designer("Lasha")
person4 = Goaprogrammer("Data")
person5 = Goadesigner("Giorgi")
person6 = Professional("Nika")


person2.learn()
person3.designing()
person4.teaching()
person5.design_teaching()
person6.learn()


