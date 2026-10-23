
# Python Programs Collection

# 1. Factorial
def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result


# 2. Fibonacci Series
def fibonacci(n):
    a, b = 0, 1
    series = []

    for _ in range(n):
        series.append(a)
        a, b = b, a + b

    return series


# 3. Structure-to-Dictionary
# Python equivalent using a class
class Student:
    def __init__(self, name, age, course):
        self.name = name
        self.age = age
        self.course = course


def student_to_dictionary(student):
    return vars(student)


if __name__ == "__main__":
    number = int(input("Enter a number for factorial: "))
    if number < 0:
        print("Factorial is not defined for negative numbers.")
    else:
        print("Factorial:", factorial(number))

    count = int(input("How many Fibonacci terms? "))
    if count < 0:
        print("Enter a non-negative number.")
    else:
        print("Fibonacci Series:", fibonacci(count))

    student = Student("Ayush", 18, "B.Tech CSE")
    print("Student Dictionary:", student_to_dictionary(student))
