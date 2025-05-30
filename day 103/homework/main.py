class Dog:
    def __init__(self, input_name, input_breed, input_age = 0, input_friendliness=True):
        self.friends = []

    def become_friends(self, other_dog):
        if(other_dog.is_friendly):
            self.friends.append(other_dog)
            other_dog.friends.append(self)
            print("{name} become friends with {other_name}!".format(name = self.name, other_name = other_dog.name))
        else:
            print("{other_name} did not want to become friends with {name}!".format(name = self.name, other_name = other_dog.name))
