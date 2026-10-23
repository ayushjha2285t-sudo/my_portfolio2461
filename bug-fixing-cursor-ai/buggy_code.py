# Buggy program: Calculate the average

numbers = [10, 20, 30, 40, 50]

total = 0
for i in range(len(numbers)):
    total += numbers[i]
average = total / len(numbers)

print("Total:", total)
print("Average:", average)
