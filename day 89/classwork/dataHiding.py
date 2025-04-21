# მოიყვანეთ მაგალითი რა შემთხვევაში დაგვჭირდება data hiding და გააკეთეთ მსგავსი რამ კოდით

# data hiding გვჭირდება იმ შემთხვევაში, როცა გვინდა, რომ მომხმარებლის რაიმე მონაცემი ანონიმური იყოს.


class Customer:
    def __init__(self, name, creditCard, ID):
        self.name = name
        self._ID = ID
        self.__creditCard = creditCard

    def get_creditCard(self):
        print(f"Customer's credit card number is: {self.__creditCard}")

    def get_ID(self):
        print(f"Customer's ID number is: {self._ID}")

customer1 = Customer("Lika", 72627471, 1111)

customer1.get_creditCard()
customer1.get_ID()