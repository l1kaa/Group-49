# Static method:

# Static method-ს არ სჭირდება პარამეტრები, რადგან ის არ არის დამოკიდებული კლასის ან instance-ის რაიმე კუთვნილებაზე.

class Math_operation:
    @staticmethod
    def multiply(a, b):
        return a * b

print(Math_operation.multiply(10, 20))