def calculate_total(numbers):
    return sum(numbers)


def calculate_average(numbers):
    if not numbers:
        return 0
    return calculate_total(numbers) / len(numbers)


numbers = [10, 20, 30, 40, 50]

total = calculate_total(numbers)
average = calculate_average(numbers)

print("Total:", total)
print("Average:", average)